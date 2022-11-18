import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace pong. */
export namespace pong {

    /** Properties of a GameConfig. */
    interface IGameConfig {

        /** GameConfig ballRadius */
        ballRadius?: (number|null);

        /** GameConfig paddleHeight */
        paddleHeight?: (number|null);

        /** GameConfig paddleWidth */
        paddleWidth?: (number|null);

        /** GameConfig leftPaddleX */
        leftPaddleX?: (number|null);

        /** GameConfig rightPaddleX */
        rightPaddleX?: (number|null);

        /** GameConfig screenWidth */
        screenWidth?: (number|null);

        /** GameConfig screenHeight */
        screenHeight?: (number|null);
    }

    /** Represents a GameConfig. */
    class GameConfig implements IGameConfig {

        /**
         * Constructs a new GameConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IGameConfig);

        /** GameConfig ballRadius. */
        public ballRadius: number;

        /** GameConfig paddleHeight. */
        public paddleHeight: number;

        /** GameConfig paddleWidth. */
        public paddleWidth: number;

        /** GameConfig leftPaddleX. */
        public leftPaddleX: number;

        /** GameConfig rightPaddleX. */
        public rightPaddleX: number;

        /** GameConfig screenWidth. */
        public screenWidth: number;

        /** GameConfig screenHeight. */
        public screenHeight: number;

        /**
         * Creates a new GameConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameConfig instance
         */
        public static create(properties?: pong.IGameConfig): pong.GameConfig;

        /**
         * Encodes the specified GameConfig message. Does not implicitly {@link pong.GameConfig.verify|verify} messages.
         * @param message GameConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IGameConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameConfig message, length delimited. Does not implicitly {@link pong.GameConfig.verify|verify} messages.
         * @param message GameConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IGameConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.GameConfig;

        /**
         * Decodes a GameConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.GameConfig;

        /**
         * Verifies a GameConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameConfig
         */
        public static fromObject(object: { [k: string]: any }): pong.GameConfig;

        /**
         * Creates a plain object from a GameConfig message. Also converts values to other types if specified.
         * @param message GameConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.GameConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** GameState enum. */
    enum GameState {
        MENU_STATE = 0,
        PLAY_STATE = 1,
        PAUSE_STATE = 2,
        STOP_STATE = 3
    }

    /** Properties of a StateUpdate. */
    interface IStateUpdate {

        /** StateUpdate gameState */
        gameState?: (pong.GameState|null);

        /** StateUpdate ballX */
        ballX?: (number|null);

        /** StateUpdate ballY */
        ballY?: (number|null);

        /** StateUpdate leftPaddleY */
        leftPaddleY?: (number|null);

        /** StateUpdate rightPaddleY */
        rightPaddleY?: (number|null);

        /** StateUpdate leftScore */
        leftScore?: (number|null);

        /** StateUpdate rightScore */
        rightScore?: (number|null);
    }

    /** Represents a StateUpdate. */
    class StateUpdate implements IStateUpdate {

        /**
         * Constructs a new StateUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IStateUpdate);

        /** StateUpdate gameState. */
        public gameState: pong.GameState;

        /** StateUpdate ballX. */
        public ballX: number;

        /** StateUpdate ballY. */
        public ballY: number;

        /** StateUpdate leftPaddleY. */
        public leftPaddleY: number;

        /** StateUpdate rightPaddleY. */
        public rightPaddleY: number;

        /** StateUpdate leftScore. */
        public leftScore: number;

        /** StateUpdate rightScore. */
        public rightScore: number;

        /**
         * Creates a new StateUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateUpdate instance
         */
        public static create(properties?: pong.IStateUpdate): pong.StateUpdate;

        /**
         * Encodes the specified StateUpdate message. Does not implicitly {@link pong.StateUpdate.verify|verify} messages.
         * @param message StateUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IStateUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateUpdate message, length delimited. Does not implicitly {@link pong.StateUpdate.verify|verify} messages.
         * @param message StateUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IStateUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.StateUpdate;

        /**
         * Decodes a StateUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.StateUpdate;

        /**
         * Verifies a StateUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateUpdate
         */
        public static fromObject(object: { [k: string]: any }): pong.StateUpdate;

        /**
         * Creates a plain object from a StateUpdate message. Also converts values to other types if specified.
         * @param message StateUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.StateUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StateUpdate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** UserInput enum. */
    enum UserInput {
        START_GAME = 0,
        PAUSE_GAME = 1,
        LEFT_UP = 2,
        LEFT_DOWN = 3,
        RIGHT_UP = 4,
        RIGHT_DOWN = 5,
        STOP_LEFT_UP = 6,
        STOP_LEFT_DOWN = 7,
        STOP_RIGHT_UP = 8,
        STOP_RIGHT_DOWN = 9,
        RESET_GAME = 10
    }

    /** Properties of a UserAction. */
    interface IUserAction {

        /** UserAction userInput */
        userInput?: (pong.UserInput|null);

        /** UserAction request */
        request?: (number|null);
    }

    /** Represents a UserAction. */
    class UserAction implements IUserAction {

        /**
         * Constructs a new UserAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IUserAction);

        /** UserAction userInput. */
        public userInput: pong.UserInput;

        /** UserAction request. */
        public request: number;

        /**
         * Creates a new UserAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserAction instance
         */
        public static create(properties?: pong.IUserAction): pong.UserAction;

        /**
         * Encodes the specified UserAction message. Does not implicitly {@link pong.UserAction.verify|verify} messages.
         * @param message UserAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IUserAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserAction message, length delimited. Does not implicitly {@link pong.UserAction.verify|verify} messages.
         * @param message UserAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IUserAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.UserAction;

        /**
         * Decodes a UserAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.UserAction;

        /**
         * Verifies a UserAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserAction
         */
        public static fromObject(object: { [k: string]: any }): pong.UserAction;

        /**
         * Creates a plain object from a UserAction message. Also converts values to other types if specified.
         * @param message UserAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.UserAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response config */
        config?: (pong.IGameConfig|null);

        /** Response stateUpdate */
        stateUpdate?: (pong.IStateUpdate|null);

        /** Response userAction */
        userAction?: (pong.IUserAction|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IResponse);

        /** Response config. */
        public config?: (pong.IGameConfig|null);

        /** Response stateUpdate. */
        public stateUpdate?: (pong.IStateUpdate|null);

        /** Response userAction. */
        public userAction?: (pong.IUserAction|null);

        /** Response content. */
        public content?: ("config"|"stateUpdate"|"userAction");

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: pong.IResponse): pong.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link pong.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link pong.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): pong.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Response
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
