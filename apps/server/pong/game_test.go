package pong

import (
	"reflect"
	"testing"

	"vastnebula.com/pong/pb"
)

func TestReset(t *testing.T) {
	r := NewGame()
	g := NewGame()
	for i := 0; i < 10; i++ {
		g.State = pb.GameState_PLAY_STATE
		g.LeftPaddle.MoveUp()
		g.RightPaddle.MoveDown()
		g.Update()
		g.LeftPaddle.StopUp()
		g.RightPaddle.StopDown()
	}
	g.Reset()
	if eq := reflect.DeepEqual(g, r); !eq {
		t.Fatalf("game: game not reset")
	}
}
