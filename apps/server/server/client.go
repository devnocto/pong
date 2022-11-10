package server

import (
	"fmt"

	"vastnebula.com/pong/pb"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

// Client is a client that is connected using websockets.
type Client struct {
	conn   *websocket.Conn
	server *Server
	send   chan *[]byte
	done   chan bool
}

// NewClient creates a Client struct, given the websocket connection and the server.
func NewClient(conn *websocket.Conn, server *Server) *Client {
	return &Client{
		conn:   conn,
		server: server,
		send:   make(chan *[]byte),
		done:   make(chan bool),
	}
}

// Listen sets up listeners for the client to send and receive data.
func (c *Client) Listen() {
	go c.listenWrite()
	c.send <- marshalMessage(c.server.Game.Config()) // Send config for game
	c.listenRead()
}

// listenWrite handles sending binary messages to the client.
func (c *Client) listenWrite() {
	defer c.conn.Close() // Close connection when function ends
	for {
		select {
		case b := <-c.send:
			if err := c.conn.WriteMessage(websocket.BinaryMessage, *b); err != nil {
				fmt.Println(err)
			}
		case <-c.done:
			c.done <- true
			return
		}
	}
}

// listenWrite handles receiving messages from the client.
func (c *Client) listenRead() {
	defer c.conn.Close() // Close connection when function ends
	for {
		select {
		case <-c.done:
			c.done <- true
			return
		default:
			c.read()
		}
	}
}

// read receives the message, reads it to a buffer and handles binary messages from clients.
func (c *Client) read() {
	// Read incoming messages
	messageType, p, err := c.conn.ReadMessage()
	if err != nil {
		c.done <- true
		c.server.handleDisconnection(c)
	}

	// Handle only binary messages. Other types are ignored.
	if messageType == websocket.BinaryMessage {
		c.handleIncomingMessage(&p)
	}
}

// handleIncomingMessage parses the protocol buffer encoded message, in.
func (c *Client) handleIncomingMessage(in *[]byte) {
	// Parse message to Message as defined in the protocol buffer file pong.proto
	message := &pb.Message{}
	if err := proto.Unmarshal(*in, message); err != nil {
		_ = fmt.Errorf("failed to unmarshal message")
	}

	// Only handle valid input messages from the client.
	// UserAction is as defined in pong.proto using protocol buffers.
	switch content := message.Content.(type) {
	case *pb.Message_UserAction:
		c.server.input <- content.UserAction
	}
}
