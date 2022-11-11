import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace pong. */
export namespace pong {

    /** Properties of a Size. */
    interface ISize {

        /** Size width */
        width?: (number|null);

        /** Size height */
        height?: (number|null);
    }

    /** Represents a Size. */
    class Size implements ISize {

        /**
         * Constructs a new Size.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.ISize);

        /** Size width. */
        public width: number;

        /** Size height. */
        public height: number;

        /**
         * Creates a new Size instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Size instance
         */
        public static create(properties?: pong.ISize): pong.Size;

        /**
         * Encodes the specified Size message. Does not implicitly {@link pong.Size.verify|verify} messages.
         * @param message Size message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Size message, length delimited. Does not implicitly {@link pong.Size.verify|verify} messages.
         * @param message Size message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Size message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Size
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.Size;

        /**
         * Decodes a Size message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Size
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.Size;

        /**
         * Verifies a Size message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Size message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Size
         */
        public static fromObject(object: { [k: string]: any }): pong.Size;

        /**
         * Creates a plain object from a Size message. Also converts values to other types if specified.
         * @param message Size
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.Size, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Size to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Size
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Point. */
    interface IPoint {

        /** Point x */
        x?: (number|null);

        /** Point y */
        y?: (number|null);
    }

    /** Represents a Point. */
    class Point implements IPoint {

        /**
         * Constructs a new Point.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IPoint);

        /** Point x. */
        public x: number;

        /** Point y. */
        public y: number;

        /**
         * Creates a new Point instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point instance
         */
        public static create(properties?: pong.IPoint): pong.Point;

        /**
         * Encodes the specified Point message. Does not implicitly {@link pong.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link pong.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.Point;

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.Point;

        /**
         * Verifies a Point message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point
         */
        public static fromObject(object: { [k: string]: any }): pong.Point;

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @param message Point
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Point
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Velocity. */
    interface IVelocity {

        /** Velocity vx */
        vx?: (number|null);

        /** Velocity vy */
        vy?: (number|null);
    }

    /** Represents a Velocity. */
    class Velocity implements IVelocity {

        /**
         * Constructs a new Velocity.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IVelocity);

        /** Velocity vx. */
        public vx: number;

        /** Velocity vy. */
        public vy: number;

        /**
         * Creates a new Velocity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Velocity instance
         */
        public static create(properties?: pong.IVelocity): pong.Velocity;

        /**
         * Encodes the specified Velocity message. Does not implicitly {@link pong.Velocity.verify|verify} messages.
         * @param message Velocity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Velocity message, length delimited. Does not implicitly {@link pong.Velocity.verify|verify} messages.
         * @param message Velocity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Velocity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Velocity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.Velocity;

        /**
         * Decodes a Velocity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Velocity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.Velocity;

        /**
         * Verifies a Velocity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Velocity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Velocity
         */
        public static fromObject(object: { [k: string]: any }): pong.Velocity;

        /**
         * Creates a plain object from a Velocity message. Also converts values to other types if specified.
         * @param message Velocity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.Velocity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Velocity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Velocity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Score. */
    interface IScore {

        /** Score value */
        value?: (number|null);
    }

    /** Represents a Score. */
    class Score implements IScore {

        /**
         * Constructs a new Score.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IScore);

        /** Score value. */
        public value: number;

        /**
         * Creates a new Score instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Score instance
         */
        public static create(properties?: pong.IScore): pong.Score;

        /**
         * Encodes the specified Score message. Does not implicitly {@link pong.Score.verify|verify} messages.
         * @param message Score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Score message, length delimited. Does not implicitly {@link pong.Score.verify|verify} messages.
         * @param message Score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Score message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.Score;

        /**
         * Decodes a Score message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.Score;

        /**
         * Verifies a Score message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Score message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Score
         */
        public static fromObject(object: { [k: string]: any }): pong.Score;

        /**
         * Creates a plain object from a Score message. Also converts values to other types if specified.
         * @param message Score
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.Score, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Score to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Score
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ScoreUpdate. */
    interface IScoreUpdate {

        /** ScoreUpdate leftScore */
        leftScore?: (pong.IScore|null);

        /** ScoreUpdate rightScore */
        rightScore?: (pong.IScore|null);
    }

    /** Represents a ScoreUpdate. */
    class ScoreUpdate implements IScoreUpdate {

        /**
         * Constructs a new ScoreUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IScoreUpdate);

        /** ScoreUpdate leftScore. */
        public leftScore?: (pong.IScore|null);

        /** ScoreUpdate rightScore. */
        public rightScore?: (pong.IScore|null);

        /**
         * Creates a new ScoreUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScoreUpdate instance
         */
        public static create(properties?: pong.IScoreUpdate): pong.ScoreUpdate;

        /**
         * Encodes the specified ScoreUpdate message. Does not implicitly {@link pong.ScoreUpdate.verify|verify} messages.
         * @param message ScoreUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IScoreUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScoreUpdate message, length delimited. Does not implicitly {@link pong.ScoreUpdate.verify|verify} messages.
         * @param message ScoreUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IScoreUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScoreUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScoreUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.ScoreUpdate;

        /**
         * Decodes a ScoreUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScoreUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.ScoreUpdate;

        /**
         * Verifies a ScoreUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScoreUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScoreUpdate
         */
        public static fromObject(object: { [k: string]: any }): pong.ScoreUpdate;

