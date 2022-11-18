package pong

// score is a score pong.
type score struct {
	Value uint32
}

// increment adds 1 to the score.
func (s *score) increment() {
	s.Value++
}
