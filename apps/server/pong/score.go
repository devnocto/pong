package pong

import "vastnebula.com/pong/pb"

// Score is a score pong.
type Score struct {
	Value uint32
}

// ToProto converts the Score struct to a protocol buffer struct.
func (s *Score) ToProto() *pb.Score {
	return &pb.Score{
		Value: s.Value,
	}
}

// Increment adds 1 to the score.
func (s *Score) Increment() {
	s.Value++
}