        /**
         * Creates a plain object from a ScoreUpdate message. Also converts values to other types if specified.
         * @param message ScoreUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.ScoreUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScoreUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ScoreUpdate
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

        /** UserAction request */
        request?: (number|null);

        /** UserAction userInput */
        userInput?: (pong.UserInput|null);
    }

    /** Represents a UserAction. */
    class UserAction implements IUserAction {

        /**
         * Constructs a new UserAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IUserAction);

        /** UserAction request. */
        public request: number;

        /** UserAction userInput. */
        public userInput: pong.UserInput;

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

    /** GameState enum. */
    enum GameState {
        MENU_STATE = 0,
        PLAY_STATE = 1,
        PAUSE_STATE = 2,
        STOP_STATE = 3
    }

    /** Properties of a Ball. */
    interface IBall {

        /** Ball point */
        point?: (pong.IPoint|null);

        /** Ball velocity */
        velocity?: (pong.IVelocity|null);

        /** Ball radius */
        radius?: (number|null);
    }

    /** Represents a Ball. */
    class Ball implements IBall {

        /**
         * Constructs a new Ball.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IBall);

        /** Ball point. */
        public point?: (pong.IPoint|null);

        /** Ball velocity. */
        public velocity?: (pong.IVelocity|null);

        /** Ball radius. */
        public radius: number;

        /**
         * Creates a new Ball instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ball instance
         */
        public static create(properties?: pong.IBall): pong.Ball;

        /**
         * Encodes the specified Ball message. Does not implicitly {@link pong.Ball.verify|verify} messages.
         * @param message Ball message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IBall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ball message, length delimited. Does not implicitly {@link pong.Ball.verify|verify} messages.
         * @param message Ball message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IBall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ball message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ball
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.Ball;

        /**
         * Decodes a Ball message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ball
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.Ball;

        /**
         * Verifies a Ball message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ball message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ball
         */
        public static fromObject(object: { [k: string]: any }): pong.Ball;

        /**
         * Creates a plain object from a Ball message. Also converts values to other types if specified.
         * @param message Ball
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.Ball, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ball to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Ball
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Paddle. */
    interface IPaddle {

        /** Paddle point */
        point?: (pong.IPoint|null);

        /** Paddle velocity */
        velocity?: (pong.IVelocity|null);

        /** Paddle size */
        size?: (pong.ISize|null);

        /** Paddle ay */
        ay?: (number|null);
    }

    /** Represents a Paddle. */
    class Paddle implements IPaddle {

        /**
         * Constructs a new Paddle.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IPaddle);

        /** Paddle point. */
        public point?: (pong.IPoint|null);

        /** Paddle velocity. */
        public velocity?: (pong.IVelocity|null);

        /** Paddle size. */
        public size?: (pong.ISize|null);

        /** Paddle ay. */
        public ay: number;

        /**
         * Creates a new Paddle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Paddle instance
         */
        public static create(properties?: pong.IPaddle): pong.Paddle;

        /**
         * Encodes the specified Paddle message. Does not implicitly {@link pong.Paddle.verify|verify} messages.
         * @param message Paddle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IPaddle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Paddle message, length delimited. Does not implicitly {@link pong.Paddle.verify|verify} messages.
         * @param message Paddle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IPaddle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Paddle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Paddle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.Paddle;

        /**
         * Decodes a Paddle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Paddle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.Paddle;

        /**
         * Verifies a Paddle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Paddle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Paddle
         */
        public static fromObject(object: { [k: string]: any }): pong.Paddle;

        /**
         * Creates a plain object from a Paddle message. Also converts values to other types if specified.
         * @param message Paddle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.Paddle, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Paddle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Paddle
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Game. */
    interface IGame {

        /** Game state */
        state?: (pong.GameState|null);

        /** Game ball */
        ball?: (pong.IBall|null);

        /** Game leftPaddle */
        leftPaddle?: (pong.IPaddle|null);

        /** Game rightPaddle */
        rightPaddle?: (pong.IPaddle|null);

        /** Game leftScore */
        leftScore?: (pong.IScore|null);

        /** Game rightScore */
        rightScore?: (pong.IScore|null);

        /** Game screenSize */
        screenSize?: (pong.ISize|null);
    }

    /** Represents a Game. */
    class Game implements IGame {

        /**
         * Constructs a new Game.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IGame);

        /** Game state. */
        public state: pong.GameState;

        /** Game ball. */
        public ball?: (pong.IBall|null);

        /** Game leftPaddle. */
        public leftPaddle?: (pong.IPaddle|null);

        /** Game rightPaddle. */
        public rightPaddle?: (pong.IPaddle|null);

        /** Game leftScore. */
        public leftScore?: (pong.IScore|null);

        /** Game rightScore. */
        public rightScore?: (pong.IScore|null);

        /** Game screenSize. */
        public screenSize?: (pong.ISize|null);

