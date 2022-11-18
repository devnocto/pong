package server

import (
	"log"

	"google.golang.org/protobuf/proto"
	"vastnebula.com/pong/pb"
)

// marshalMessage serializes protocol buffer data of a given message as defined in pong.proto.
func marshalMessage(response *pb.Response) *[]byte {
	out, err := proto.Marshal(response)
	if err != nil {
		log.Fatalln("failed to encode message: ", err)
	}
	return &out
}
