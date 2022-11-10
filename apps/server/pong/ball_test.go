package pong

import (
	"reflect"
	"testing"
)

func TestResetPosition(t *testing.T) {
	r := Ball{Point: Point{X: InitScreenWidth / 2, Y: InitScreenHeight / 2}}
	b := Ball{Point: Point{X: 800, Y: 800}, Velocity: Velocity{Vx: 5, Vy: 3}}
	b.ResetPosition()
	if eq := reflect.DeepEqual(b, r); !eq {
		t.Fatalf("ball: results not equal")
	}
}

func TestAddMotion(t *testing.T) {
	b := Ball{Velocity: Velocity{Vx: 0, Vy: 0}}
	b.AddMotion()
	if b.Vx == 0 && b.Vy == 0 {
		t.Fatalf("ball: motion not added")
	}
}

func TestPauseMotion(t *testing.T) {
	v := Velocity{Vx: 5, Vy: 2}
	b := Ball{Velocity: v}
	b.PauseMotion()
	if b.Vx != 0 && b.Vy != 0 {
		t.Fatalf("ball: motion not paused")
	}
	if b.saved != v {
		t.Fatalf("ball: motion not saved")
	}
}

func TestResumeMotion(t *testing.T) {
	v := Velocity{Vx: 5, Vy: 2}
	b := Ball{Velocity: v}
	b.PauseMotion()
	b.ResumeMotion()
	if b.Vx != 5 && b.Vy != 2 {
		t.Fatalf("ball: motion not resumed")
	}
}

func TestSwitchDirection(t *testing.T) {
	b := Ball{direction: 1}
	b.switchDirection()
	if b.direction != -1 {
		t.Fatalf("ball: want -1, got %q", b.direction)
	}
	b.switchDirection()
	if b.direction != 1 {
		t.Fatalf("ball: want 1, got %q", b.direction)
	}
}
