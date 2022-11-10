package server

import (
	"log"

	"google.golang.org/protobuf/proto"
)

// marshalMessage serializes protocol buffer data of a given message as defined in pong.proto.
func marshalMessage(message proto.Message) *[]byte {
	out, err := proto.Marshal(message)
	if err != nil {
		log.Fatalln("failed to encode message: ", err)
	}
	return &out
}