        /**
         * Creates a new Game instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Game instance
         */
        public static create(properties?: pong.IGame): pong.Game;

        /**
         * Encodes the specified Game message. Does not implicitly {@link pong.Game.verify|verify} messages.
         * @param message Game message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Game message, length delimited. Does not implicitly {@link pong.Game.verify|verify} messages.
         * @param message Game message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Game message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.Game;

        /**
         * Decodes a Game message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.Game;

        /**
         * Verifies a Game message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Game message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Game
         */
        public static fromObject(object: { [k: string]: any }): pong.Game;

        /**
         * Creates a plain object from a Game message. Also converts values to other types if specified.
         * @param message Game
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.Game, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Game to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Game
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ObjectState. */
    interface IObjectState {

        /** ObjectState position */
        position?: (pong.IPoint|null);

        /** ObjectState velocity */
        velocity?: (pong.IVelocity|null);
    }

    /** Represents an ObjectState. */
    class ObjectState implements IObjectState {

        /**
         * Constructs a new ObjectState.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IObjectState);

        /** ObjectState position. */
        public position?: (pong.IPoint|null);

        /** ObjectState velocity. */
        public velocity?: (pong.IVelocity|null);

        /**
         * Creates a new ObjectState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectState instance
         */
        public static create(properties?: pong.IObjectState): pong.ObjectState;

        /**
         * Encodes the specified ObjectState message. Does not implicitly {@link pong.ObjectState.verify|verify} messages.
         * @param message ObjectState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IObjectState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObjectState message, length delimited. Does not implicitly {@link pong.ObjectState.verify|verify} messages.
         * @param message ObjectState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IObjectState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObjectState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.ObjectState;

        /**
         * Decodes an ObjectState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.ObjectState;

        /**
         * Verifies an ObjectState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObjectState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObjectState
         */
        public static fromObject(object: { [k: string]: any }): pong.ObjectState;

        /**
         * Creates a plain object from an ObjectState message. Also converts values to other types if specified.
         * @param message ObjectState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.ObjectState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObjectState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ObjectState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerState. */
    interface IPlayerState {

        /** PlayerState lastRequest */
        lastRequest?: (number|null);

        /** PlayerState state */
        state?: (pong.IObjectState|null);
    }

    /** Represents a PlayerState. */
    class PlayerState implements IPlayerState {

        /**
         * Constructs a new PlayerState.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IPlayerState);

        /** PlayerState lastRequest. */
        public lastRequest: number;

        /** PlayerState state. */
        public state?: (pong.IObjectState|null);

        /**
         * Creates a new PlayerState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerState instance
         */
        public static create(properties?: pong.IPlayerState): pong.PlayerState;

        /**
         * Encodes the specified PlayerState message. Does not implicitly {@link pong.PlayerState.verify|verify} messages.
         * @param message PlayerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IPlayerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerState message, length delimited. Does not implicitly {@link pong.PlayerState.verify|verify} messages.
         * @param message PlayerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IPlayerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.PlayerState;

        /**
         * Decodes a PlayerState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.PlayerState;

        /**
         * Verifies a PlayerState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerState
         */
        public static fromObject(object: { [k: string]: any }): pong.PlayerState;

        /**
         * Creates a plain object from a PlayerState message. Also converts values to other types if specified.
         * @param message PlayerState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.PlayerState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StateUpdate. */
    interface IStateUpdate {

        /** StateUpdate state */
        state?: (pong.GameState|null);

        /** StateUpdate ball */
        ball?: (pong.IObjectState|null);

        /** StateUpdate leftPaddle */
        leftPaddle?: (pong.IPlayerState|null);

        /** StateUpdate rightPaddle */
        rightPaddle?: (pong.IPlayerState|null);

        /** StateUpdate score */
        score?: (pong.IScoreUpdate|null);
    }

    /** Represents a StateUpdate. */
    class StateUpdate implements IStateUpdate {

        /**
         * Constructs a new StateUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IStateUpdate);

        /** StateUpdate state. */
        public state: pong.GameState;

        /** StateUpdate ball. */
        public ball?: (pong.IObjectState|null);

        /** StateUpdate leftPaddle. */
        public leftPaddle?: (pong.IPlayerState|null);

        /** StateUpdate rightPaddle. */
        public rightPaddle?: (pong.IPlayerState|null);

        /** StateUpdate score. */
        public score?: (pong.IScoreUpdate|null);

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

    /** Properties of a Message. */
    interface IMessage {

        /** Message config */
        config?: (pong.IGame|null);

        /** Message stateUpdate */
        stateUpdate?: (pong.IStateUpdate|null);

        /** Message userAction */
        userAction?: (pong.IUserAction|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: pong.IMessage);

        /** Message config. */
        public config?: (pong.IGame|null);

        /** Message stateUpdate. */
        public stateUpdate?: (pong.IStateUpdate|null);

        /** Message userAction. */
        public userAction?: (pong.IUserAction|null);

        /** Message content. */
        public content?: ("config"|"stateUpdate"|"userAction");

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: pong.IMessage): pong.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link pong.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pong.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link pong.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pong.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pong.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pong.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): pong.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pong.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
