package server

import (
	"fmt"
	"log"
	"net/http"

	"vastnebula.com/pong/config"
	"vastnebula.com/pong/pb"
	"vastnebula.com/pong/pong"

	"github.com/gorilla/websocket"
)

// Server is the websocket server.
type Server struct {
	Port      string
	Clients   map[*Client]bool
	Game      *pong.Game
	input     chan *pb.UserAction
	broadcast chan bool
	origin    string
}

// Creates a new server with the configuration specified in the .env file.
func New() *Server {
	config.Setup() // Setup environment variables
	s := new(Server)
	c := make(chan bool)
	s.Port = fmt.Sprintf(":%s", config.Env("PORT"))
	s.Clients = make(map[*Client]bool)
	s.Game = pong.NewGame()
	s.input = make(chan *pb.UserAction)
	s.broadcast = c
	s.origin = config.Env("ORIGIN")

	return s
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

// wsHandler handles websocket connections.
func (s *Server) wsHandler(w http.ResponseWriter, r *http.Request) {
	upgrader.CheckOrigin = func(r *http.Request) bool {
		origin := r.Header.Get("Origin")
		return origin == s.origin
	}

	// Upgrade connection into websocket connection
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		_, _ = fmt.Fprintf(w, "websocket connection error")
		return
	}
	defer conn.Close() // Close connection when function done

	// Save newly connected client
	log.Println("client connected")
	c := NewClient(conn, s)
	if _, ok := s.Clients[c]; !ok {
		s.Clients[c] = true
	}

	c.Listen() // Setup client listeners
}

// enableCors is a quick function to enable CORS for GET requests.
// This function does not handle pre-flight OPTIONS requests.
func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", config.Env("ORIGIN"))
}

// healthHandler handles requests to the healthcheck endpoint. Responds with http.StatusOK.
func (s *Server) healthHandler(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	w.WriteHeader(http.StatusOK)
}

// Run starts game and the server.
func (s *Server) Run() {
	// Run the game
	go s.Game.Run(s.input, s.broadcast)

	// Broadcast to all clients
	go s.broadcastListener()

	// Handle connections to the websocket
	http.HandleFunc("/websocket", s.wsHandler)

	// Health check route
	http.HandleFunc("/healthcheck", s.healthHandler)

	// Start server
	fmt.Println("server listening on port", s.Port)
	err := http.ListenAndServe(s.Port, nil)
	if err != nil {
		_ = fmt.Errorf("failed to start server")
	}
}

// handleDisconnection removes the client from the server list of clients.
func (s *Server) handleDisconnection(client *Client) {
	delete(s.Clients, client)
}

// broadcastListener sends state updates to all the clients when it receives
// the signal on the broadcast channel.
func (s *Server) broadcastListener() {
	for range s.broadcast {
		for c := range s.Clients {
			c.send <- marshalMessage(s.Game.StateUpdate())
		}
	}
}
