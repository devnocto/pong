package pong

import "vastnebula.com/pong/pb"

// Size is the width and height of an object.
type Size struct {
	Width  int32
	Height int32
}

// ToProto converts the Size struct to a protocol buffer struct.
func (s *Size) ToProto() *pb.Size {
	return &pb.Size{
		Width:  s.Width,
		Height: s.Height,
	}
}

// Point represents coordinates in a 2D plane.
// In this game, the origin is the top left & the y-axis is reversed as compared to the cartesian coordinate system.
type Point struct {
	X int32
	Y int32
}

// ToProto converts the Point struct to a protocol buffer struct.
func (p *Point) ToProto() *pb.Point {
	return &pb.Point{
		X: p.X,
		Y: p.Y,
	}
}

// Velocity represents the velocity in the x and y directions.
type Velocity struct {
	Vx int32
	Vy int32
}

// ToProto converts the Velocity struct to a protocol buffer struct.
func (v *Velocity) ToProto() *pb.Velocity {
	return &pb.Velocity{
		Vx: v.Vx,
		Vy: v.Vy,
	}
}

// Center returns a point at the center of a Size.
func (s *Size) Center() Point {
	return Point{X: s.Width / 2, Y: s.Height / 2}
}

const InitScreenWidth = 800
const InitScreenHeight = 480
