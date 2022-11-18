package pong

import (
	"reflect"
	"testing"
)

func TestResetPosition(t *testing.T) {
	r := ball{X: InitScreenWidth / 2, Y: InitScreenHeight / 2}
	b := ball{X: 800, Y: 800, Vx: 5, Vy: 3}
	b.resetPosition()
	if eq := reflect.DeepEqual(b, r); !eq {
		t.Fatalf("ball: results not equal")
	}
}

func TestAddMotion(t *testing.T) {
	b := ball{Vx: 0, Vy: 0}
	b.addMotion()
	if b.Vx == 0 && b.Vy == 0 {
		t.Fatalf("ball: motion not added")
	}
}

func TestPauseMotion(t *testing.T) {
	b := ball{Vx: 5, Vy: 2}
	b.pauseMotion()
	if b.Vx != 0 && b.Vy != 0 {
		t.Fatalf("ball: motion not paused")
	}
	if b.savedVx != 5 && b.savedVy != 2 {
		t.Fatalf("ball: motion not saved")
	}
}

func TestResumeMotion(t *testing.T) {
	b := ball{Vx: 5, Vy: 2}
	b.pauseMotion()
	b.resumeMotion()
	if b.Vx != 5 && b.Vy != 2 {
		t.Fatalf("ball: motion not resumed")
	}
}

func TestSwitchDirection(t *testing.T) {
	b := ball{direction: 1}
	b.switchDirection()
	if b.direction != -1 {
		t.Fatalf("ball: want -1, got %q", b.direction)
	}
	b.switchDirection()
	if b.direction != 1 {
		t.Fatalf("ball: want 1, got %q", b.direction)
	}
}
