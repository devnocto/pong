package pong

import (
	"time"

	"vastnebula.com/pong/pb"
)

// Game is the pong game.
type Game struct {
	State                    pb.GameState
	Ball                     *Ball
	LeftPaddle               *Paddle
	RightPaddle              *Paddle
	LeftScore                *Score
	RightScore               *Score
	ScreenSize               Size
	LastProcessedLeftPaddle  int32
	LastProcessedRightPaddle int32
}

// ToProto converts the Game struct to a protocol buffer struct.
func (g *Game) ToProto() *pb.Game {
	return &pb.Game{
		State:       g.State,
		Ball:        g.Ball.ToProto(),
		LeftPaddle:  g.LeftPaddle.ToProto(),
		RightPaddle: g.RightPaddle.ToProto(),
		LeftScore:   g.LeftScore.ToProto(),
		RightScore:  g.RightScore.ToProto(),
		ScreenSize:  g.ScreenSize.ToProto(),
	}
}

// NewGame creates a new game with the default configuration.
func NewGame() *Game {
	g := &Game{
		State: pb.GameState_MENU_STATE,
		Ball:  NewBall(),
		LeftPaddle: &Paddle{
			Point: Point{X: InitPaddleGap, Y: InitScreenHeight/2 - InitPaddleHeight/2},
			Size:  Size{Width: InitPaddleWidth, Height: InitPaddleHeight},
			Ay:    InitPaddleAcceleration,
		},
		RightPaddle: &Paddle{
			Point: Point{X: InitScreenWidth - InitPaddleGap - InitPaddleWidth, Y: InitScreenHeight/2 - InitPaddleHeight/2},
			Size:  Size{Width: InitPaddleWidth, Height: InitPaddleHeight},
			Ay:    InitPaddleAcceleration,
		},
		LeftScore:  &Score{},
		RightScore: &Score{},
		ScreenSize: Size{Width: InitScreenWidth, Height: InitScreenHeight},
	}
	g.Ball.ResetPosition()
	return g
}

// Config returns the protocol buffer struct of the game as a protocol buffer message struct.
// This is used to send the configuration to the client after it is encoded using proto.Marshal().
func (g *Game) Config() *pb.Message {
	return &pb.Message{Content: &pb.Message_Config{Config: g.ToProto()}}
}

// StateUpdate returns the protocol buffer message struct of the game state, position of objects and the scores.
// This is used to send state updates to the client after it is encoded using proto.Marshal().
func (g *Game) StateUpdate() *pb.Message {
	return &pb.Message{
		Content: &pb.Message_StateUpdate{
			StateUpdate: &pb.StateUpdate{
				State: g.State,
				Ball: &pb.ObjectState{
					Position: g.Ball.Point.ToProto(),
					Velocity: g.Ball.Velocity.ToProto(),
				},
				LeftPaddle: &pb.PlayerState{
					LastRequest: g.LastProcessedLeftPaddle,
					State: &pb.ObjectState{
						Position: g.LeftPaddle.Point.ToProto(),
						Velocity: g.LeftPaddle.Velocity.ToProto(),
					},
				},
				RightPaddle: &pb.PlayerState{
					LastRequest: g.LastProcessedRightPaddle,
					State: &pb.ObjectState{
						Position: g.RightPaddle.Point.ToProto(),
						Velocity: g.RightPaddle.Velocity.ToProto(),
					},
				},
				Score: &pb.ScoreUpdate{
					LeftScore:  g.LeftScore.ToProto(),
					RightScore: g.RightScore.ToProto(),
				},
			},
		},
	}
}

// ProcessInput performs actions based on the received user action .
func (g *Game) ProcessInput(action *pb.UserAction) {
	// If the game is in the play state then perform movement operations.
	if g.State == pb.GameState_PLAY_STATE {
		switch action.UserInput {
		// Left Paddle
		case pb.UserInput_LEFT_UP:
			g.LeftPaddle.MoveUp()
			g.LastProcessedLeftPaddle = action.Request
		case pb.UserInput_LEFT_DOWN:
			g.LeftPaddle.MoveDown()
			g.LastProcessedLeftPaddle = action.Request
		case pb.UserInput_STOP_LEFT_UP:
			g.LeftPaddle.StopUp()
			g.LastProcessedLeftPaddle = action.Request
		case pb.UserInput_STOP_LEFT_DOWN:
			g.LeftPaddle.StopDown()
			g.LastProcessedLeftPaddle = action.Request

			// Right Paddle
		case pb.UserInput_RIGHT_UP:
			g.RightPaddle.MoveUp()
			g.LastProcessedRightPaddle = action.Request
		case pb.UserInput_RIGHT_DOWN:
			g.RightPaddle.MoveDown()
			g.LastProcessedRightPaddle = action.Request
		case pb.UserInput_STOP_RIGHT_UP:
			g.RightPaddle.StopUp()
			g.LastProcessedRightPaddle = action.Request
		case pb.UserInput_STOP_RIGHT_DOWN:
			g.RightPaddle.StopDown()
			g.LastProcessedRightPaddle = action.Request
		}
	}

	// Game State operations.
	switch action.UserInput {
	case pb.UserInput_START_GAME:
		if g.State == pb.GameState_MENU_STATE {
			g.State = pb.GameState_PLAY_STATE
			g.Ball.AddMotion()
		}
	case pb.UserInput_PAUSE_GAME:
		if g.State == pb.GameState_PLAY_STATE {
			g.State = pb.GameState_PAUSE_STATE
			g.Ball.PauseMotion()
		} else if g.State == pb.GameState_PAUSE_STATE {
			g.State = pb.GameState_PLAY_STATE
			g.Ball.ResumeMotion()
		}
	case pb.UserInput_RESET_GAME:
		if g.State == pb.GameState_STOP_STATE {
			g.Reset()
		}
	}
}

// Update performs updates on the items in the game.
// It detects when the max score is reached and changes the game to the stop state.
func (g *Game) Update() {
	if g.State == pb.GameState_PLAY_STATE {
		g.LeftPaddle.Update()
		g.RightPaddle.Update()
		g.Ball.Update(g.LeftPaddle, g.RightPaddle, g.LeftScore, g.RightScore)
		if g.LeftScore.Value >= MaxScore || g.RightScore.Value >= MaxScore {
			g.State = pb.GameState_STOP_STATE
			g.Ball.PauseMotion()
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
	g.State = pb.GameState_MENU_STATE
	g.Ball = NewBall()
	g.LeftPaddle.Point = Point{X: InitPaddleGap, Y: InitScreenHeight/2 - InitPaddleHeight/2}
	g.RightPaddle.Point = Point{X: InitScreenWidth - InitPaddleGap - InitPaddleWidth, Y: InitScreenHeight/2 - InitPaddleHeight/2}
	g.LeftScore.Value = 0
	g.RightScore.Value = 0
	g.Ball.ResetPosition()
}
