import { useEffect, useMemo, useRef, useState } from "react";
import Pong from "../lib/game/pong";
// import useSendUserInput from "../hooks/useSendUserInput";
import { pong } from "protobuf";
import { GameConfig } from "../interfaces";

type Props = {
  socket: WebSocket;
  config: pong.IGame;
};

const Screen = ({ socket, config }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  // Configure a new game and memoize
  const game = useMemo(() => new Pong(config as GameConfig), [config]);

  // Send key presses by player to server & handle client side prediction
  // useSendUserInput(socket, game.leftPaddle, game.rightPaddle);

  // Update game on state changes received from the server
  // useEffect(() => {
  //   if (!stateUpdate) return;
  //   game.updateState(stateUpdate, lastUpdateTime, updateInterval);
  // }, [game, lastUpdateTime, stateUpdate, updateInterval]);

  // Set canvas context on page load
  useEffect(() => {
    setCtx(canvasRef.current && canvasRef.current.getContext("2d"));
  }, []);

  // Draw the game to canvas
  useEffect(() => {
    if (!ctx) {
      return;
    }
    const draw = () => {
      window.requestAnimationFrame(draw);
      game.draw(ctx);
      game.update();
    };

    draw();
  }, [ctx, game]);

  return config.screenSize?.width && config.screenSize.height ? (
    <div>
      <canvas
        ref={canvasRef}
        width={config.screenSize.width}
        height={config.screenSize.height}
        style={{ backgroundColor: "hsl(273deg 22% 8%)" }}
      />
      <div className="text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400 mt-4">
        <div className="flex justify-between mb-4">
          <p>
            <strong>Player 2:</strong> W (up) and S (down) keys
          </p>
          <p>
            <strong>Player 1:</strong> Arrow keys (up and down).
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            <strong>n:</strong> New Game
          </p>
          <p>
            <strong>p:</strong> Pause/Resume
          </p>
          <p>
            <strong>m:</strong> Menu
          </p>
        </div>
      </div>
    </div>
  ) : (
    <p className="font-light text-gray-500 dark:text-gray-400">Invalid screen size</p>
  );
};

export default Screen;
