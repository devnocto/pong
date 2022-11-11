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

    pong.Size = (function() {

        /**
         * Properties of a Size.
         * @memberof pong
         * @interface ISize
         * @property {number|null} [width] Size width
         * @property {number|null} [height] Size height
         */

        /**
         * Constructs a new Size.
         * @memberof pong
         * @classdesc Represents a Size.
         * @implements ISize
         * @constructor
         * @param {pong.ISize=} [properties] Properties to set
         */
        function Size(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Size width.
         * @member {number} width
         * @memberof pong.Size
         * @instance
         */
        Size.prototype.width = 0;

        /**
         * Size height.
         * @member {number} height
         * @memberof pong.Size
         * @instance
         */
        Size.prototype.height = 0;

        /**
         * Creates a new Size instance using the specified properties.
         * @function create
         * @memberof pong.Size
         * @static
         * @param {pong.ISize=} [properties] Properties to set
         * @returns {pong.Size} Size instance
         */
        Size.create = function create(properties) {
            return new Size(properties);
        };

        /**
         * Encodes the specified Size message. Does not implicitly {@link pong.Size.verify|verify} messages.
         * @function encode
         * @memberof pong.Size
         * @static
         * @param {pong.ISize} message Size message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Size.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
            return writer;
        };

        /**
         * Encodes the specified Size message, length delimited. Does not implicitly {@link pong.Size.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.Size
         * @static
         * @param {pong.ISize} message Size message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Size.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Size message from the specified reader or buffer.
         * @function decode
         * @memberof pong.Size
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.Size} Size
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Size.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.Size();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.width = reader.int32();
                        break;
                    }
                case 2: {
                        message.height = reader.int32();
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
         * Decodes a Size message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.Size
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.Size} Size
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Size.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Size message.
         * @function verify
         * @memberof pong.Size
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Size.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            return null;
        };

        /**
         * Creates a Size message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.Size
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.Size} Size
         */
        Size.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.Size)
                return object;
            let message = new $root.pong.Size();
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            return message;
        };

        /**
         * Creates a plain object from a Size message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.Size
         * @static
         * @param {pong.Size} message Size
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Size.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.width = 0;
                object.height = 0;
            }
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            return object;
        };

        /**
         * Converts this Size to JSON.
         * @function toJSON
         * @memberof pong.Size
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Size.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Size
         * @function getTypeUrl
         * @memberof pong.Size
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Size.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.Size";
        };

        return Size;
    })();

    pong.Point = (function() {

        /**
         * Properties of a Point.
         * @memberof pong
         * @interface IPoint
         * @property {number|null} [x] Point x
         * @property {number|null} [y] Point y
         */

        /**
         * Constructs a new Point.
         * @memberof pong
         * @classdesc Represents a Point.
         * @implements IPoint
         * @constructor
         * @param {pong.IPoint=} [properties] Properties to set
         */
        function Point(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Point x.
         * @member {number} x
         * @memberof pong.Point
         * @instance
         */
        Point.prototype.x = 0;

        /**
         * Point y.
         * @member {number} y
         * @memberof pong.Point
         * @instance
         */
        Point.prototype.y = 0;

        /**
         * Creates a new Point instance using the specified properties.
         * @function create
         * @memberof pong.Point
         * @static
         * @param {pong.IPoint=} [properties] Properties to set
         * @returns {pong.Point} Point instance
         */
        Point.create = function create(properties) {
            return new Point(properties);
        };

        /**
         * Encodes the specified Point message. Does not implicitly {@link pong.Point.verify|verify} messages.
         * @function encode
         * @memberof pong.Point
         * @static
         * @param {pong.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            return writer;
        };

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link pong.Point.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.Point
         * @static
         * @param {pong.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @function decode
         * @memberof pong.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.Point();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.int32();
                        break;
                    }
                case 2: {
                        message.y = reader.int32();
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
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Point message.
         * @function verify
         * @memberof pong.Point
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Point.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.Point
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.Point} Point
         */
        Point.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.Point)
                return object;
            let message = new $root.pong.Point();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            return message;
        };

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.Point
         * @static
         * @param {pong.Point} message Point
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Point.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this Point to JSON.
         * @function toJSON
         * @memberof pong.Point
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Point.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Point
         * @function getTypeUrl
         * @memberof pong.Point
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Point.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.Point";
        };

        return Point;
    })();

    pong.Velocity = (function() {

        /**
         * Properties of a Velocity.
         * @memberof pong
         * @interface IVelocity
         * @property {number|null} [vx] Velocity vx
         * @property {number|null} [vy] Velocity vy
         */

        /**
         * Constructs a new Velocity.
         * @memberof pong
         * @classdesc Represents a Velocity.
         * @implements IVelocity
         * @constructor
         * @param {pong.IVelocity=} [properties] Properties to set
         */
        function Velocity(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Velocity vx.
         * @member {number} vx
         * @memberof pong.Velocity
         * @instance
         */
        Velocity.prototype.vx = 0;

        /**
         * Velocity vy.
         * @member {number} vy
         * @memberof pong.Velocity
         * @instance
         */
        Velocity.prototype.vy = 0;

        /**
         * Creates a new Velocity instance using the specified properties.
         * @function create
         * @memberof pong.Velocity
         * @static
         * @param {pong.IVelocity=} [properties] Properties to set
         * @returns {pong.Velocity} Velocity instance
         */
        Velocity.create = function create(properties) {
            return new Velocity(properties);
        };

        /**
         * Encodes the specified Velocity message. Does not implicitly {@link pong.Velocity.verify|verify} messages.
         * @function encode
         * @memberof pong.Velocity
         * @static
         * @param {pong.IVelocity} message Velocity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Velocity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vx != null && Object.hasOwnProperty.call(message, "vx"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.vx);
            if (message.vy != null && Object.hasOwnProperty.call(message, "vy"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.vy);
            return writer;
        };

        /**
         * Encodes the specified Velocity message, length delimited. Does not implicitly {@link pong.Velocity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.Velocity
         * @static
         * @param {pong.IVelocity} message Velocity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Velocity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Velocity message from the specified reader or buffer.
         * @function decode
         * @memberof pong.Velocity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.Velocity} Velocity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Velocity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.Velocity();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.vx = reader.sint32();
                        break;
                    }
                case 2: {
                        message.vy = reader.sint32();
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
         * Decodes a Velocity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.Velocity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.Velocity} Velocity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Velocity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Velocity message.
         * @function verify
         * @memberof pong.Velocity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Velocity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vx != null && message.hasOwnProperty("vx"))
                if (!$util.isInteger(message.vx))
                    return "vx: integer expected";
            if (message.vy != null && message.hasOwnProperty("vy"))
                if (!$util.isInteger(message.vy))
                    return "vy: integer expected";
            return null;
        };

        /**
         * Creates a Velocity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.Velocity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.Velocity} Velocity
         */
        Velocity.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.Velocity)
                return object;
            let message = new $root.pong.Velocity();
            if (object.vx != null)
                message.vx = object.vx | 0;
            if (object.vy != null)
                message.vy = object.vy | 0;
            return message;
        };

        /**
         * Creates a plain object from a Velocity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.Velocity
         * @static
         * @param {pong.Velocity} message Velocity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Velocity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.vx = 0;
                object.vy = 0;
            }
            if (message.vx != null && message.hasOwnProperty("vx"))
                object.vx = message.vx;
            if (message.vy != null && message.hasOwnProperty("vy"))
                object.vy = message.vy;
            return object;
        };

        /**
         * Converts this Velocity to JSON.
         * @function toJSON
         * @memberof pong.Velocity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Velocity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Velocity
         * @function getTypeUrl
         * @memberof pong.Velocity
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Velocity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.Velocity";
        };

        return Velocity;
    })();

    pong.Score = (function() {

        /**
         * Properties of a Score.
         * @memberof pong
         * @interface IScore
         * @property {number|null} [value] Score value
         */

        /**
         * Constructs a new Score.
         * @memberof pong
         * @classdesc Represents a Score.
         * @implements IScore
         * @constructor
         * @param {pong.IScore=} [properties] Properties to set
         */
        function Score(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Score value.
         * @member {number} value
         * @memberof pong.Score
         * @instance
         */
        Score.prototype.value = 0;

        /**
         * Creates a new Score instance using the specified properties.
         * @function create
         * @memberof pong.Score
         * @static
         * @param {pong.IScore=} [properties] Properties to set
         * @returns {pong.Score} Score instance
         */
        Score.create = function create(properties) {
            return new Score(properties);
        };

        /**
         * Encodes the specified Score message. Does not implicitly {@link pong.Score.verify|verify} messages.
         * @function encode
         * @memberof pong.Score
         * @static
         * @param {pong.IScore} message Score message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Score.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
            return writer;
        };

        /**
         * Encodes the specified Score message, length delimited. Does not implicitly {@link pong.Score.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.Score
         * @static
         * @param {pong.IScore} message Score message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Score.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Score message from the specified reader or buffer.
         * @function decode
         * @memberof pong.Score
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.Score} Score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Score.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.Score();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.uint32();
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
         * Decodes a Score message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.Score
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.Score} Score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Score.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Score message.
         * @function verify
         * @memberof pong.Score
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Score.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        /**
         * Creates a Score message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.Score
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.Score} Score
         */
        Score.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.Score)
                return object;
            let message = new $root.pong.Score();
            if (object.value != null)
                message.value = object.value >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Score message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.Score
         * @static
         * @param {pong.Score} message Score
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Score.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.value = 0;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Score to JSON.
         * @function toJSON
         * @memberof pong.Score
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Score.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Score
         * @function getTypeUrl
         * @memberof pong.Score
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Score.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.Score";
        };

        return Score;
    })();

    pong.ScoreUpdate = (function() {

        /**
         * Properties of a ScoreUpdate.
         * @memberof pong
         * @interface IScoreUpdate
         * @property {pong.IScore|null} [leftScore] ScoreUpdate leftScore
         * @property {pong.IScore|null} [rightScore] ScoreUpdate rightScore
         */

        /**
         * Constructs a new ScoreUpdate.
         * @memberof pong
         * @classdesc Represents a ScoreUpdate.
         * @implements IScoreUpdate
         * @constructor
         * @param {pong.IScoreUpdate=} [properties] Properties to set
         */
        function ScoreUpdate(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ScoreUpdate leftScore.
         * @member {pong.IScore|null|undefined} leftScore
         * @memberof pong.ScoreUpdate
         * @instance
         */
        ScoreUpdate.prototype.leftScore = null;

        /**
         * ScoreUpdate rightScore.
         * @member {pong.IScore|null|undefined} rightScore
         * @memberof pong.ScoreUpdate
         * @instance
         */
        ScoreUpdate.prototype.rightScore = null;

        /**
         * Creates a new ScoreUpdate instance using the specified properties.
         * @function create
         * @memberof pong.ScoreUpdate
         * @static
         * @param {pong.IScoreUpdate=} [properties] Properties to set
         * @returns {pong.ScoreUpdate} ScoreUpdate instance
         */
        ScoreUpdate.create = function create(properties) {
            return new ScoreUpdate(properties);
        };

        /**
         * Encodes the specified ScoreUpdate message. Does not implicitly {@link pong.ScoreUpdate.verify|verify} messages.
         * @function encode
         * @memberof pong.ScoreUpdate
         * @static
         * @param {pong.IScoreUpdate} message ScoreUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScoreUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.leftScore != null && Object.hasOwnProperty.call(message, "leftScore"))
                $root.pong.Score.encode(message.leftScore, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.rightScore != null && Object.hasOwnProperty.call(message, "rightScore"))
                $root.pong.Score.encode(message.rightScore, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ScoreUpdate message, length delimited. Does not implicitly {@link pong.ScoreUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.ScoreUpdate
         * @static
         * @param {pong.IScoreUpdate} message ScoreUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScoreUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ScoreUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof pong.ScoreUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.ScoreUpdate} ScoreUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScoreUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.ScoreUpdate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.leftScore = $root.pong.Score.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.rightScore = $root.pong.Score.decode(reader, reader.uint32());
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
         * Decodes a ScoreUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.ScoreUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.ScoreUpdate} ScoreUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScoreUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ScoreUpdate message.
         * @function verify
         * @memberof pong.ScoreUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ScoreUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.leftScore != null && message.hasOwnProperty("leftScore")) {
                let error = $root.pong.Score.verify(message.leftScore);
                if (error)
                    return "leftScore." + error;
            }
            if (message.rightScore != null && message.hasOwnProperty("rightScore")) {
                let error = $root.pong.Score.verify(message.rightScore);
                if (error)
                    return "rightScore." + error;
            }
            return null;
        };

        /**
         * Creates a ScoreUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.ScoreUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.ScoreUpdate} ScoreUpdate
         */
        ScoreUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.ScoreUpdate)
                return object;
            let message = new $root.pong.ScoreUpdate();
            if (object.leftScore != null) {
                if (typeof object.leftScore !== "object")
                    throw TypeError(".pong.ScoreUpdate.leftScore: object expected");
                message.leftScore = $root.pong.Score.fromObject(object.leftScore);
            }
            if (object.rightScore != null) {
                if (typeof object.rightScore !== "object")
                    throw TypeError(".pong.ScoreUpdate.rightScore: object expected");
                message.rightScore = $root.pong.Score.fromObject(object.rightScore);
            }
            return message;
        };

        /**
         * Creates a plain object from a ScoreUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.ScoreUpdate
         * @static
         * @param {pong.ScoreUpdate} message ScoreUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ScoreUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.leftScore = null;
                object.rightScore = null;
            }
            if (message.leftScore != null && message.hasOwnProperty("leftScore"))
                object.leftScore = $root.pong.Score.toObject(message.leftScore, options);
            if (message.rightScore != null && message.hasOwnProperty("rightScore"))
                object.rightScore = $root.pong.Score.toObject(message.rightScore, options);
            return object;
        };

        /**
         * Converts this ScoreUpdate to JSON.
         * @function toJSON
         * @memberof pong.ScoreUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ScoreUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ScoreUpdate
         * @function getTypeUrl
         * @memberof pong.ScoreUpdate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ScoreUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.ScoreUpdate";
        };

        return ScoreUpdate;
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
         * @property {number|null} [request] UserAction request
         * @property {pong.UserInput|null} [userInput] UserAction userInput
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
         * UserAction request.
         * @member {number} request
         * @memberof pong.UserAction
         * @instance
         */
        UserAction.prototype.request = 0;

        /**
         * UserAction userInput.
         * @member {pong.UserInput} userInput
         * @memberof pong.UserAction
         * @instance
         */
        UserAction.prototype.userInput = 0;

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
            if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.request);
            if (message.userInput != null && Object.hasOwnProperty.call(message, "userInput"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userInput);
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
                        message.request = reader.int32();
                        break;
                    }
                case 2: {
                        message.userInput = reader.int32();
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
            if (message.request != null && message.hasOwnProperty("request"))
                if (!$util.isInteger(message.request))
                    return "request: integer expected";
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
            if (object.request != null)
                message.request = object.request | 0;
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
                object.request = 0;
                object.userInput = options.enums === String ? "START_GAME" : 0;
            }
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = message.request;
            if (message.userInput != null && message.hasOwnProperty("userInput"))
                object.userInput = options.enums === String ? $root.pong.UserInput[message.userInput] === undefined ? message.userInput : $root.pong.UserInput[message.userInput] : message.userInput;
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

    pong.Ball = (function() {

        /**
         * Properties of a Ball.
         * @memberof pong
         * @interface IBall
         * @property {pong.IPoint|null} [point] Ball point
         * @property {pong.IVelocity|null} [velocity] Ball velocity
         * @property {number|null} [radius] Ball radius
         */

        /**
         * Constructs a new Ball.
         * @memberof pong
         * @classdesc Represents a Ball.
         * @implements IBall
         * @constructor
         * @param {pong.IBall=} [properties] Properties to set
         */
        function Ball(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ball point.
         * @member {pong.IPoint|null|undefined} point
         * @memberof pong.Ball
         * @instance
         */
        Ball.prototype.point = null;

        /**
         * Ball velocity.
         * @member {pong.IVelocity|null|undefined} velocity
         * @memberof pong.Ball
         * @instance
         */
        Ball.prototype.velocity = null;

        /**
         * Ball radius.
         * @member {number} radius
         * @memberof pong.Ball
         * @instance
         */
        Ball.prototype.radius = 0;

        /**
         * Creates a new Ball instance using the specified properties.
         * @function create
         * @memberof pong.Ball
         * @static
         * @param {pong.IBall=} [properties] Properties to set
         * @returns {pong.Ball} Ball instance
         */
        Ball.create = function create(properties) {
            return new Ball(properties);
        };

        /**
         * Encodes the specified Ball message. Does not implicitly {@link pong.Ball.verify|verify} messages.
         * @function encode
         * @memberof pong.Ball
         * @static
         * @param {pong.IBall} message Ball message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ball.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.point != null && Object.hasOwnProperty.call(message, "point"))
                $root.pong.Point.encode(message.point, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.velocity != null && Object.hasOwnProperty.call(message, "velocity"))
                $root.pong.Velocity.encode(message.velocity, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.radius != null && Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.radius);
            return writer;
        };

        /**
         * Encodes the specified Ball message, length delimited. Does not implicitly {@link pong.Ball.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.Ball
         * @static
         * @param {pong.IBall} message Ball message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ball.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Ball message from the specified reader or buffer.
         * @function decode
         * @memberof pong.Ball
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.Ball} Ball
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ball.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.Ball();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.point = $root.pong.Point.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.velocity = $root.pong.Velocity.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.radius = reader.int32();
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
         * Decodes a Ball message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.Ball
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.Ball} Ball
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ball.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Ball message.
         * @function verify
         * @memberof pong.Ball
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ball.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.point != null && message.hasOwnProperty("point")) {
                let error = $root.pong.Point.verify(message.point);
                if (error)
                    return "point." + error;
            }
            if (message.velocity != null && message.hasOwnProperty("velocity")) {
                let error = $root.pong.Velocity.verify(message.velocity);
                if (error)
                    return "velocity." + error;
            }
            if (message.radius != null && message.hasOwnProperty("radius"))
                if (!$util.isInteger(message.radius))
                    return "radius: integer expected";
            return null;
        };

        /**
         * Creates a Ball message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.Ball
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.Ball} Ball
         */
        Ball.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.Ball)
                return object;
            let message = new $root.pong.Ball();
            if (object.point != null) {
                if (typeof object.point !== "object")
                    throw TypeError(".pong.Ball.point: object expected");
                message.point = $root.pong.Point.fromObject(object.point);
            }
            if (object.velocity != null) {
                if (typeof object.velocity !== "object")
                    throw TypeError(".pong.Ball.velocity: object expected");
                message.velocity = $root.pong.Velocity.fromObject(object.velocity);
            }
            if (object.radius != null)
                message.radius = object.radius | 0;
            return message;
        };

        /**
         * Creates a plain object from a Ball message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.Ball
         * @static
         * @param {pong.Ball} message Ball
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ball.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.point = null;
                object.velocity = null;
                object.radius = 0;
            }
            if (message.point != null && message.hasOwnProperty("point"))
                object.point = $root.pong.Point.toObject(message.point, options);
            if (message.velocity != null && message.hasOwnProperty("velocity"))
                object.velocity = $root.pong.Velocity.toObject(message.velocity, options);
            if (message.radius != null && message.hasOwnProperty("radius"))
                object.radius = message.radius;
            return object;
        };

        /**
         * Converts this Ball to JSON.
         * @function toJSON
         * @memberof pong.Ball
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ball.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ball
         * @function getTypeUrl
         * @memberof pong.Ball
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ball.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.Ball";
        };

        return Ball;
    })();

    pong.Paddle = (function() {

        /**
         * Properties of a Paddle.
         * @memberof pong
         * @interface IPaddle
         * @property {pong.IPoint|null} [point] Paddle point
         * @property {pong.IVelocity|null} [velocity] Paddle velocity
         * @property {pong.ISize|null} [size] Paddle size
         * @property {number|null} [ay] Paddle ay
         */

        /**
         * Constructs a new Paddle.
         * @memberof pong
         * @classdesc Represents a Paddle.
         * @implements IPaddle
         * @constructor
         * @param {pong.IPaddle=} [properties] Properties to set
         */
        function Paddle(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Paddle point.
         * @member {pong.IPoint|null|undefined} point
         * @memberof pong.Paddle
         * @instance
         */
        Paddle.prototype.point = null;

        /**
         * Paddle velocity.
         * @member {pong.IVelocity|null|undefined} velocity
         * @memberof pong.Paddle
         * @instance
         */
        Paddle.prototype.velocity = null;

        /**
         * Paddle size.
         * @member {pong.ISize|null|undefined} size
         * @memberof pong.Paddle
         * @instance
         */
        Paddle.prototype.size = null;

        /**
         * Paddle ay.
         * @member {number} ay
         * @memberof pong.Paddle
         * @instance
         */
        Paddle.prototype.ay = 0;

        /**
         * Creates a new Paddle instance using the specified properties.
         * @function create
         * @memberof pong.Paddle
         * @static
         * @param {pong.IPaddle=} [properties] Properties to set
         * @returns {pong.Paddle} Paddle instance
         */
        Paddle.create = function create(properties) {
            return new Paddle(properties);
        };

        /**
         * Encodes the specified Paddle message. Does not implicitly {@link pong.Paddle.verify|verify} messages.
         * @function encode
         * @memberof pong.Paddle
         * @static
         * @param {pong.IPaddle} message Paddle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Paddle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.point != null && Object.hasOwnProperty.call(message, "point"))
                $root.pong.Point.encode(message.point, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.velocity != null && Object.hasOwnProperty.call(message, "velocity"))
                $root.pong.Velocity.encode(message.velocity, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                $root.pong.Size.encode(message.size, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.ay != null && Object.hasOwnProperty.call(message, "ay"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ay);
            return writer;
        };

        /**
         * Encodes the specified Paddle message, length delimited. Does not implicitly {@link pong.Paddle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.Paddle
         * @static
         * @param {pong.IPaddle} message Paddle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Paddle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Paddle message from the specified reader or buffer.
         * @function decode
         * @memberof pong.Paddle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.Paddle} Paddle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Paddle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.Paddle();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.point = $root.pong.Point.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.velocity = $root.pong.Velocity.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.size = $root.pong.Size.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.ay = reader.int32();
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
         * Decodes a Paddle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.Paddle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.Paddle} Paddle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Paddle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Paddle message.
         * @function verify
         * @memberof pong.Paddle
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Paddle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.point != null && message.hasOwnProperty("point")) {
                let error = $root.pong.Point.verify(message.point);
                if (error)
                    return "point." + error;
            }
            if (message.velocity != null && message.hasOwnProperty("velocity")) {
                let error = $root.pong.Velocity.verify(message.velocity);
                if (error)
                    return "velocity." + error;
            }
            if (message.size != null && message.hasOwnProperty("size")) {
                let error = $root.pong.Size.verify(message.size);
                if (error)
                    return "size." + error;
            }
            if (message.ay != null && message.hasOwnProperty("ay"))
                if (!$util.isInteger(message.ay))
                    return "ay: integer expected";
            return null;
        };

        /**
         * Creates a Paddle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.Paddle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.Paddle} Paddle
         */
        Paddle.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.Paddle)
                return object;
            let message = new $root.pong.Paddle();
            if (object.point != null) {
                if (typeof object.point !== "object")
                    throw TypeError(".pong.Paddle.point: object expected");
                message.point = $root.pong.Point.fromObject(object.point);
            }
            if (object.velocity != null) {
                if (typeof object.velocity !== "object")
                    throw TypeError(".pong.Paddle.velocity: object expected");
                message.velocity = $root.pong.Velocity.fromObject(object.velocity);
            }
            if (object.size != null) {
                if (typeof object.size !== "object")
                    throw TypeError(".pong.Paddle.size: object expected");
                message.size = $root.pong.Size.fromObject(object.size);
            }
            if (object.ay != null)
                message.ay = object.ay | 0;
            return message;
        };

        /**
         * Creates a plain object from a Paddle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.Paddle
         * @static
         * @param {pong.Paddle} message Paddle
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Paddle.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.point = null;
                object.velocity = null;
                object.size = null;
                object.ay = 0;
            }
            if (message.point != null && message.hasOwnProperty("point"))
                object.point = $root.pong.Point.toObject(message.point, options);
            if (message.velocity != null && message.hasOwnProperty("velocity"))
                object.velocity = $root.pong.Velocity.toObject(message.velocity, options);
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = $root.pong.Size.toObject(message.size, options);
            if (message.ay != null && message.hasOwnProperty("ay"))
                object.ay = message.ay;
            return object;
        };

        /**
         * Converts this Paddle to JSON.
         * @function toJSON
         * @memberof pong.Paddle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Paddle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Paddle
         * @function getTypeUrl
         * @memberof pong.Paddle
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Paddle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.Paddle";
        };

        return Paddle;
    })();

    pong.Game = (function() {

        /**
         * Properties of a Game.
         * @memberof pong
         * @interface IGame
         * @property {pong.GameState|null} [state] Game state
         * @property {pong.IBall|null} [ball] Game ball
         * @property {pong.IPaddle|null} [leftPaddle] Game leftPaddle
         * @property {pong.IPaddle|null} [rightPaddle] Game rightPaddle
         * @property {pong.IScore|null} [leftScore] Game leftScore
         * @property {pong.IScore|null} [rightScore] Game rightScore
         * @property {pong.ISize|null} [screenSize] Game screenSize
         */

        /**
         * Constructs a new Game.
         * @memberof pong
         * @classdesc Represents a Game.
         * @implements IGame
         * @constructor
         * @param {pong.IGame=} [properties] Properties to set
         */
        function Game(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Game state.
         * @member {pong.GameState} state
         * @memberof pong.Game
         * @instance
         */
        Game.prototype.state = 0;

        /**
         * Game ball.
         * @member {pong.IBall|null|undefined} ball
         * @memberof pong.Game
         * @instance
         */
        Game.prototype.ball = null;

        /**
         * Game leftPaddle.
         * @member {pong.IPaddle|null|undefined} leftPaddle
         * @memberof pong.Game
         * @instance
         */
        Game.prototype.leftPaddle = null;

        /**
         * Game rightPaddle.
         * @member {pong.IPaddle|null|undefined} rightPaddle
         * @memberof pong.Game
         * @instance
         */
        Game.prototype.rightPaddle = null;

        /**
         * Game leftScore.
         * @member {pong.IScore|null|undefined} leftScore
         * @memberof pong.Game
         * @instance
         */
        Game.prototype.leftScore = null;

        /**
         * Game rightScore.
         * @member {pong.IScore|null|undefined} rightScore
         * @memberof pong.Game
         * @instance
         */
        Game.prototype.rightScore = null;

        /**
         * Game screenSize.
         * @member {pong.ISize|null|undefined} screenSize
         * @memberof pong.Game
         * @instance
         */
        Game.prototype.screenSize = null;

        /**
         * Creates a new Game instance using the specified properties.
         * @function create
         * @memberof pong.Game
         * @static
         * @param {pong.IGame=} [properties] Properties to set
         * @returns {pong.Game} Game instance
         */
        Game.create = function create(properties) {
            return new Game(properties);
        };

        /**
         * Encodes the specified Game message. Does not implicitly {@link pong.Game.verify|verify} messages.
         * @function encode
         * @memberof pong.Game
         * @static
         * @param {pong.IGame} message Game message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Game.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.ball != null && Object.hasOwnProperty.call(message, "ball"))
                $root.pong.Ball.encode(message.ball, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.leftPaddle != null && Object.hasOwnProperty.call(message, "leftPaddle"))
                $root.pong.Paddle.encode(message.leftPaddle, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.rightPaddle != null && Object.hasOwnProperty.call(message, "rightPaddle"))
                $root.pong.Paddle.encode(message.rightPaddle, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.leftScore != null && Object.hasOwnProperty.call(message, "leftScore"))
                $root.pong.Score.encode(message.leftScore, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.rightScore != null && Object.hasOwnProperty.call(message, "rightScore"))
                $root.pong.Score.encode(message.rightScore, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.screenSize != null && Object.hasOwnProperty.call(message, "screenSize"))
                $root.pong.Size.encode(message.screenSize, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Game message, length delimited. Does not implicitly {@link pong.Game.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.Game
         * @static
         * @param {pong.IGame} message Game message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Game.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Game message from the specified reader or buffer.
         * @function decode
         * @memberof pong.Game
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.Game} Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Game.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.Game();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.state = reader.int32();
                        break;
                    }
                case 2: {
                        message.ball = $root.pong.Ball.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.leftPaddle = $root.pong.Paddle.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.rightPaddle = $root.pong.Paddle.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.leftScore = $root.pong.Score.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.rightScore = $root.pong.Score.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.screenSize = $root.pong.Size.decode(reader, reader.uint32());
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
         * Decodes a Game message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.Game
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.Game} Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Game.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Game message.
         * @function verify
         * @memberof pong.Game
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Game.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.ball != null && message.hasOwnProperty("ball")) {
                let error = $root.pong.Ball.verify(message.ball);
                if (error)
                    return "ball." + error;
            }
            if (message.leftPaddle != null && message.hasOwnProperty("leftPaddle")) {
                let error = $root.pong.Paddle.verify(message.leftPaddle);
                if (error)
                    return "leftPaddle." + error;
            }
            if (message.rightPaddle != null && message.hasOwnProperty("rightPaddle")) {
                let error = $root.pong.Paddle.verify(message.rightPaddle);
                if (error)
                    return "rightPaddle." + error;
            }
            if (message.leftScore != null && message.hasOwnProperty("leftScore")) {
                let error = $root.pong.Score.verify(message.leftScore);
                if (error)
                    return "leftScore." + error;
            }
            if (message.rightScore != null && message.hasOwnProperty("rightScore")) {
                let error = $root.pong.Score.verify(message.rightScore);
                if (error)
                    return "rightScore." + error;
            }
            if (message.screenSize != null && message.hasOwnProperty("screenSize")) {
                let error = $root.pong.Size.verify(message.screenSize);
                if (error)
                    return "screenSize." + error;
            }
            return null;
        };

        /**
         * Creates a Game message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.Game
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.Game} Game
         */
        Game.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.Game)
                return object;
            let message = new $root.pong.Game();
            switch (object.state) {
            default:
                if (typeof object.state === "number") {
                    message.state = object.state;
                    break;
                }
                break;
            case "MENU_STATE":
            case 0:
                message.state = 0;
                break;
            case "PLAY_STATE":
            case 1:
                message.state = 1;
                break;
            case "PAUSE_STATE":
            case 2:
                message.state = 2;
                break;
            case "STOP_STATE":
            case 3:
                message.state = 3;
                break;
            }
            if (object.ball != null) {
                if (typeof object.ball !== "object")
                    throw TypeError(".pong.Game.ball: object expected");
                message.ball = $root.pong.Ball.fromObject(object.ball);
            }
            if (object.leftPaddle != null) {
                if (typeof object.leftPaddle !== "object")
                    throw TypeError(".pong.Game.leftPaddle: object expected");
                message.leftPaddle = $root.pong.Paddle.fromObject(object.leftPaddle);
            }
            if (object.rightPaddle != null) {
                if (typeof object.rightPaddle !== "object")
                    throw TypeError(".pong.Game.rightPaddle: object expected");
                message.rightPaddle = $root.pong.Paddle.fromObject(object.rightPaddle);
            }
            if (object.leftScore != null) {
                if (typeof object.leftScore !== "object")
                    throw TypeError(".pong.Game.leftScore: object expected");
                message.leftScore = $root.pong.Score.fromObject(object.leftScore);
            }
            if (object.rightScore != null) {
                if (typeof object.rightScore !== "object")
                    throw TypeError(".pong.Game.rightScore: object expected");
                message.rightScore = $root.pong.Score.fromObject(object.rightScore);
            }
            if (object.screenSize != null) {
                if (typeof object.screenSize !== "object")
                    throw TypeError(".pong.Game.screenSize: object expected");
                message.screenSize = $root.pong.Size.fromObject(object.screenSize);
            }
            return message;
        };

        /**
         * Creates a plain object from a Game message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.Game
         * @static
         * @param {pong.Game} message Game
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Game.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.state = options.enums === String ? "MENU_STATE" : 0;
                object.ball = null;
                object.leftPaddle = null;
                object.rightPaddle = null;
                object.leftScore = null;
                object.rightScore = null;
                object.screenSize = null;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.pong.GameState[message.state] === undefined ? message.state : $root.pong.GameState[message.state] : message.state;
            if (message.ball != null && message.hasOwnProperty("ball"))
                object.ball = $root.pong.Ball.toObject(message.ball, options);
            if (message.leftPaddle != null && message.hasOwnProperty("leftPaddle"))
                object.leftPaddle = $root.pong.Paddle.toObject(message.leftPaddle, options);
            if (message.rightPaddle != null && message.hasOwnProperty("rightPaddle"))
                object.rightPaddle = $root.pong.Paddle.toObject(message.rightPaddle, options);
            if (message.leftScore != null && message.hasOwnProperty("leftScore"))
                object.leftScore = $root.pong.Score.toObject(message.leftScore, options);
            if (message.rightScore != null && message.hasOwnProperty("rightScore"))
                object.rightScore = $root.pong.Score.toObject(message.rightScore, options);
            if (message.screenSize != null && message.hasOwnProperty("screenSize"))
                object.screenSize = $root.pong.Size.toObject(message.screenSize, options);
            return object;
        };

        /**
         * Converts this Game to JSON.
         * @function toJSON
         * @memberof pong.Game
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Game.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Game
         * @function getTypeUrl
         * @memberof pong.Game
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Game.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.Game";
        };

        return Game;
    })();

    pong.ObjectState = (function() {

        /**
         * Properties of an ObjectState.
         * @memberof pong
         * @interface IObjectState
         * @property {pong.IPoint|null} [position] ObjectState position
         * @property {pong.IVelocity|null} [velocity] ObjectState velocity
         */

        /**
         * Constructs a new ObjectState.
         * @memberof pong
         * @classdesc Represents an ObjectState.
         * @implements IObjectState
         * @constructor
         * @param {pong.IObjectState=} [properties] Properties to set
         */
        function ObjectState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectState position.
         * @member {pong.IPoint|null|undefined} position
         * @memberof pong.ObjectState
         * @instance
         */
        ObjectState.prototype.position = null;

        /**
         * ObjectState velocity.
         * @member {pong.IVelocity|null|undefined} velocity
         * @memberof pong.ObjectState
         * @instance
         */
        ObjectState.prototype.velocity = null;

        /**
         * Creates a new ObjectState instance using the specified properties.
         * @function create
         * @memberof pong.ObjectState
         * @static
         * @param {pong.IObjectState=} [properties] Properties to set
         * @returns {pong.ObjectState} ObjectState instance
         */
        ObjectState.create = function create(properties) {
            return new ObjectState(properties);
        };

        /**
         * Encodes the specified ObjectState message. Does not implicitly {@link pong.ObjectState.verify|verify} messages.
         * @function encode
         * @memberof pong.ObjectState
         * @static
         * @param {pong.IObjectState} message ObjectState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                $root.pong.Point.encode(message.position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.velocity != null && Object.hasOwnProperty.call(message, "velocity"))
                $root.pong.Velocity.encode(message.velocity, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ObjectState message, length delimited. Does not implicitly {@link pong.ObjectState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.ObjectState
         * @static
         * @param {pong.IObjectState} message ObjectState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ObjectState message from the specified reader or buffer.
         * @function decode
         * @memberof pong.ObjectState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.ObjectState} ObjectState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.ObjectState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.position = $root.pong.Point.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.velocity = $root.pong.Velocity.decode(reader, reader.uint32());
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
         * Decodes an ObjectState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.ObjectState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.ObjectState} ObjectState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ObjectState message.
         * @function verify
         * @memberof pong.ObjectState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ObjectState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.position != null && message.hasOwnProperty("position")) {
                let error = $root.pong.Point.verify(message.position);
                if (error)
                    return "position." + error;
            }
            if (message.velocity != null && message.hasOwnProperty("velocity")) {
                let error = $root.pong.Velocity.verify(message.velocity);
                if (error)
                    return "velocity." + error;
            }
            return null;
        };

        /**
         * Creates an ObjectState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.ObjectState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.ObjectState} ObjectState
         */
        ObjectState.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.ObjectState)
                return object;
            let message = new $root.pong.ObjectState();
            if (object.position != null) {
                if (typeof object.position !== "object")
                    throw TypeError(".pong.ObjectState.position: object expected");
                message.position = $root.pong.Point.fromObject(object.position);
            }
            if (object.velocity != null) {
                if (typeof object.velocity !== "object")
                    throw TypeError(".pong.ObjectState.velocity: object expected");
                message.velocity = $root.pong.Velocity.fromObject(object.velocity);
            }
            return message;
        };

        /**
         * Creates a plain object from an ObjectState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.ObjectState
         * @static
         * @param {pong.ObjectState} message ObjectState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObjectState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.position = null;
                object.velocity = null;
            }
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = $root.pong.Point.toObject(message.position, options);
            if (message.velocity != null && message.hasOwnProperty("velocity"))
                object.velocity = $root.pong.Velocity.toObject(message.velocity, options);
            return object;
        };

        /**
         * Converts this ObjectState to JSON.
         * @function toJSON
         * @memberof pong.ObjectState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObjectState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ObjectState
         * @function getTypeUrl
         * @memberof pong.ObjectState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ObjectState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.ObjectState";
        };

        return ObjectState;
    })();

    pong.PlayerState = (function() {

        /**
         * Properties of a PlayerState.
         * @memberof pong
         * @interface IPlayerState
         * @property {number|null} [lastRequest] PlayerState lastRequest
         * @property {pong.IObjectState|null} [state] PlayerState state
         */

        /**
         * Constructs a new PlayerState.
         * @memberof pong
         * @classdesc Represents a PlayerState.
         * @implements IPlayerState
         * @constructor
         * @param {pong.IPlayerState=} [properties] Properties to set
         */
        function PlayerState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerState lastRequest.
         * @member {number} lastRequest
         * @memberof pong.PlayerState
         * @instance
         */
        PlayerState.prototype.lastRequest = 0;

        /**
         * PlayerState state.
         * @member {pong.IObjectState|null|undefined} state
         * @memberof pong.PlayerState
         * @instance
         */
        PlayerState.prototype.state = null;

        /**
         * Creates a new PlayerState instance using the specified properties.
         * @function create
         * @memberof pong.PlayerState
         * @static
         * @param {pong.IPlayerState=} [properties] Properties to set
         * @returns {pong.PlayerState} PlayerState instance
         */
        PlayerState.create = function create(properties) {
            return new PlayerState(properties);
        };

        /**
         * Encodes the specified PlayerState message. Does not implicitly {@link pong.PlayerState.verify|verify} messages.
         * @function encode
         * @memberof pong.PlayerState
         * @static
         * @param {pong.IPlayerState} message PlayerState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lastRequest != null && Object.hasOwnProperty.call(message, "lastRequest"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.lastRequest);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                $root.pong.ObjectState.encode(message.state, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerState message, length delimited. Does not implicitly {@link pong.PlayerState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.PlayerState
         * @static
         * @param {pong.IPlayerState} message PlayerState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerState message from the specified reader or buffer.
         * @function decode
         * @memberof pong.PlayerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.PlayerState} PlayerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.PlayerState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.lastRequest = reader.int32();
                        break;
                    }
                case 2: {
                        message.state = $root.pong.ObjectState.decode(reader, reader.uint32());
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
         * Decodes a PlayerState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.PlayerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.PlayerState} PlayerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerState message.
         * @function verify
         * @memberof pong.PlayerState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lastRequest != null && message.hasOwnProperty("lastRequest"))
                if (!$util.isInteger(message.lastRequest))
                    return "lastRequest: integer expected";
            if (message.state != null && message.hasOwnProperty("state")) {
                let error = $root.pong.ObjectState.verify(message.state);
                if (error)
                    return "state." + error;
            }
            return null;
        };

        /**
         * Creates a PlayerState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.PlayerState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.PlayerState} PlayerState
         */
        PlayerState.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.PlayerState)
                return object;
            let message = new $root.pong.PlayerState();
            if (object.lastRequest != null)
                message.lastRequest = object.lastRequest | 0;
            if (object.state != null) {
                if (typeof object.state !== "object")
                    throw TypeError(".pong.PlayerState.state: object expected");
                message.state = $root.pong.ObjectState.fromObject(object.state);
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.PlayerState
         * @static
         * @param {pong.PlayerState} message PlayerState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.lastRequest = 0;
                object.state = null;
            }
            if (message.lastRequest != null && message.hasOwnProperty("lastRequest"))
                object.lastRequest = message.lastRequest;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = $root.pong.ObjectState.toObject(message.state, options);
            return object;
        };

        /**
         * Converts this PlayerState to JSON.
         * @function toJSON
         * @memberof pong.PlayerState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerState
         * @function getTypeUrl
         * @memberof pong.PlayerState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.PlayerState";
        };

        return PlayerState;
    })();

    pong.StateUpdate = (function() {

        /**
         * Properties of a StateUpdate.
         * @memberof pong
         * @interface IStateUpdate
         * @property {pong.GameState|null} [state] StateUpdate state
         * @property {pong.IObjectState|null} [ball] StateUpdate ball
         * @property {pong.IPlayerState|null} [leftPaddle] StateUpdate leftPaddle
         * @property {pong.IPlayerState|null} [rightPaddle] StateUpdate rightPaddle
         * @property {pong.IScoreUpdate|null} [score] StateUpdate score
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
         * StateUpdate state.
         * @member {pong.GameState} state
         * @memberof pong.StateUpdate
         * @instance
         */
        StateUpdate.prototype.state = 0;

        /**
         * StateUpdate ball.
         * @member {pong.IObjectState|null|undefined} ball
         * @memberof pong.StateUpdate
         * @instance
         */
        StateUpdate.prototype.ball = null;

        /**
         * StateUpdate leftPaddle.
         * @member {pong.IPlayerState|null|undefined} leftPaddle
         * @memberof pong.StateUpdate
         * @instance
         */
        StateUpdate.prototype.leftPaddle = null;

        /**
         * StateUpdate rightPaddle.
         * @member {pong.IPlayerState|null|undefined} rightPaddle
         * @memberof pong.StateUpdate
         * @instance
         */
        StateUpdate.prototype.rightPaddle = null;

        /**
         * StateUpdate score.
         * @member {pong.IScoreUpdate|null|undefined} score
         * @memberof pong.StateUpdate
         * @instance
         */
        StateUpdate.prototype.score = null;

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
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.ball != null && Object.hasOwnProperty.call(message, "ball"))
                $root.pong.ObjectState.encode(message.ball, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.leftPaddle != null && Object.hasOwnProperty.call(message, "leftPaddle"))
                $root.pong.PlayerState.encode(message.leftPaddle, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.rightPaddle != null && Object.hasOwnProperty.call(message, "rightPaddle"))
                $root.pong.PlayerState.encode(message.rightPaddle, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                $root.pong.ScoreUpdate.encode(message.score, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
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
                        message.state = reader.int32();
                        break;
                    }
                case 2: {
                        message.ball = $root.pong.ObjectState.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.leftPaddle = $root.pong.PlayerState.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.rightPaddle = $root.pong.PlayerState.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.score = $root.pong.ScoreUpdate.decode(reader, reader.uint32());
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
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.ball != null && message.hasOwnProperty("ball")) {
                let error = $root.pong.ObjectState.verify(message.ball);
                if (error)
                    return "ball." + error;
            }
            if (message.leftPaddle != null && message.hasOwnProperty("leftPaddle")) {
                let error = $root.pong.PlayerState.verify(message.leftPaddle);
                if (error)
                    return "leftPaddle." + error;
            }
            if (message.rightPaddle != null && message.hasOwnProperty("rightPaddle")) {
                let error = $root.pong.PlayerState.verify(message.rightPaddle);
                if (error)
                    return "rightPaddle." + error;
            }
            if (message.score != null && message.hasOwnProperty("score")) {
                let error = $root.pong.ScoreUpdate.verify(message.score);
                if (error)
                    return "score." + error;
            }
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
            switch (object.state) {
            default:
                if (typeof object.state === "number") {
                    message.state = object.state;
                    break;
                }
                break;
            case "MENU_STATE":
            case 0:
                message.state = 0;
                break;
            case "PLAY_STATE":
            case 1:
                message.state = 1;
                break;
            case "PAUSE_STATE":
            case 2:
                message.state = 2;
                break;
            case "STOP_STATE":
            case 3:
                message.state = 3;
                break;
            }
            if (object.ball != null) {
                if (typeof object.ball !== "object")
                    throw TypeError(".pong.StateUpdate.ball: object expected");
                message.ball = $root.pong.ObjectState.fromObject(object.ball);
            }
            if (object.leftPaddle != null) {
                if (typeof object.leftPaddle !== "object")
                    throw TypeError(".pong.StateUpdate.leftPaddle: object expected");
                message.leftPaddle = $root.pong.PlayerState.fromObject(object.leftPaddle);
            }
            if (object.rightPaddle != null) {
                if (typeof object.rightPaddle !== "object")
                    throw TypeError(".pong.StateUpdate.rightPaddle: object expected");
                message.rightPaddle = $root.pong.PlayerState.fromObject(object.rightPaddle);
            }
            if (object.score != null) {
                if (typeof object.score !== "object")
                    throw TypeError(".pong.StateUpdate.score: object expected");
                message.score = $root.pong.ScoreUpdate.fromObject(object.score);
            }
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
                object.state = options.enums === String ? "MENU_STATE" : 0;
                object.ball = null;
                object.leftPaddle = null;
                object.rightPaddle = null;
                object.score = null;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.pong.GameState[message.state] === undefined ? message.state : $root.pong.GameState[message.state] : message.state;
            if (message.ball != null && message.hasOwnProperty("ball"))
                object.ball = $root.pong.ObjectState.toObject(message.ball, options);
            if (message.leftPaddle != null && message.hasOwnProperty("leftPaddle"))
                object.leftPaddle = $root.pong.PlayerState.toObject(message.leftPaddle, options);
            if (message.rightPaddle != null && message.hasOwnProperty("rightPaddle"))
                object.rightPaddle = $root.pong.PlayerState.toObject(message.rightPaddle, options);
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = $root.pong.ScoreUpdate.toObject(message.score, options);
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

    pong.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof pong
         * @interface IMessage
         * @property {pong.IGame|null} [config] Message config
         * @property {pong.IStateUpdate|null} [stateUpdate] Message stateUpdate
         * @property {pong.IUserAction|null} [userAction] Message userAction
         */

        /**
         * Constructs a new Message.
         * @memberof pong
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {pong.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message config.
         * @member {pong.IGame|null|undefined} config
         * @memberof pong.Message
         * @instance
         */
        Message.prototype.config = null;

        /**
         * Message stateUpdate.
         * @member {pong.IStateUpdate|null|undefined} stateUpdate
         * @memberof pong.Message
         * @instance
         */
        Message.prototype.stateUpdate = null;

        /**
         * Message userAction.
         * @member {pong.IUserAction|null|undefined} userAction
         * @memberof pong.Message
         * @instance
         */
        Message.prototype.userAction = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Message content.
         * @member {"config"|"stateUpdate"|"userAction"|undefined} content
         * @memberof pong.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["config", "stateUpdate", "userAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof pong.Message
         * @static
         * @param {pong.IMessage=} [properties] Properties to set
         * @returns {pong.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link pong.Message.verify|verify} messages.
         * @function encode
         * @memberof pong.Message
         * @static
         * @param {pong.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.pong.Game.encode(message.config, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.stateUpdate != null && Object.hasOwnProperty.call(message, "stateUpdate"))
                $root.pong.StateUpdate.encode(message.stateUpdate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.userAction != null && Object.hasOwnProperty.call(message, "userAction"))
                $root.pong.UserAction.encode(message.userAction, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link pong.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pong.Message
         * @static
         * @param {pong.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof pong.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pong.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pong.Message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.config = $root.pong.Game.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.stateUpdate = $root.pong.StateUpdate.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
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
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pong.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pong.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof pong.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.config != null && message.hasOwnProperty("config")) {
                properties.content = 1;
                {
                    let error = $root.pong.Game.verify(message.config);
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
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pong.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pong.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.pong.Message)
                return object;
            let message = new $root.pong.Message();
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".pong.Message.config: object expected");
                message.config = $root.pong.Game.fromObject(object.config);
            }
            if (object.stateUpdate != null) {
                if (typeof object.stateUpdate !== "object")
                    throw TypeError(".pong.Message.stateUpdate: object expected");
                message.stateUpdate = $root.pong.StateUpdate.fromObject(object.stateUpdate);
            }
            if (object.userAction != null) {
                if (typeof object.userAction !== "object")
                    throw TypeError(".pong.Message.userAction: object expected");
                message.userAction = $root.pong.UserAction.fromObject(object.userAction);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pong.Message
         * @static
         * @param {pong.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.config != null && message.hasOwnProperty("config")) {
                object.config = $root.pong.Game.toObject(message.config, options);
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
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof pong.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Message
         * @function getTypeUrl
         * @memberof pong.Message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pong.Message";
        };

        return Message;
    })();

    return pong;
})();

export { $root as default };
