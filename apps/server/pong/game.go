package pong

import (
	"time"

	"vastnebula.com/pong/pb"
)

const (
	InitScreenWidth        = 800
	InitScreenHeight       = 480
	InitBallRadius         = 8
	InitBallDirection      = 1 // 1 is to the right, -1 is to the left
	MaxScore               = 10
	InitPaddleGap          = 35.0
	InitPaddleWidth        = 10.0
	InitPaddleHeight       = 80.0
	InitPaddleAcceleration = 8.0
	InitLeftPaddleX        = InitPaddleGap
	InitRightPaddleX       = InitScreenWidth - InitPaddleGap - InitPaddleWidth
	InitPaddleY            = InitScreenHeight/2 - InitPaddleHeight/2
)

// Game is the pong game.
type Game struct {
	config                   pb.GameConfig
	state                    pb.GameState
	ball                     *ball
	leftPaddle               *paddle
	rightPaddle              *paddle
	leftScore                *score
	rightScore               *score
	lastProcessedLeftPaddle  int32
	lastProcessedRightPaddle int32
}

// NewGame creates a new game with the default configuration.
func NewGame() *Game {
	g := &Game{
		config: pb.GameConfig{
			BallRadius:   InitBallRadius,
			PaddleHeight: InitPaddleHeight,
			PaddleWidth:  InitPaddleWidth,
			LeftPaddleX:  InitLeftPaddleX,
			RightPaddleX: InitRightPaddleX,
			ScreenWidth:  InitScreenWidth,
			ScreenHeight: InitScreenHeight,
		},
		state: pb.GameState_MENU_STATE,
		ball:  newBall(),
		leftPaddle: &paddle{
			Y:  InitPaddleY,
			Ay: InitPaddleAcceleration,
		},
		rightPaddle: &paddle{
			Y:  InitPaddleY,
			Ay: InitPaddleAcceleration,
		},
		leftScore:  &score{},
		rightScore: &score{},
	}
	g.ball.resetPosition()
	return g
}

// StateUpdate returns the protocol buffer message struct of the game state, position of objects and the scores.
// This is used to send state updates to the client after it is encoded using proto.Marshal().
func (g *Game) StateUpdate() *pb.Response {
	return &pb.Response{
		Content: &pb.Response_StateUpdate{
			StateUpdate: &pb.StateUpdate{
				GameState:    g.state,
				BallX:        g.ball.X,
				BallY:        g.ball.Y,
				LeftPaddleY:  g.leftPaddle.Y,
				RightPaddleY: g.rightPaddle.Y,
				LeftScore:    g.leftScore.Value,
				RightScore:   g.rightScore.Value,
			},
		},
	}
}

// StateUpdate returns the protocol buffer message struct of the game state, position of objects and the scores.
// This is used to send state updates to the client after it is encoded using proto.Marshal().
func (g *Game) Config() *pb.Response {
	return &pb.Response{Content: &pb.Response_Config{Config: &g.config}}
}

// ProcessInput performs actions based on the received user action .
func (g *Game) ProcessInput(action *pb.UserAction) {
	// If the game is in the play state then perform movement operations.
	if g.state == pb.GameState_PLAY_STATE {
		switch action.UserInput {
		// Left Paddle
		case pb.UserInput_LEFT_UP:
			g.leftPaddle.moveUp()
			g.lastProcessedLeftPaddle = action.Request
		case pb.UserInput_LEFT_DOWN:
			g.leftPaddle.moveDown()
			g.lastProcessedLeftPaddle = action.Request
		case pb.UserInput_STOP_LEFT_UP:
			g.leftPaddle.stopUp()
			g.lastProcessedLeftPaddle = action.Request
		case pb.UserInput_STOP_LEFT_DOWN:
			g.leftPaddle.stopDown()
			g.lastProcessedLeftPaddle = action.Request

			// Right Paddle
		case pb.UserInput_RIGHT_UP:
			g.rightPaddle.moveUp()
			g.lastProcessedRightPaddle = action.Request
		case pb.UserInput_RIGHT_DOWN:
			g.rightPaddle.moveDown()
			g.lastProcessedRightPaddle = action.Request
		case pb.UserInput_STOP_RIGHT_UP:
			g.rightPaddle.stopUp()
			g.lastProcessedRightPaddle = action.Request
		case pb.UserInput_STOP_RIGHT_DOWN:
			g.rightPaddle.stopDown()
			g.lastProcessedRightPaddle = action.Request
		}
	}

	// Game State operations.
	switch action.UserInput {
	case pb.UserInput_START_GAME:
		if g.state == pb.GameState_MENU_STATE {
			g.state = pb.GameState_PLAY_STATE
			g.ball.addMotion()
		}
	case pb.UserInput_PAUSE_GAME:
		if g.state == pb.GameState_PLAY_STATE {
			g.state = pb.GameState_PAUSE_STATE
			g.ball.pauseMotion()
		} else if g.state == pb.GameState_PAUSE_STATE {
			g.state = pb.GameState_PLAY_STATE
			g.ball.resumeMotion()
		}
	case pb.UserInput_RESET_GAME:
		if g.state == pb.GameState_STOP_STATE {
			g.Reset()
		}
	}
}

// Update performs updates on the items in the game.
// It detects when the max score is reached and changes the game to the stop state.
func (g *Game) Update() {
	if g.state == pb.GameState_PLAY_STATE {
		g.leftPaddle.update()
		g.rightPaddle.update()
		g.ball.update(g.leftPaddle, g.rightPaddle, g.leftScore, g.rightScore)
		if g.leftScore.Value >= MaxScore || g.rightScore.Value >= MaxScore {
			g.state = pb.GameState_STOP_STATE
			g.ball.pauseMotion()
		}
	}
}

// Run handles the intervals for the game loop and state updates.
func (g *Game) Run(input <-chan *pb.UserAction, broadcast chan<- bool) {
	// Game loop
	ticker := time.NewTicker(time.Millisecond * 16) // 60 FPS
	defer ticker.Stop()

	// State updates
	state := time.NewTicker(time.Millisecond * 50)
	defer state.Stop()

	for {
		select {
		case <-state.C:
			broadcast <- true // Instructs server to broadcast state updates
		case <-ticker.C:
			select {
			case in := <-input:
				g.ProcessInput(in)
			default:
				g.Update()
			}
		}
	}
}

// Reset returns the state of the game to the menu state, the positions of the objects
// to the starting positions and sets the scores to 0.
func (g *Game) Reset() {
	g.state = pb.GameState_MENU_STATE
	g.ball = newBall()
	g.leftPaddle.Y = InitPaddleY
	g.rightPaddle.Y = InitPaddleY
	g.leftScore.Value = 0
	g.rightScore.Value = 0
	g.ball.resetPosition()
}
