import { useEffect, useRef, useState } from "react";
import useSendUserInput from "../hooks/useSendUserInput";
import { drawGame } from "../lib/game";
import { GameConfig, useGameStateStore } from "../lib/store";

type Props = {
  socket: WebSocket;
  config: GameConfig;
};

const Screen = ({ socket, config }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  // Fetch initial state
  const stateRef = useRef(useGameStateStore.getState().game);

  // State update function from store
  const updateGame = useGameStateStore((state) => state.updateGame);

  // Send key presses by player to server & handle client side prediction
  useSendUserInput(socket);

  // Connect to the store on mount, disconnect on unmount, catch state-changes in a reference
  useEffect(() => useGameStateStore.subscribe((state) => (stateRef.current = state.game)), []);

  // Set canvas context on page load
  useEffect(() => setCtx(canvasRef.current && canvasRef.current.getContext("2d")), []);

  // Draw the game to canvas
  useEffect(() => {
    if (!ctx) return;

    const draw = () => {
      window.requestAnimationFrame(draw);
      updateGame();
      drawGame(ctx, config, stateRef.current);
    };

    draw();
  }, [config, ctx, updateGame]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={config.screenWidth}
        height={config.screenHeight}
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
  );
};

export default Screen;
