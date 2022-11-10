# Pong Server

A simple implementation of the pong game. This server represents the backend of the game and contains the authoritative state of the game. It handles sending state updates to and receiving user input from from clients.

The data is transferred between client and server as binary messages using websockets. For the binary messages, [Protocol Buffers](https://developers.google.com/protocol-buffers) are used to serialize and deserialize the data.

## Requirements

Add the environment variables. Set the environment variables as shown in the `.env.sample` file.

## Usage

Run the following in this directory to start the server.

```sh
go run main.go
```

Run the following in this directory to build.

```sh
go build
```
