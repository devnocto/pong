/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const pong = $root.pong = (() => {

    /**
     * Namespace pong.
     * @exports pong
     * @namespace
     */
    const pong = {};

    pong.GameConfig = (function() {

        /**
         * Properties of a GameConfig.
         * @memberof pong
         * @interface IGameConfig
         * @property {number|null} [ballRadius] GameConfig ballRadius
         * @property {number|null} [paddleHeight] GameConfig paddleHeight
         * @property {number|null} [paddleWidth] GameConfig paddleWidth
         * @property {number|null} [leftPaddleX] GameConfig leftPaddleX
         * @property {number|null} [rightPaddleX] GameConfig rightPaddleX
         * @property {number|null} [screenWidth] GameConfig screenWidth
         * @property {number|null} [screenHeight] GameConfig screenHeight
         */

        /**
         * Constructs a new GameConfig.
         * @memberof pong
         * @classdesc Represents a GameConfig.
         * @implements IGameConfig
         * @constructor
         * @param {pong.IGameConfig=} [properties] Properties to set
         */
        function GameConfig(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameConfig ballRadius.
         * @member {number} ballRadius
         * @memberof pong.GameConfig
         * @instance
         */
        GameConfig.prototype.ballRadius = 0;

        /**
         * GameConfig paddleHeight.
         * @member {number} paddleHeight
         * @memberof pong.GameConfig
         * @instance
         */
        GameConfig.prototype.paddleHeight = 0;

        /**
         * GameConfig paddleWidth.
         * @member {number} paddleWidth
         * @memberof pong.GameConfig
         * @instance
         */
        GameConfig.prototype.paddleWidth = 0;

        /**
         * GameConfig leftPaddleX.
         * @member {number} leftPaddleX
         * @memberof pong.GameConfig
         * @instance
         */
        GameConfig.prototype.leftPaddleX = 0;

        /**
         * GameConfig rightPaddleX.
         * @member {number} rightPaddleX
         * @memberof pong.GameConfig
         * @instance
         */
        GameConfig.prototype.rightPaddleX = 0;

        /**
         * GameConfig screenWidth.
         * @member {number} screenWidth
         * @memberof pong.GameConfig
         * @instance
         */
        GameConfig.prototype.screenWidth = 0;

        /**
         * GameConfig screenHeight.
         * @member {number} screenHeight
         * @memberof pong.GameConfig
         * @instance
         */
        GameConfig.prototype.screenHeight = 0;

        /**
         * Creates a new GameConfig instance using the specified properties.
         * @function create
         * @memberof pong.GameConfig
         * @static
         * @param {pong.IGameConfig=} [properties] Properties to set
         * @returns {pong.GameConfig} GameConfig instance
         */
        GameConfig.create = function create(properties) {
            return new GameConfig(properties);
        };

        /**
         * Encodes the specified GameConfig message. Does not implicitly {@link pong.GameConfig.verify|verify} messages.
         * @function encode
         * @memberof pong.GameConfig
         * @static
         * @param {pong.IGameConfig} message GameConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ballRadius != null && Object.hasOwnProperty.call(message, "ballRadius"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ballRadius);
            if (message.paddleHeight != null && Object.hasOwnProperty.call(message, "paddleHeight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.paddleHeight);
            if (message.paddleWidth != null && Object.hasOwnProperty.call(message, "paddleWidth"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.paddleWidth);
            if (message.leftPaddleX != null && Object.hasOwnProperty.call(message, "leftPaddleX"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.leftPaddleX);
            if (message.rightPaddleX != null && Object.hasOwnProperty.call(message, "rightPaddleX"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.rightPaddleX);
            if (message.screenWidth != null && Object.hasOwnProperty.call(message, "screenWidth"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.screenWidth);
            if (message.screenHeight != null && Object.hasOwnProperty.call(message, "screenHeight"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.screenHeight);
            return writer;
        };

        /**
         * Encodes the specified GameConfig message, length delimited. Does not implicitly {@link pong.GameConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.GameConfig
         * @static
         * @param {pong.IGameConfig} message GameConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameConfig message from the specified reader or buffer.
         * @function decode
         * @memberof pong.GameConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.GameConfig} GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.GameConfig();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ballRadius = reader.int32();
                        break;
                    }
                case 2: {
                        message.paddleHeight = reader.int32();
                        break;
                    }
                case 3: {
                        message.paddleWidth = reader.int32();
                        break;
                    }
                case 4: {
                        message.leftPaddleX = reader.int32();
                        break;
                    }
                case 5: {
                        message.rightPaddleX = reader.int32();
                        break;
                    }
                case 6: {
                        message.screenWidth = reader.int32();
                        break;
                    }
                case 7: {
                        message.screenHeight = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.GameConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.GameConfig} GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameConfig message.
         * @function verify
         * @memberof pong.GameConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ballRadius != null && message.hasOwnProperty("ballRadius"))
                if (!$util.isInteger(message.ballRadius))
                    return "ballRadius: integer expected";
            if (message.paddleHeight != null && message.hasOwnProperty("paddleHeight"))
                if (!$util.isInteger(message.paddleHeight))
                    return "paddleHeight: integer expected";
            if (message.paddleWidth != null && message.hasOwnProperty("paddleWidth"))
                if (!$util.isInteger(message.paddleWidth))
                    return "paddleWidth: integer expected";
            if (message.leftPaddleX != null && message.hasOwnProperty("leftPaddleX"))
                if (!$util.isInteger(message.leftPaddleX))
                    return "leftPaddleX: integer expected";
            if (message.rightPaddleX != null && message.hasOwnProperty("rightPaddleX"))
                if (!$util.isInteger(message.rightPaddleX))
                    return "rightPaddleX: integer expected";
            if (message.screenWidth != null && message.hasOwnProperty("screenWidth"))
                if (!$util.isInteger(message.screenWidth))
                    return "screenWidth: integer expected";
            if (message.screenHeight != null && message.hasOwnProperty("screenHeight"))
                if (!$util.isInteger(message.screenHeight))
                    return "screenHeight: integer expected";
            return null;
        };

        /**
         * Creates a GameConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.GameConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.GameConfig} GameConfig
         */
        GameConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.GameConfig)
                return object;
            let message = new $root.pong.GameConfig();
            if (object.ballRadius != null)
                message.ballRadius = object.ballRadius | 0;
            if (object.paddleHeight != null)
                message.paddleHeight = object.paddleHeight | 0;
            if (object.paddleWidth != null)
                message.paddleWidth = object.paddleWidth | 0;
            if (object.leftPaddleX != null)
                message.leftPaddleX = object.leftPaddleX | 0;
            if (object.rightPaddleX != null)
                message.rightPaddleX = object.rightPaddleX | 0;
            if (object.screenWidth != null)
                message.screenWidth = object.screenWidth | 0;
            if (object.screenHeight != null)
                message.screenHeight = object.screenHeight | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.GameConfig
         * @static
         * @param {pong.GameConfig} message GameConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ballRadius = 0;
                object.paddleHeight = 0;
                object.paddleWidth = 0;
                object.leftPaddleX = 0;
                object.rightPaddleX = 0;
                object.screenWidth = 0;
                object.screenHeight = 0;
            }
            if (message.ballRadius != null && message.hasOwnProperty("ballRadius"))
                object.ballRadius = message.ballRadius;
            if (message.paddleHeight != null && message.hasOwnProperty("paddleHeight"))
                object.paddleHeight = message.paddleHeight;
            if (message.paddleWidth != null && message.hasOwnProperty("paddleWidth"))
                object.paddleWidth = message.paddleWidth;
            if (message.leftPaddleX != null && message.hasOwnProperty("leftPaddleX"))
                object.leftPaddleX = message.leftPaddleX;
            if (message.rightPaddleX != null && message.hasOwnProperty("rightPaddleX"))
                object.rightPaddleX = message.rightPaddleX;
            if (message.screenWidth != null && message.hasOwnProperty("screenWidth"))
                object.screenWidth = message.screenWidth;
            if (message.screenHeight != null && message.hasOwnProperty("screenHeight"))
                object.screenHeight = message.screenHeight;
            return object;
        };

        /**
         * Converts this GameConfig to JSON.
         * @function toJSON
         * @memberof pong.GameConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameConfig
         * @function getTypeUrl
         * @memberof pong.GameConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.GameConfig";
        };

        return GameConfig;
    })();

    /**
     * GameState enum.
     * @name pong.GameState
     * @enum {number}
     * @property {number} MENU_STATE=0 MENU_STATE value
     * @property {number} PLAY_STATE=1 PLAY_STATE value
     * @property {number} PAUSE_STATE=2 PAUSE_STATE value
     * @property {number} STOP_STATE=3 STOP_STATE value
     */
    pong.GameState = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MENU_STATE"] = 0;
        values[valuesById[1] = "PLAY_STATE"] = 1;
        values[valuesById[2] = "PAUSE_STATE"] = 2;
        values[valuesById[3] = "STOP_STATE"] = 3;
        return values;
    })();

    pong.StateUpdate = (function() {

        /**
         * Properties of a StateUpdate.
         * @memberof pong
         * @interface IStateUpdate
         * @property {pong.GameState|null} [gameState] StateUpdate gameState
         * @property {number|null} [ballX] StateUpdate ballX
         * @property {number|null} [ballY] StateUpdate ballY
         * @property {number|null} [leftPaddleY] StateUpdate leftPaddleY
         * @property {number|null} [rightPaddleY] StateUpdate rightPaddleY
         * @property {number|null} [leftScore] StateUpdate leftScore
         * @property {number|null} [rightScore] StateUpdate rightScore
         */

        /**
         * Constructs a new StateUpdate.
         * @memberof pong
         * @classdesc Represents a StateUpdate.
         * @implements IStateUpdate
         * @constructor
         * @param {pong.IStateUpdate=} [properties] Properties to set
         */
        function StateUpdate(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StateUpdate gameState.
         * @member {pong.GameState} gameState
         * @memberof pong.StateUpdate
         * @instance
         */
        StateUpdate.prototype.gameState = 0;

        /**
         * StateUpdate ballX.
         * @member {number} ballX
         * @memberof pong.StateUpdate
         * @instance
         */
        StateUpdate.prototype.ballX = 0;

        /**
         * StateUpdate ballY.
         * @member {number} ballY
         * @memberof pong.StateUpdate
         * @instance
         */
        StateUpdate.prototype.ballY = 0;

        /**
         * StateUpdate leftPaddleY.
         * @member {number} leftPaddleY
         * @memberof pong.StateUpdate
         * @instance
         */
        StateUpdate.prototype.leftPaddleY = 0;

        /**
         * StateUpdate rightPaddleY.
         * @member {number} rightPaddleY
         * @memberof pong.StateUpdate
         * @instance
         */
        StateUpdate.prototype.rightPaddleY = 0;

        /**
         * StateUpdate leftScore.
         * @member {number} leftScore
         * @memberof pong.StateUpdate
         * @instance
         */
        StateUpdate.prototype.leftScore = 0;

        /**
         * StateUpdate rightScore.
         * @member {number} rightScore
         * @memberof pong.StateUpdate
         * @instance
         */
        StateUpdate.prototype.rightScore = 0;

        /**
         * Creates a new StateUpdate instance using the specified properties.
         * @function create
         * @memberof pong.StateUpdate
         * @static
         * @param {pong.IStateUpdate=} [properties] Properties to set
         * @returns {pong.StateUpdate} StateUpdate instance
         */
        StateUpdate.create = function create(properties) {
            return new StateUpdate(properties);
        };

        /**
         * Encodes the specified StateUpdate message. Does not implicitly {@link pong.StateUpdate.verify|verify} messages.
         * @function encode
         * @memberof pong.StateUpdate
         * @static
         * @param {pong.IStateUpdate} message StateUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StateUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameState != null && Object.hasOwnProperty.call(message, "gameState"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameState);
            if (message.ballX != null && Object.hasOwnProperty.call(message, "ballX"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ballX);
            if (message.ballY != null && Object.hasOwnProperty.call(message, "ballY"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ballY);
            if (message.leftPaddleY != null && Object.hasOwnProperty.call(message, "leftPaddleY"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.leftPaddleY);
            if (message.rightPaddleY != null && Object.hasOwnProperty.call(message, "rightPaddleY"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.rightPaddleY);
            if (message.leftScore != null && Object.hasOwnProperty.call(message, "leftScore"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.leftScore);
            if (message.rightScore != null && Object.hasOwnProperty.call(message, "rightScore"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.rightScore);
            return writer;
        };

        /**
         * Encodes the specified StateUpdate message, length delimited. Does not implicitly {@link pong.StateUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.StateUpdate
         * @static
         * @param {pong.IStateUpdate} message StateUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StateUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StateUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof pong.StateUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.StateUpdate} StateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StateUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.StateUpdate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gameState = reader.int32();
                        break;
                    }
                case 2: {
                        message.ballX = reader.int32();
                        break;
                    }
                case 3: {
                        message.ballY = reader.int32();
                        break;
                    }
                case 4: {
                        message.leftPaddleY = reader.int32();
                        break;
                    }
                case 5: {
                        message.rightPaddleY = reader.int32();
                        break;
                    }
                case 6: {
                        message.leftScore = reader.uint32();
                        break;
                    }
                case 7: {
                        message.rightScore = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StateUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.StateUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.StateUpdate} StateUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StateUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StateUpdate message.
         * @function verify
         * @memberof pong.StateUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StateUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameState != null && message.hasOwnProperty("gameState"))
                switch (message.gameState) {
                default:
                    return "gameState: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.ballX != null && message.hasOwnProperty("ballX"))
                if (!$util.isInteger(message.ballX))
                    return "ballX: integer expected";
            if (message.ballY != null && message.hasOwnProperty("ballY"))
                if (!$util.isInteger(message.ballY))
                    return "ballY: integer expected";
            if (message.leftPaddleY != null && message.hasOwnProperty("leftPaddleY"))
                if (!$util.isInteger(message.leftPaddleY))
                    return "leftPaddleY: integer expected";
            if (message.rightPaddleY != null && message.hasOwnProperty("rightPaddleY"))
                if (!$util.isInteger(message.rightPaddleY))
                    return "rightPaddleY: integer expected";
            if (message.leftScore != null && message.hasOwnProperty("leftScore"))
                if (!$util.isInteger(message.leftScore))
                    return "leftScore: integer expected";
            if (message.rightScore != null && message.hasOwnProperty("rightScore"))
                if (!$util.isInteger(message.rightScore))
                    return "rightScore: integer expected";
            return null;
        };

        /**
         * Creates a StateUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.StateUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.StateUpdate} StateUpdate
         */
        StateUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.StateUpdate)
                return object;
            let message = new $root.pong.StateUpdate();
            switch (object.gameState) {
            default:
                if (typeof object.gameState === "number") {
                    message.gameState = object.gameState;
                    break;
                }
                break;
            case "MENU_STATE":
            case 0:
                message.gameState = 0;
                break;
            case "PLAY_STATE":
            case 1:
                message.gameState = 1;
                break;
            case "PAUSE_STATE":
            case 2:
                message.gameState = 2;
                break;
            case "STOP_STATE":
            case 3:
                message.gameState = 3;
                break;
            }
            if (object.ballX != null)
                message.ballX = object.ballX | 0;
            if (object.ballY != null)
                message.ballY = object.ballY | 0;
            if (object.leftPaddleY != null)
                message.leftPaddleY = object.leftPaddleY | 0;
            if (object.rightPaddleY != null)
                message.rightPaddleY = object.rightPaddleY | 0;
            if (object.leftScore != null)
                message.leftScore = object.leftScore >>> 0;
            if (object.rightScore != null)
                message.rightScore = object.rightScore >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a StateUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.StateUpdate
         * @static
         * @param {pong.StateUpdate} message StateUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StateUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.gameState = options.enums === String ? "MENU_STATE" : 0;
                object.ballX = 0;
                object.ballY = 0;
                object.leftPaddleY = 0;
                object.rightPaddleY = 0;
                object.leftScore = 0;
                object.rightScore = 0;
            }
            if (message.gameState != null && message.hasOwnProperty("gameState"))
                object.gameState = options.enums === String ? $root.pong.GameState[message.gameState] === undefined ? message.gameState : $root.pong.GameState[message.gameState] : message.gameState;
            if (message.ballX != null && message.hasOwnProperty("ballX"))
                object.ballX = message.ballX;
            if (message.ballY != null && message.hasOwnProperty("ballY"))
                object.ballY = message.ballY;
            if (message.leftPaddleY != null && message.hasOwnProperty("leftPaddleY"))
                object.leftPaddleY = message.leftPaddleY;
            if (message.rightPaddleY != null && message.hasOwnProperty("rightPaddleY"))
                object.rightPaddleY = message.rightPaddleY;
            if (message.leftScore != null && message.hasOwnProperty("leftScore"))
                object.leftScore = message.leftScore;
            if (message.rightScore != null && message.hasOwnProperty("rightScore"))
                object.rightScore = message.rightScore;
            return object;
        };

        /**
         * Converts this StateUpdate to JSON.
         * @function toJSON
         * @memberof pong.StateUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StateUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StateUpdate
         * @function getTypeUrl
         * @memberof pong.StateUpdate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StateUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.StateUpdate";
        };

        return StateUpdate;
    })();

    /**
     * UserInput enum.
     * @name pong.UserInput
     * @enum {number}
     * @property {number} START_GAME=0 START_GAME value
     * @property {number} PAUSE_GAME=1 PAUSE_GAME value
     * @property {number} LEFT_UP=2 LEFT_UP value
     * @property {number} LEFT_DOWN=3 LEFT_DOWN value
     * @property {number} RIGHT_UP=4 RIGHT_UP value
     * @property {number} RIGHT_DOWN=5 RIGHT_DOWN value
     * @property {number} STOP_LEFT_UP=6 STOP_LEFT_UP value
     * @property {number} STOP_LEFT_DOWN=7 STOP_LEFT_DOWN value
     * @property {number} STOP_RIGHT_UP=8 STOP_RIGHT_UP value
     * @property {number} STOP_RIGHT_DOWN=9 STOP_RIGHT_DOWN value
     * @property {number} RESET_GAME=10 RESET_GAME value
     */
    pong.UserInput = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "START_GAME"] = 0;
        values[valuesById[1] = "PAUSE_GAME"] = 1;
        values[valuesById[2] = "LEFT_UP"] = 2;
        values[valuesById[3] = "LEFT_DOWN"] = 3;
        values[valuesById[4] = "RIGHT_UP"] = 4;
        values[valuesById[5] = "RIGHT_DOWN"] = 5;
        values[valuesById[6] = "STOP_LEFT_UP"] = 6;
        values[valuesById[7] = "STOP_LEFT_DOWN"] = 7;
        values[valuesById[8] = "STOP_RIGHT_UP"] = 8;
        values[valuesById[9] = "STOP_RIGHT_DOWN"] = 9;
        values[valuesById[10] = "RESET_GAME"] = 10;
        return values;
    })();

    pong.UserAction = (function() {

        /**
         * Properties of a UserAction.
         * @memberof pong
         * @interface IUserAction
         * @property {pong.UserInput|null} [userInput] UserAction userInput
         * @property {number|null} [request] UserAction request
         */

        /**
         * Constructs a new UserAction.
         * @memberof pong
         * @classdesc Represents a UserAction.
         * @implements IUserAction
         * @constructor
         * @param {pong.IUserAction=} [properties] Properties to set
         */
        function UserAction(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserAction userInput.
         * @member {pong.UserInput} userInput
         * @memberof pong.UserAction
         * @instance
         */
        UserAction.prototype.userInput = 0;

        /**
         * UserAction request.
         * @member {number} request
         * @memberof pong.UserAction
         * @instance
         */
        UserAction.prototype.request = 0;

        /**
         * Creates a new UserAction instance using the specified properties.
         * @function create
         * @memberof pong.UserAction
         * @static
         * @param {pong.IUserAction=} [properties] Properties to set
         * @returns {pong.UserAction} UserAction instance
         */
        UserAction.create = function create(properties) {
            return new UserAction(properties);
        };

        /**
         * Encodes the specified UserAction message. Does not implicitly {@link pong.UserAction.verify|verify} messages.
         * @function encode
         * @memberof pong.UserAction
         * @static
         * @param {pong.IUserAction} message UserAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userInput != null && Object.hasOwnProperty.call(message, "userInput"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userInput);
            if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.request);
            return writer;
        };

        /**
         * Encodes the specified UserAction message, length delimited. Does not implicitly {@link pong.UserAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.UserAction
         * @static
         * @param {pong.IUserAction} message UserAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserAction message from the specified reader or buffer.
         * @function decode
         * @memberof pong.UserAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.UserAction} UserAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.UserAction();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userInput = reader.int32();
                        break;
                    }
                case 2: {
                        message.request = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.UserAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.UserAction} UserAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserAction message.
         * @function verify
         * @memberof pong.UserAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userInput != null && message.hasOwnProperty("userInput"))
                switch (message.userInput) {
                default:
                    return "userInput: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    break;
                }
            if (message.request != null && message.hasOwnProperty("request"))
                if (!$util.isInteger(message.request))
                    return "request: integer expected";
            return null;
        };

        /**
         * Creates a UserAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.UserAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.UserAction} UserAction
         */
        UserAction.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.UserAction)
                return object;
            let message = new $root.pong.UserAction();
            switch (object.userInput) {
            default:
                if (typeof object.userInput === "number") {
                    message.userInput = object.userInput;
                    break;
                }
                break;
            case "START_GAME":
            case 0:
                message.userInput = 0;
                break;
            case "PAUSE_GAME":
            case 1:
                message.userInput = 1;
                break;
            case "LEFT_UP":
            case 2:
                message.userInput = 2;
                break;
            case "LEFT_DOWN":
            case 3:
                message.userInput = 3;
                break;
            case "RIGHT_UP":
            case 4:
                message.userInput = 4;
                break;
            case "RIGHT_DOWN":
            case 5:
                message.userInput = 5;
                break;
            case "STOP_LEFT_UP":
            case 6:
                message.userInput = 6;
                break;
            case "STOP_LEFT_DOWN":
            case 7:
                message.userInput = 7;
                break;
            case "STOP_RIGHT_UP":
            case 8:
                message.userInput = 8;
                break;
            case "STOP_RIGHT_DOWN":
            case 9:
                message.userInput = 9;
                break;
            case "RESET_GAME":
            case 10:
                message.userInput = 10;
                break;
            }
            if (object.request != null)
                message.request = object.request | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.UserAction
         * @static
         * @param {pong.UserAction} message UserAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userInput = options.enums === String ? "START_GAME" : 0;
                object.request = 0;
            }
            if (message.userInput != null && message.hasOwnProperty("userInput"))
                object.userInput = options.enums === String ? $root.pong.UserInput[message.userInput] === undefined ? message.userInput : $root.pong.UserInput[message.userInput] : message.userInput;
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = message.request;
            return object;
        };

        /**
         * Converts this UserAction to JSON.
         * @function toJSON
         * @memberof pong.UserAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserAction
         * @function getTypeUrl
         * @memberof pong.UserAction
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.UserAction";
        };

        return UserAction;
    })();

    pong.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof pong
         * @interface IResponse
         * @property {pong.IGameConfig|null} [config] Response config
         * @property {pong.IStateUpdate|null} [stateUpdate] Response stateUpdate
         * @property {pong.IUserAction|null} [userAction] Response userAction
         */

        /**
         * Constructs a new Response.
         * @memberof pong
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {pong.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response config.
         * @member {pong.IGameConfig|null|undefined} config
         * @memberof pong.Response
         * @instance
         */
        Response.prototype.config = null;

        /**
         * Response stateUpdate.
         * @member {pong.IStateUpdate|null|undefined} stateUpdate
         * @memberof pong.Response
         * @instance
         */
        Response.prototype.stateUpdate = null;

        /**
         * Response userAction.
         * @member {pong.IUserAction|null|undefined} userAction
         * @memberof pong.Response
         * @instance
         */
        Response.prototype.userAction = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Response content.
         * @member {"config"|"stateUpdate"|"userAction"|undefined} content
         * @memberof pong.Response
         * @instance
         */
        Object.defineProperty(Response.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["config", "stateUpdate", "userAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof pong.Response
         * @static
         * @param {pong.IResponse=} [properties] Properties to set
         * @returns {pong.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link pong.Response.verify|verify} messages.
         * @function encode
         * @memberof pong.Response
         * @static
         * @param {pong.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.pong.GameConfig.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.stateUpdate != null && Object.hasOwnProperty.call(message, "stateUpdate"))
                $root.pong.StateUpdate.encode(message.stateUpdate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.userAction != null && Object.hasOwnProperty.call(message, "userAction"))
                $root.pong.UserAction.encode(message.userAction, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link pong.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.Response
         * @static
         * @param {pong.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof pong.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.Response();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.config = $root.pong.GameConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.stateUpdate = $root.pong.StateUpdate.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.userAction = $root.pong.UserAction.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof pong.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.config != null && message.hasOwnProperty("config")) {
                properties.content = 1;
                {
                    let error = $root.pong.GameConfig.verify(message.config);
                    if (error)
                        return "config." + error;
                }
            }
            if (message.stateUpdate != null && message.hasOwnProperty("stateUpdate")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.pong.StateUpdate.verify(message.stateUpdate);
                    if (error)
                        return "stateUpdate." + error;
                }
            }
            if (message.userAction != null && message.hasOwnProperty("userAction")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    let error = $root.pong.UserAction.verify(message.userAction);
                    if (error)
                        return "userAction." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.Response)
                return object;
            let message = new $root.pong.Response();
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".pong.Response.config: object expected");
                message.config = $root.pong.GameConfig.fromObject(object.config);
            }
            if (object.stateUpdate != null) {
                if (typeof object.stateUpdate !== "object")
                    throw TypeError(".pong.Response.stateUpdate: object expected");
                message.stateUpdate = $root.pong.StateUpdate.fromObject(object.stateUpdate);
            }
            if (object.userAction != null) {
                if (typeof object.userAction !== "object")
                    throw TypeError(".pong.Response.userAction: object expected");
                message.userAction = $root.pong.UserAction.fromObject(object.userAction);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.Response
         * @static
         * @param {pong.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.config != null && message.hasOwnProperty("config")) {
                object.config = $root.pong.GameConfig.toObject(message.config, options);
                if (options.oneofs)
                    object.content = "config";
            }
            if (message.stateUpdate != null && message.hasOwnProperty("stateUpdate")) {
                object.stateUpdate = $root.pong.StateUpdate.toObject(message.stateUpdate, options);
                if (options.oneofs)
                    object.content = "stateUpdate";
            }
            if (message.userAction != null && message.hasOwnProperty("userAction")) {
                object.userAction = $root.pong.UserAction.toObject(message.userAction, options);
                if (options.oneofs)
                    object.content = "userAction";
            }
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof pong.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Response
         * @function getTypeUrl
         * @memberof pong.Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.Response";
        };

        return Response;
    })();

    return pong;
})();

export { $root as default };
