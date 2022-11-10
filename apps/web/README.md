# Pong UI

This project represents the frontend for the Pong game implementation. It handles sending input to and receiving state updates from the authoritative server.

The data is transferred between client and server using binary messages through a websocket. For the binary messages, [Protocol Buffers](https://developers.google.com/protocol-buffers) are used to serialize and deserialize the data.

## Requirements

Add the environment variables. For a production build, set the environment variables as shown in the `.env.development` file in a file called `.env.production.local`.

## Available Scripts

In this directory, you can run:

### `pnpm dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `pnpm run build`

Builds the app for production.
