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
		g.state = pb.GameState_PLAY_STATE
		g.leftPaddle.moveUp()
		g.rightPaddle.moveDown()
		g.Update()
		g.leftPaddle.stopUp()
		g.rightPaddle.stopDown()
	}
	g.Reset()
	if eq := reflect.DeepEqual(g, r); !eq {
		t.Fatalf("game: game not reset")
	}
}
