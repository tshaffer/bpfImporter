(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@brightsign/bscore"), require("redux"), require("core-js/es6/set"), require("core-js/fn/array/from"), require("core-js/fn/object/assign"), require("lodash"), require("reselect"), require("uuid"), require("fs-extra"));
	else if(typeof define === 'function' && define.amd)
		define(["@brightsign/bscore", "redux", "core-js/es6/set", "core-js/fn/array/from", "core-js/fn/object/assign", "lodash", "reselect", "uuid", "fs-extra"], factory);
	else if(typeof exports === 'object')
		exports["bpfimporter"] = factory(require("@brightsign/bscore"), require("redux"), require("core-js/es6/set"), require("core-js/fn/array/from"), require("core-js/fn/object/assign"), require("lodash"), require("reselect"), require("uuid"), require("fs-extra"));
	else
		root["bpfimporter"] = factory(root["@brightsign/bscore"], root["redux"], root["core-js/es6/set"], root["core-js/fn/array/from"], root["core-js/fn/object/assign"], root["lodash"], root["reselect"], root["uuid"], root["fs-extra"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_75__, __WEBPACK_EXTERNAL_MODULE_76__, __WEBPACK_EXTERNAL_MODULE_77__, __WEBPACK_EXTERNAL_MODULE_78__, __WEBPACK_EXTERNAL_MODULE_79__, __WEBPACK_EXTERNAL_MODULE_206__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "bpfimporter/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssign = __webpack_require__(99),
    baseCreate = __webpack_require__(100);

/**
 * Creates an object that inherits from the `prototype` object. If a
 * `properties` object is given, its own enumerable string keyed properties
 * are assigned to the created object.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Object
 * @param {Object} prototype The object to inherit from.
 * @param {Object} [properties] The properties to assign to the object.
 * @returns {Object} Returns the new object.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * function Circle() {
 *   Shape.call(this);
 * }
 *
 * Circle.prototype = _.create(Shape.prototype, {
 *   'constructor': Circle
 * });
 *
 * var circle = new Circle;
 * circle instanceof Circle;
 * // => true
 *
 * circle instanceof Shape;
 * // => true
 */
function create(prototype, properties) {
  var result = baseCreate(prototype);
  return properties == null ? result : baseAssign(result, properties);
}

module.exports = create;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(55);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(110),
    getValue = __webpack_require__(133);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(195)
var ieee754 = __webpack_require__(196)
var isArray = __webpack_require__(69)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var processNextTick = __webpack_require__(41);
/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(14);
util.inherits = __webpack_require__(8);
/*</replacement>*/

var Readable = __webpack_require__(70);
var Writable = __webpack_require__(42);

util.inherits(Duplex, Readable);

var keys = objectKeys(Writable.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  processNextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLElement, XMLNode, XMLRaw, XMLText, isEmpty, isFunction, isObject,
    hasProp = {}.hasOwnProperty;

  isObject = __webpack_require__(2);

  isFunction = __webpack_require__(22);

  isEmpty = __webpack_require__(175);

  XMLElement = null;

  XMLCData = null;

  XMLComment = null;

  XMLDeclaration = null;

  XMLDocType = null;

  XMLRaw = null;

  XMLText = null;

  module.exports = XMLNode = (function() {
    function XMLNode(parent) {
      this.parent = parent;
      this.options = this.parent.options;
      this.stringify = this.parent.stringify;
      if (XMLElement === null) {
        XMLElement = __webpack_require__(66);
        XMLCData = __webpack_require__(62);
        XMLComment = __webpack_require__(63);
        XMLDeclaration = __webpack_require__(64);
        XMLDocType = __webpack_require__(65);
        XMLRaw = __webpack_require__(191);
        XMLText = __webpack_require__(193);
      }
    }

    XMLNode.prototype.element = function(name, attributes, text) {
      var childNode, item, j, k, key, lastChild, len, len1, ref, val;
      lastChild = null;
      if (attributes == null) {
        attributes = {};
      }
      attributes = attributes.valueOf();
      if (!isObject(attributes)) {
        ref = [attributes, text], text = ref[0], attributes = ref[1];
      }
      if (name != null) {
        name = name.valueOf();
      }
      if (Array.isArray(name)) {
        for (j = 0, len = name.length; j < len; j++) {
          item = name[j];
          lastChild = this.element(item);
        }
      } else if (isFunction(name)) {
        lastChild = this.element(name.apply());
      } else if (isObject(name)) {
        for (key in name) {
          if (!hasProp.call(name, key)) continue;
          val = name[key];
          if (isFunction(val)) {
            val = val.apply();
          }
          if ((isObject(val)) && (isEmpty(val))) {
            val = null;
          }
          if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
            lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
          } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && key.indexOf(this.stringify.convertPIKey) === 0) {
            lastChild = this.instruction(key.substr(this.stringify.convertPIKey.length), val);
          } else if (!this.options.separateArrayItems && Array.isArray(val)) {
            for (k = 0, len1 = val.length; k < len1; k++) {
              item = val[k];
              childNode = {};
              childNode[key] = item;
              lastChild = this.element(childNode);
            }
          } else if (isObject(val)) {
            lastChild = this.element(key);
            lastChild.element(val);
          } else {
            lastChild = this.element(key, val);
          }
        }
      } else {
        if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
          lastChild = this.text(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
          lastChild = this.cdata(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
          lastChild = this.comment(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
          lastChild = this.raw(text);
        } else {
          lastChild = this.node(name, attributes, text);
        }
      }
      if (lastChild == null) {
        throw new Error("Could not create any elements with: " + name);
      }
      return lastChild;
    };

    XMLNode.prototype.insertBefore = function(name, attributes, text) {
      var child, i, removed;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i);
      child = this.parent.element(name, attributes, text);
      Array.prototype.push.apply(this.parent.children, removed);
      return child;
    };

    XMLNode.prototype.insertAfter = function(name, attributes, text) {
      var child, i, removed;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i + 1);
      child = this.parent.element(name, attributes, text);
      Array.prototype.push.apply(this.parent.children, removed);
      return child;
    };

    XMLNode.prototype.remove = function() {
      var i, ref;
      if (this.isRoot) {
        throw new Error("Cannot remove the root element");
      }
      i = this.parent.children.indexOf(this);
      [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref = [])), ref;
      return this.parent;
    };

    XMLNode.prototype.node = function(name, attributes, text) {
      var child, ref;
      if (name != null) {
        name = name.valueOf();
      }
      if (attributes == null) {
        attributes = {};
      }
      attributes = attributes.valueOf();
      if (!isObject(attributes)) {
        ref = [attributes, text], text = ref[0], attributes = ref[1];
      }
      child = new XMLElement(this, name, attributes);
      if (text != null) {
        child.text(text);
      }
      this.children.push(child);
      return child;
    };

    XMLNode.prototype.text = function(value) {
      var child;
      child = new XMLText(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.cdata = function(value) {
      var child;
      child = new XMLCData(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.comment = function(value) {
      var child;
      child = new XMLComment(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.raw = function(value) {
      var child;
      child = new XMLRaw(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.declaration = function(version, encoding, standalone) {
      var doc, xmldec;
      doc = this.document();
      xmldec = new XMLDeclaration(doc, version, encoding, standalone);
      doc.xmldec = xmldec;
      return doc.root();
    };

    XMLNode.prototype.doctype = function(pubID, sysID) {
      var doc, doctype;
      doc = this.document();
      doctype = new XMLDocType(doc, pubID, sysID);
      doc.doctype = doctype;
      return doctype;
    };

    XMLNode.prototype.up = function() {
      if (this.isRoot) {
        throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
      }
      return this.parent;
    };

    XMLNode.prototype.root = function() {
      var child;
      if (this.isRoot) {
        return this;
      }
      child = this.parent;
      while (!child.isRoot) {
        child = child.parent;
      }
      return child;
    };

    XMLNode.prototype.document = function() {
      return this.root().documentObject;
    };

    XMLNode.prototype.end = function(options) {
      return this.document().toString(options);
    };

    XMLNode.prototype.prev = function() {
      var i;
      if (this.isRoot) {
        throw new Error("Root node has no siblings");
      }
      i = this.parent.children.indexOf(this);
      if (i < 1) {
        throw new Error("Already at the first node");
      }
      return this.parent.children[i - 1];
    };

    XMLNode.prototype.next = function() {
      var i;
      if (this.isRoot) {
        throw new Error("Root node has no siblings");
      }
      i = this.parent.children.indexOf(this);
      if (i === -1 || i === this.parent.children.length - 1) {
        throw new Error("Already at the last node");
      }
      return this.parent.children[i + 1];
    };

    XMLNode.prototype.importXMLBuilder = function(xmlbuilder) {
      var clonedRoot;
      clonedRoot = xmlbuilder.root().clone();
      clonedRoot.parent = this;
      clonedRoot.isRoot = false;
      this.children.push(clonedRoot);
      return this;
    };

    XMLNode.prototype.ele = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLNode.prototype.nod = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLNode.prototype.txt = function(value) {
      return this.text(value);
    };

    XMLNode.prototype.dat = function(value) {
      return this.cdata(value);
    };

    XMLNode.prototype.com = function(value) {
      return this.comment(value);
    };

    XMLNode.prototype.doc = function() {
      return this.document();
    };

    XMLNode.prototype.dec = function(version, encoding, standalone) {
      return this.declaration(version, encoding, standalone);
    };

    XMLNode.prototype.dtd = function(pubID, sysID) {
      return this.doctype(pubID, sysID);
    };

    XMLNode.prototype.e = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLNode.prototype.n = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLNode.prototype.t = function(value) {
      return this.text(value);
    };

    XMLNode.prototype.d = function(value) {
      return this.cdata(value);
    };

    XMLNode.prototype.c = function(value) {
      return this.comment(value);
    };

    XMLNode.prototype.r = function(value) {
      return this.raw(value);
    };

    XMLNode.prototype.u = function() {
      return this.up();
    };

    return XMLNode;

  })();

}).call(this);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(16),
    getRawTag = __webpack_require__(131),
    objectToString = __webpack_require__(156);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(22),
    isLength = __webpack_require__(36);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(95),
    baseKeys = __webpack_require__(50),
    isArrayLike = __webpack_require__(10);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(142),
    listCacheDelete = __webpack_require__(143),
    listCacheGet = __webpack_require__(144),
    listCacheHas = __webpack_require__(145),
    listCacheSet = __webpack_require__(146);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(21);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(140);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(37);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObject = __webpack_require__(2);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@brightsign/bscore");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(25), __webpack_require__(77), __webpack_require__(78), __webpack_require__(26), __webpack_require__(74), __webpack_require__(75), __webpack_require__(76), __webpack_require__(79));
	else if(typeof define === 'function' && define.amd)
		define(["@brightsign/bscore", "lodash", "reselect", "redux", "core-js/es6/set", "core-js/fn/array/from", "core-js/fn/object/assign", "uuid"], factory);
	else if(typeof exports === 'object')
		exports["bsDataModel"] = factory(require("@brightsign/bscore"), require("lodash"), require("reselect"), require("redux"), require("core-js/es6/set"), require("core-js/fn/array/from"), require("core-js/fn/object/assign"), require("uuid"));
	else
		root["bsDataModel"] = factory(root["@brightsign/bscore"], root["lodash"], root["reselect"], root["redux"], root["core-js/es6/set"], root["core-js/fn/array/from"], root["core-js/fn/object/assign"], root["uuid"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_40__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(25);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(77);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(3);
var index_1 = __webpack_require__(9);
var reducerSign_1 = __webpack_require__(25);
exports.NEW_SIGN = 'DM_NEW_SIGN';
exports.UPDATE_SIGN_PROPS = 'DM_UPDATE_SIGN_PROPS';
exports.UPDATE_SIGN_SERIAL_PORTS = 'DM_UPDATE_SIGN_SERIAL_PORTS';
exports.UPDATE_SIGN_GPIO = 'DM_UPDATE_SIGN_GPIO';
exports.UPDATE_SIGN_BPMAP = 'DM_UPDATE_SIGN_BPMAP';
exports.UPDATE_SIGN_AUDIO_CONFIG = 'DM_UPDATE_SIGN_AUDIO_CONFIG';
exports.OPEN_SIGN = 'DM_OPEN_SIGN';
function dmNewSign(name, mode, model) {
    return {
        type: exports.NEW_SIGN,
        payload: reducerSign_1.createDefaultSignProperties(utils_1.newBsDmId(), name, mode, model),
    };
}
exports.dmNewSign = dmNewSign;
function dmUpdateSignProperties(params) {
    return {
        type: exports.UPDATE_SIGN_PROPS,
        payload: params,
    };
}
exports.dmUpdateSignProperties = dmUpdateSignProperties;
function dmUpdateSignSerialPorts(params) {
    return {
        type: exports.UPDATE_SIGN_SERIAL_PORTS,
        payload: params,
    };
}
exports.dmUpdateSignSerialPorts = dmUpdateSignSerialPorts;
function dmUpdateSignGpio(params) {
    return {
        type: exports.UPDATE_SIGN_GPIO,
        payload: params,
    };
}
exports.dmUpdateSignGpio = dmUpdateSignGpio;
function dmUpdateSignButtonPanelMap(params) {
    return {
        type: exports.UPDATE_SIGN_BPMAP,
        payload: params,
    };
}
exports.dmUpdateSignButtonPanelMap = dmUpdateSignButtonPanelMap;
function dmUpdateSignAudioPropertyMap(params) {
    return {
        type: exports.UPDATE_SIGN_AUDIO_CONFIG,
        payload: params,
    };
}
exports.dmUpdateSignAudioPropertyMap = dmUpdateSignAudioPropertyMap;
function dmOpenSign(newState) {
    return {
        type: exports.OPEN_SIGN,
        payload: { newState: newState },
    };
}
exports.dmOpenSign = dmOpenSign;
function dmVerifyAndOpenSign(newState) {
    return function (dispatch) {
        var action = { type: exports.OPEN_SIGN, payload: { newState: newState } };
        var stateError = index_1.dmCheckForInvalidDmSignState(newState);
        if (stateError) {
            stateError.attachAction(action);
            throw stateError;
        }
        return dispatch(action);
    };
}
exports.dmVerifyAndOpenSign = dmVerifyAndOpenSign;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = __webpack_require__(40);
exports.newBsDmId = function () { return uuid_1.v4(); };
var reValidId = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
exports.isValidBsDmId = function (id) {
    var ret = id.match(reValidId);
    return ret && id === ret[0];
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BsDmIdNone = '0';
exports.BsDmStateVersion = '0.6.1';
exports.DmVideoContentItemDataNameArray = ['volume', 'videoDisplayMode', 'automaticallyLoop'];
exports.DmAudioContentItemDataNameArray = ['volume'];
exports.DmImageContentItemDataNameArray = ['useImageBuffer', 'videoPlayerRequired', 'displayDuration'];
exports.DmHtmlContentItemDataNameArray = [
    'enableExternalData', 'enableMouseEvents', 'displayCursor', 'hwzOn',
    'useUserStylesheet', 'userStylesheetAssetId', 'customFonts', 'displayDuration',
];
exports.DmMrssDataFeedContentItemDataNameArray = ['videoPlayerRequired'];
exports.DmLiveVideoContentItemDataNameArray = ['volume', 'overscan', 'displayDuration'];
exports.DmStreamContentItemDataNameArray = ['volume', 'displayDuration'];
var MediaStateContainerType;
(function (MediaStateContainerType) {
    MediaStateContainerType[MediaStateContainerType["Zone"] = 0] = "Zone";
    MediaStateContainerType[MediaStateContainerType["MediaList"] = 1] = "MediaList";
    MediaStateContainerType[MediaStateContainerType["SuperState"] = 2] = "SuperState";
})(MediaStateContainerType = exports.MediaStateContainerType || (exports.MediaStateContainerType = {}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bscore_1 = __webpack_require__(0);
var bsDmInterfaces_1 = __webpack_require__(4);
var lodash_1 = __webpack_require__(1);
var DmcMediaStateContainer = (function () {
    function DmcMediaStateContainer(id, type) {
        if (type === void 0) { type = bsDmInterfaces_1.MediaStateContainerType.Zone; }
        this.id = id;
        this.type = type;
    }
    return DmcMediaStateContainer;
}());
exports.DmcMediaStateContainer = DmcMediaStateContainer;
var DmcMediaState = (function () {
    function DmcMediaState(mediaStateState, eventStates, mediaAssetItem) {
        var _this = this;
        this.id = mediaStateState.id;
        this.name = mediaStateState.name;
        this.container = Object.assign({}, mediaStateState.container);
        this.contentItem = Object.assign({}, mediaStateState.contentItem);
        this.mediaAssetItem = mediaAssetItem ? Object.assign({}, mediaAssetItem) : null;
        this.eventList = [];
        if (eventStates) {
            eventStates.forEach(function (deNormEventState) {
                _this.eventList.push(new DmcEvent(deNormEventState.eventState, deNormEventState.transitionStates));
            });
        }
    }
    Object.defineProperty(DmcMediaState.prototype, "assetItem", {
        get: function () {
            return this.mediaAssetItem;
        },
        enumerable: true,
        configurable: true
    });
    return DmcMediaState;
}());
exports.DmcMediaState = DmcMediaState;
var DmcEvent = (function () {
    function DmcEvent(eventState, transitionStates) {
        var _this = this;
        this.id = eventState.id;
        this.name = eventState.name;
        this.type = eventState.type;
        this.mediaStateId = eventState.mediaStateId;
        this.data = eventState.data;
        this.transitionList = [];
        if (transitionStates) {
            transitionStates.forEach(function (transitionState) {
                _this.transitionList.push(new DmcTransition(transitionState));
            });
        }
    }
    Object.defineProperty(DmcEvent.prototype, "defaultTransition", {
        get: function () {
            if (this.transitionList && this.transitionList.length > 0) {
                return this.transitionList[this.transitionList.length - 1];
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return DmcEvent;
}());
exports.DmcEvent = DmcEvent;
var DmcTransition = (function () {
    function DmcTransition(state) {
        this.id = state.id;
        this.name = state.name;
        this.eventId = state.eventId;
        this.targetMediaStateId = state.targetMediaStateId;
        this.type = state.type;
        this.duration = state.duration;
        if (state.condition) {
            this.condition = new DmcCondition(state.condition);
        }
        else {
            this.condition = null;
        }
    }
    Object.defineProperty(DmcTransition.prototype, "isDefaultTarget", {
        get: function () {
            return this.condition === null;
        },
        enumerable: true,
        configurable: true
    });
    return DmcTransition;
}());
exports.DmcTransition = DmcTransition;
var DmcCondition = (function () {
    function DmcCondition(state) {
        this.id = state.id;
        this.name = state.name;
        this.userVariable = state.userVariable;
        this.compareOperator = state.compareOperator;
        this.compareValue1 = state.compareValue1;
        this.compareValue2 = state.compareValue2;
    }
    return DmcCondition;
}());
exports.DmcCondition = DmcCondition;
var DmcZone = (function () {
    function DmcZone(state, videoMode) {
        this.id = state.id;
        this.name = state.name;
        this.type = state.type;
        this.tag = state.tag;
        this.nonInteractive = state.nonInteractive;
        this.initialMediaStateId = state.initialMediaStateId;
        this.position = Object.assign({}, state.position);
        this.properties = lodash_1.cloneDeep(state.properties);
        this._videoMode = videoMode;
        this._containerObject = new DmcMediaStateContainer(this.id);
        Object.freeze(this._containerObject);
    }
    Object.defineProperty(DmcZone.prototype, "containerObject", {
        get: function () {
            return this._containerObject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DmcZone.prototype, "absolutePosition", {
        get: function () {
            return this.position.pct ? bscore_1.bscGetAbsoluteRectForVideoMode(this.position, this._videoMode) : this.position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DmcZone.prototype, "percentagePosition", {
        get: function () {
            return this.position.pct ? this.position : bscore_1.bscGetPercentageRectForVideoMode(this.position, this._videoMode);
        },
        enumerable: true,
        configurable: true
    });
    return DmcZone;
}());
exports.DmcZone = DmcZone;
var DmcSignMetadata = (function () {
    function DmcSignMetadata(state) {
        this.id = state.properties.id;
        this.version = state.properties.version;
        this.name = state.properties.name;
        this.videoMode = state.properties.videoMode;
        this.model = state.properties.model;
        this.monitorOrientation = state.properties.monitorOrientation;
        this.monitorOverscan = state.properties.monitorOverscan;
        this.videoConnector = state.properties.videoConnector;
        this.deviceWebPageDisplay = state.properties.deviceWebPageDisplay;
        this.backgroundScreenColor = Object.assign({}, state.properties.backgroundScreenColor);
        this.forceResolution = state.properties.forceResolution;
        this.tenBitColorEnabled = state.properties.tenBitColorEnabled;
        this.htmlEnableJavascriptConsole = state.properties.htmlEnableJavascriptConsole;
        this.alphabetizeVariableNames = state.properties.alphabetizeVariableNames;
        this.autoCreateMediaCounterVariables = state.properties.autoCreateMediaCounterVariables;
        this.resetVariablesOnPresentationStart = state.properties.resetVariablesOnPresentationStart;
        this.networkedVariablesUpdateInterval = state.properties.networkedVariablesUpdateInterval;
        this.delayScheduleChangeUntilMediaEndEvent = state.properties.delayScheduleChangeUntilMediaEndEvent;
        this.language = state.properties.language;
        this.languageKey = state.properties.languageKey;
        this.flipCoordinates = state.properties.flipCoordinates;
        this.isMosaic = state.properties.isMosaic;
        this.inactivityTimeout = state.properties.inactivityTimeout;
        this.inactivityTime = state.properties.inactivityTime;
        this.touchCursorDisplayMode = state.properties.touchCursorDisplayMode;
        this.graphicsZOrder = state.properties.graphicsZOrder;
        this.udpDestinationAddressType = state.properties.udpDestinationAddressType;
        this.udpDestinationAddress = state.properties.udpDestinationAddress;
        this.udpDestinationPort = state.properties.udpDestinationPort;
        this.udpReceiverPort = state.properties.udpReceiverPort;
        this.serialPortConfigurations = lodash_1.cloneDeep(state.serialPortConfigurations);
        this.gpio = state.gpio.slice();
        this.buttonPanels = Object.assign({}, state.buttonPanels);
        this.audioSignPropertyMap = Object.assign({}, state.audioSignPropertyMap);
    }
    return DmcSignMetadata;
}());
exports.DmcSignMetadata = DmcSignMetadata;
var DmcHtmlSite = (function () {
    function DmcHtmlSite(state) {
        this.indexAssetId = bsDmInterfaces_1.BsDmIdNone;
        this.url = null;
        this.brightPlateName = null;
        this.brightPlateDisplayName = null;
        this.id = state.id;
        this.name = state.name;
        this.type = state.type;
        this.queryString = state.queryString;
        switch (state.type) {
            case 'Local':
                this.indexAssetId = state.indexAssetId;
                break;
            case 'Remote':
                this.url = state.url;
                break;
            case 'BrightPlate':
                this.brightPlateName = state.brightPlateName;
                this.brightPlateDisplayName = state.displayName;
                break;
        }
    }
    return DmcHtmlSite;
}());
exports.DmcHtmlSite = DmcHtmlSite;
var DmcDataFeed = (function () {
    function DmcDataFeed(state) {
        this.id = state.id;
        this.name = state.name;
        this.type = state.type;
        this.url = state.url;
        this.usage = state.usage;
        this.updateInterval = state.updateInterval;
        this.useHeadRequest = state.useHeadRequest;
        this.parserPlugin = state.parserPlugin;
        this.autoGenerateUserVariables = state.autoGenerateUserVariables;
        this.userVariableAccess = state.userVariableAccess;
        if (isBsnDataFeed(state)) {
            this.bsnId = state.bsnId;
            this.bsnName = state.bsnName;
            this.supportsAudio = state.supportsAudio;
            this.matchPlayerTags = state.matchPlayerTags;
        }
        else {
            this.bsnId = 0;
            this.bsnName = '';
            this.supportsAudio = false;
            this.matchPlayerTags = false;
        }
    }
    Object.defineProperty(DmcDataFeed.prototype, "isBsnDataFeed", {
        get: function () {
            return this.type !== bscore_1.DataFeedType.URLDataFeed;
        },
        enumerable: true,
        configurable: true
    });
    return DmcDataFeed;
}());
exports.DmcDataFeed = DmcDataFeed;
function isBsnDataFeed(feed) {
    return feed.type !== bscore_1.DataFeedType.URLDataFeed && feed.hasOwnProperty('bsnId') && feed.hasOwnProperty('bsnId');
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(78);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(3);
var bscore_1 = __webpack_require__(0);
var bsDmContentItems_1 = __webpack_require__(12);
var index_1 = __webpack_require__(9);
var actionBase_1 = __webpack_require__(10);
var actionAssetMap_1 = __webpack_require__(17);
var bsDmError_1 = __webpack_require__(8);
exports.ADD_MEDIA_STATE = 'DM_ADD_MEDIA_STATE';
exports.UPDATE_MEDIA_STATE = 'DM_UPDATE_MEDIA_STATE';
exports.DELETE_MEDIA_STATE = 'DM_DELETE_MEDIA_STATE';
exports.dmContentIsAssetItem = function (content) {
    return bscore_1.bscIsAssetItem(content);
};
function dmAddMediaStateWithContentItem(name, container, contentItem) {
    return {
        type: exports.ADD_MEDIA_STATE,
        payload: {
            id: utils_1.newBsDmId(),
            name: name ? name : contentItem.name,
            container: container,
            contentItem: contentItem,
        },
    };
}
exports.dmAddMediaStateWithContentItem = dmAddMediaStateWithContentItem;
function dmAddMediaState(name, container, content, contentData) {
    return function (dispatch, getState) {
        var mainAction = {
            type: exports.ADD_MEDIA_STATE,
            payload: {
                id: utils_1.newBsDmId(),
                name: name,
                container: container,
            },
        };
        var batchedActions = [];
        var dmState = actionBase_1.dmFilterDmState(getState());
        var assetItem;
        var contentItem;
        if (exports.dmContentIsAssetItem(content)) {
            var locator = bscore_1.bscGenerateAssetLocator(content);
            if (!locator) {
                throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'Asset Item does not contain valid locator information', mainAction);
            }
            assetItem = Object.assign({}, content, { locator: locator });
            actionAssetMap_1.dmSetAssetId(dmState, assetItem);
            contentItem = bsDmContentItems_1.dmCreateMediaContentItem(assetItem.name, assetItem.id, assetItem.mediaType);
            var assetAction = actionAssetMap_1.dmPutAssetItemWithoutTest(assetItem);
            batchedActions.push(assetAction);
        }
        else {
            if (bsDmContentItems_1.dmContentItemIsMediaContentItem(content)) {
                mainAction.payload.contentItem = content;
                throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'MediaContentItems must be specified by AssetItem parameters', mainAction);
            }
            contentItem = content;
        }
        var contentItemData = bsDmContentItems_1.dmFilterContentItemData(contentItem.type, contentData);
        if (contentItemData) {
            contentItem = Object.assign({}, contentItem, contentItemData);
        }
        if (!mainAction.payload.name) {
            mainAction.payload.name = contentItem.name;
        }
        var zoneType = index_1.dmGetZoneTypeById(dmState, { id: container.id });
        if (!bsDmContentItems_1.dmIsValidContentItemForZone(contentItem, zoneType)) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'Content item type "' + contentItem.type + '" cannot be added to "' + zoneType + '" zone', mainAction);
        }
        mainAction.payload.contentItem = contentItem;
        batchedActions.push(mainAction);
        dispatch(actionBase_1.dmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.dmAddMediaState = dmAddMediaState;
function dmUpdateMediaState(params) {
    return {
        type: exports.UPDATE_MEDIA_STATE,
        payload: params,
    };
}
exports.dmUpdateMediaState = dmUpdateMediaState;
function dmGetMediaStateDeleteParams(state, id) {
    var deleteParams = {
        mediaStateIds: Array.isArray(id) ? id : [id],
        eventIds: [],
        transitionIds: [],
    };
    deleteParams.mediaStateIds.forEach(function (mediaStateId) {
        var mediaStateEventIds = index_1.dmGetEventIdsForMediaState(state, { id: mediaStateId });
        if (mediaStateEventIds) {
            (_a = deleteParams.eventIds).splice.apply(_a, [0, 0].concat(mediaStateEventIds));
        }
        var _a;
    });
    deleteParams.eventIds.forEach(function (eventId) {
        var eventTransitionIds = index_1.dmGetTransitionIdsForEvent(state, { id: eventId });
        if (eventTransitionIds) {
            (_a = deleteParams.transitionIds).splice.apply(_a, [0, 0].concat(eventTransitionIds));
        }
        var _a;
    });
    return deleteParams;
}
exports.dmGetMediaStateDeleteParams = dmGetMediaStateDeleteParams;
function dmDeleteMediaStateWithParams(params) {
    return {
        type: exports.DELETE_MEDIA_STATE,
        payload: params,
    };
}
exports.dmDeleteMediaStateWithParams = dmDeleteMediaStateWithParams;
function dmDeleteMediaState(id) {
    return function (dispatch, getState) {
        var dmState = actionBase_1.dmFilterDmState(getState());
        var stateIds = typeof id === 'string' ? [id] : id;
        var assetIds = [];
        stateIds.forEach(function (assetId) {
            var mediaStateState = index_1.dmGetMediaStateStateById(dmState, { id: assetId });
            if (mediaStateState && bsDmContentItems_1.dmContentItemIsMediaContentItem(mediaStateState.contentItem)) {
                assetIds.push(mediaStateState.contentItem.assetId);
            }
        });
        var deleteParams = dmGetMediaStateDeleteParams(actionBase_1.dmFilterDmState(getState()), id);
        var batchedActions = [];
        if (assetIds.length > 0) {
            batchedActions.push(actionAssetMap_1.dmRemoveAssetItems(assetIds));
        }
        var mainAction = dmDeleteMediaStateWithParams(deleteParams);
        batchedActions.push(mainAction);
        dispatch(actionBase_1.dmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.dmDeleteMediaState = dmDeleteMediaState;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DmErrorType;
(function (DmErrorType) {
    DmErrorType[DmErrorType["unknownError"] = 0] = "unknownError";
    DmErrorType[DmErrorType["unexpectedError"] = 1] = "unexpectedError";
    DmErrorType[DmErrorType["invalidParameters"] = 2] = "invalidParameters";
    DmErrorType[DmErrorType["invalidOperation"] = 3] = "invalidOperation";
    DmErrorType[DmErrorType["apiError"] = 4] = "apiError";
    DmErrorType[DmErrorType["invalidSign"] = 5] = "invalidSign";
})(DmErrorType = exports.DmErrorType || (exports.DmErrorType = {}));
var bsnErrorMessage = (_a = {},
    _a[DmErrorType.unknownError] = 'Unknown error',
    _a[DmErrorType.unexpectedError] = 'Unexpected error',
    _a[DmErrorType.invalidParameters] = 'Invalid parameters',
    _a[DmErrorType.invalidOperation] = 'Invalid operation attempt',
    _a[DmErrorType.apiError] = 'API error',
    _a[DmErrorType.invalidSign] = 'Invalid presentation',
    _a);
var BsDmError = (function (_super) {
    __extends(BsDmError, _super);
    function BsDmError(type, reason, action) {
        var _this = _super.call(this) || this;
        _this.name = 'BsDmError';
        _this.type = type;
        if (reason) {
            _this.message = bsnErrorMessage[type] + ': ' + reason;
        }
        else {
            _this.message = bsnErrorMessage[type];
        }
        if (action) {
            _this.action = Object.assign({}, action, { error: true, meta: { reason: _this.message } });
        }
        Object.setPrototypeOf(_this, BsDmError.prototype);
        return _this;
    }
    BsDmError.prototype.attachAction = function (action) {
        this.action = Object.assign({}, action, { error: true, meta: { reason: this.message } });
    };
    return BsDmError;
}(Error));
exports.BsDmError = BsDmError;
function dmIsBsDmError(error) {
    return error instanceof BsDmError;
}
exports.dmIsBsDmError = dmIsBsDmError;
var _a;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(19);
var bsDmError_1 = __webpack_require__(8);
var reducerSign_1 = __webpack_require__(25);
var reducerZone_1 = __webpack_require__(26);
var reducerMediaState_1 = __webpack_require__(24);
var reducerEvent_1 = __webpack_require__(23);
var reducerTransition_1 = __webpack_require__(36);
var reducerHtmlSite_1 = __webpack_require__(35);
var reducerDataFeed_1 = __webpack_require__(34);
var reducerUserVariable_1 = __webpack_require__(37);
var reducerAssetMap_1 = __webpack_require__(33);
var actionBase_1 = __webpack_require__(10);
function enableBatching(reduce) {
    return function batchingReducer(state, action) {
        switch (action.type) {
            case actionBase_1.BSDM_BATCH:
                return action.payload.reduce(batchingReducer, state);
            default:
                return reduce(state, action);
        }
    };
}
exports.bsDmReducer = enableBatching(redux_1.combineReducers({
    sign: reducerSign_1.default,
    zones: reducerZone_1.default,
    mediaStates: reducerMediaState_1.default,
    events: reducerEvent_1.default,
    transitions: reducerTransition_1.default,
    htmlSites: reducerHtmlSite_1.default,
    dataFeeds: reducerDataFeed_1.default,
    userVariables: reducerUserVariable_1.default,
    assetMap: reducerAssetMap_1.default,
}));
function dmGetSignState(state) {
    return state;
}
exports.dmGetSignState = dmGetSignState;
function dmGetSignMetaData(state) {
    return reducerSign_1.getSignMetadata(state.sign);
}
exports.dmGetSignMetaData = dmGetSignMetaData;
function dmGetSignId(state) {
    return reducerSign_1.getSignId(state.sign);
}
exports.dmGetSignId = dmGetSignId;
function dmGetSignName(state) {
    return reducerSign_1.getSignName(state.sign);
}
exports.dmGetSignName = dmGetSignName;
function dmGetSignVideoMode(state) {
    return reducerSign_1.getSignVideoMode(state.sign);
}
exports.dmGetSignVideoMode = dmGetSignVideoMode;
function dmGetSignPlayerModel(state) {
    return reducerSign_1.getSignPlayerModel(state.sign);
}
exports.dmGetSignPlayerModel = dmGetSignPlayerModel;
function dmGetSignSerialPortConfigurations(state) {
    return reducerSign_1.getSignSerialPortConfigurations(state.sign);
}
exports.dmGetSignSerialPortConfigurations = dmGetSignSerialPortConfigurations;
function dmGetSignGpioList(state) {
    return reducerSign_1.getSignGpioList(state.sign);
}
exports.dmGetSignGpioList = dmGetSignGpioList;
function dmGetSignButtonPanelMap(state) {
    return reducerSign_1.getSignButtonPanelMap(state.sign);
}
exports.dmGetSignButtonPanelMap = dmGetSignButtonPanelMap;
function dmGetSignAudioPropertyMap(state) {
    return reducerSign_1.getSignAudioPropertyMap(state.sign);
}
exports.dmGetSignAudioPropertyMap = dmGetSignAudioPropertyMap;
function dmGetZoneById(state, props) {
    return reducerZone_1.getZoneById(state, props);
}
exports.dmGetZoneById = dmGetZoneById;
function dmGetZoneByName(state, props) {
    return reducerZone_1.getZoneByName(state, props);
}
exports.dmGetZoneByName = dmGetZoneByName;
function dmGetZoneByTag(state, props) {
    return reducerZone_1.getZoneByTag(state, props);
}
exports.dmGetZoneByTag = dmGetZoneByTag;
function dmGetZoneTypeById(state, props) {
    return reducerZone_1.getZoneTypeById(state.zones, props);
}
exports.dmGetZoneTypeById = dmGetZoneTypeById;
function dmGetZonePropertiesById(state, props) {
    return reducerZone_1.getZonePropertiesById(state.zones, props);
}
exports.dmGetZonePropertiesById = dmGetZonePropertiesById;
function dmGetZonePropertiesByName(state, props) {
    return reducerZone_1.getZonePropertiesByName(state.zones, props);
}
exports.dmGetZonePropertiesByName = dmGetZonePropertiesByName;
function dmGetZonePropertiesByTag(state, props) {
    return reducerZone_1.getZonePropertiesByTag(state.zones, props);
}
exports.dmGetZonePropertiesByTag = dmGetZonePropertiesByTag;
function dmGetZonesForSign(state) { return reducerZone_1.getZonesForSign(state.zones); }
exports.dmGetZonesForSign = dmGetZonesForSign;
function dmGetZoneCount(state) { return reducerZone_1.getZoneCount(state.zones); }
exports.dmGetZoneCount = dmGetZoneCount;
function dmGetZoneIdsForZoneType(state, props) {
    return reducerZone_1.getZoneIdsForZoneType(state.zones, props);
}
exports.dmGetZoneIdsForZoneType = dmGetZoneIdsForZoneType;
function dmGetZoneTagMap(state) { return reducerZone_1.getZoneTagMap(state.zones); }
exports.dmGetZoneTagMap = dmGetZoneTagMap;
function dmGetMediaStateStateById(state, props) {
    return reducerMediaState_1.getMediaStateStateById(state.mediaStates, props);
}
exports.dmGetMediaStateStateById = dmGetMediaStateStateById;
function dmGetMediaStateStateByName(state, props) {
    return reducerMediaState_1.getMediaStateStateByName(state.mediaStates, props);
}
exports.dmGetMediaStateStateByName = dmGetMediaStateStateByName;
function dmGetMediaStateIdsForZone(state, props) {
    return reducerMediaState_1.getMediaStateIdsForZone(state.mediaStates, props);
}
exports.dmGetMediaStateIdsForZone = dmGetMediaStateIdsForZone;
function dmGetContentItemTypeForMediaStateId(state, props) {
    return reducerMediaState_1.getContentItemTypeForMediaStateId(state.mediaStates, props);
}
exports.dmGetContentItemTypeForMediaStateId = dmGetContentItemTypeForMediaStateId;
function dmGetEventStateById(state, props) {
    return reducerEvent_1.getEventStateById(state.events, props);
}
exports.dmGetEventStateById = dmGetEventStateById;
function dmGetEventIdsForMediaState(state, props) {
    return reducerEvent_1.getEventIdsForMediaState(state.events, props);
}
exports.dmGetEventIdsForMediaState = dmGetEventIdsForMediaState;
function dmGetTransitionStateById(state, props) {
    return reducerTransition_1.getTransitionStateById(state.transitions, props);
}
exports.dmGetTransitionStateById = dmGetTransitionStateById;
function dmGetTransitionById(state, props) {
    return reducerTransition_1.getTransitionById(state.transitions, props);
}
exports.dmGetTransitionById = dmGetTransitionById;
function dmGetTransitionIdsForEvent(state, props) {
    return reducerTransition_1.getTransitionIdsForEvent(state.transitions, props);
}
exports.dmGetTransitionIdsForEvent = dmGetTransitionIdsForEvent;
function dmGetHtmlSiteById(state, props) {
    return reducerHtmlSite_1.getHtmlSiteById(state.htmlSites, props);
}
exports.dmGetHtmlSiteById = dmGetHtmlSiteById;
function dmGetHtmlSiteIdsForSign(state) {
    return reducerHtmlSite_1.getHtmlSiteIdsForSign(state.htmlSites);
}
exports.dmGetHtmlSiteIdsForSign = dmGetHtmlSiteIdsForSign;
function dmGetHtmlSiteByName(state, props) {
    return reducerHtmlSite_1.getHtmlSiteByName(state.htmlSites, props);
}
exports.dmGetHtmlSiteByName = dmGetHtmlSiteByName;
function dmGetDataFeedById(state, props) {
    return reducerDataFeed_1.getDataFeedById(state.dataFeeds, props);
}
exports.dmGetDataFeedById = dmGetDataFeedById;
function dmGetDataFeedIdsForSign(state) {
    return reducerDataFeed_1.getDataFeedIdsForSign(state.dataFeeds);
}
exports.dmGetDataFeedIdsForSign = dmGetDataFeedIdsForSign;
function dmGetDataFeedNamesForSign(state) {
    return reducerDataFeed_1.getDataFeedNamesForSign(state.dataFeeds);
}
exports.dmGetDataFeedNamesForSign = dmGetDataFeedNamesForSign;
function dmGetDataFeedByName(state, props) {
    return reducerDataFeed_1.getDataFeedByName(state.dataFeeds, props);
}
exports.dmGetDataFeedByName = dmGetDataFeedByName;
function dmGetUserVariableById(state, props) {
    return reducerUserVariable_1.getUserVariableById(state.userVariables, props);
}
exports.dmGetUserVariableById = dmGetUserVariableById;
function dmGetUserVariableIdsForSign(state) {
    return reducerUserVariable_1.getUserVariableIdsForSign(state.userVariables);
}
exports.dmGetUserVariableIdsForSign = dmGetUserVariableIdsForSign;
function dmGetUserVariableByName(state, props) {
    return reducerUserVariable_1.getUserVariableByName(state.userVariables, props);
}
exports.dmGetUserVariableByName = dmGetUserVariableByName;
function dmGetAssetItemById(state, props) {
    return reducerAssetMap_1.getAssetItemById(state.assetMap, props);
}
exports.dmGetAssetItemById = dmGetAssetItemById;
function dmGetAssetIdByLocator(state, props) {
    return reducerAssetMap_1.getAssetIdByLocator(state.assetMap, props);
}
exports.dmGetAssetIdByLocator = dmGetAssetIdByLocator;
function dmGetAssetItemByLocator(state, props) {
    return reducerAssetMap_1.getAssetItemByLocator(state.assetMap, props);
}
exports.dmGetAssetItemByLocator = dmGetAssetItemByLocator;
function dmGetAssetItemIdsForSign(state) {
    return reducerAssetMap_1.getAssetItemIdsForSign(state.assetMap);
}
exports.dmGetAssetItemIdsForSign = dmGetAssetItemIdsForSign;
function dmCheckForInvalidDmSignState(state) {
    if (typeof state === 'object'
        && state.hasOwnProperty('sign')
        && reducerSign_1.isValidSignState(state.sign)
        && state.hasOwnProperty('zones')
        && reducerZone_1.isValidZoneState(state.zones)
        && state.hasOwnProperty('mediaStates')
        && reducerMediaState_1.isValidMediaStateState(state.mediaStates)
        && state.hasOwnProperty('events')
        && reducerEvent_1.isValidEventState(state.events)
        && state.hasOwnProperty('transitions')
        && reducerTransition_1.isValidTransitionState(state.transitions)
        && state.hasOwnProperty('assetMap')
        && reducerAssetMap_1.isValidAssetMapState(state.assetMap)) {
        return null;
    }
    else {
        return new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidSign, 'DmState structure is invalid');
    }
}
exports.dmCheckForInvalidDmSignState = dmCheckForInvalidDmSignState;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BSDM_BATCH = 'BSDM_BATCH';
function dmBatchActions(actions) {
    return { type: exports.BSDM_BATCH, payload: actions };
}
exports.dmBatchActions = dmBatchActions;
function dmFilterDmState(state) {
    if (state.hasOwnProperty('bsdm')) {
        return state.bsdm;
    }
    else if (state.hasOwnProperty('bsdatamodel')) {
        return state.bsdatamodel;
    }
    return state;
}
exports.dmFilterDmState = dmFilterDmState;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(3);
var bscore_1 = __webpack_require__(0);
var bsDmError_1 = __webpack_require__(8);
var index_1 = __webpack_require__(9);
var index_2 = __webpack_require__(16);
var reducerZone_1 = __webpack_require__(26);
var actionBase_1 = __webpack_require__(10);
var actionMediaState_1 = __webpack_require__(7);
var lodash_1 = __webpack_require__(1);
exports.ADD_ZONE = 'DM_ADD_ZONE';
exports.UPDATE_ZONE = 'DM_UPDATE_ZONE';
exports.UPDATE_ZONE_PROPS = 'DM_UPDATE_ZONE_PROPS';
exports.DELETE_ZONE = 'DM_DELETE_ZONE';
function dmAddZone(name, type, tag, position, nonInteractive) {
    if (position === void 0) { position = { x: 0, y: 0, width: 100, height: 100, pct: true }; }
    if (nonInteractive === void 0) { nonInteractive = true; }
    return {
        type: exports.ADD_ZONE,
        payload: {
            id: utils_1.newBsDmId(),
            name: name,
            type: type,
            tag: tag,
            position: position,
            nonInteractive: nonInteractive,
        },
    };
}
exports.dmAddZone = dmAddZone;
exports.dmUpdateZoneWithoutTest = function (params) { return ({
    type: exports.UPDATE_ZONE,
    payload: params,
}); };
function dmUpdateZone(params) {
    return function (dispatch, getState) {
        var action = { type: exports.UPDATE_ZONE, payload: params };
        var state = actionBase_1.dmFilterDmState(getState());
        if (params.initialMediaStateId) {
            var mediaStates = index_1.dmGetMediaStateIdsForZone(state, { id: params.id });
            if (mediaStates.indexOf(params.initialMediaStateId) < 0) {
                throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'Invalid initial media state', action);
            }
        }
        if (action.payload.hasOwnProperty('properties')) {
            action.payload = lodash_1.omit(action.payload, 'properties');
        }
        if (params.type) {
            var zoneType = index_1.dmGetZoneTypeById(state, { id: params.id });
            if (zoneType !== params.type) {
                if (!index_2.dmCanChangeZoneType(state, { id: params.id, type: params.type })) {
                    throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'Zone contains media states not allowed in requested zone type', action);
                }
                var newZoneProperties = reducerZone_1.createDefaultZoneProperties(params.type);
                var previousZoneProperties = state.zones.zonesById[params.id].properties;
                var carryOverProperties = lodash_1.pick(previousZoneProperties, Object.keys(newZoneProperties));
                newZoneProperties = Object.assign(newZoneProperties, carryOverProperties);
                action.payload = Object.assign(params, { properties: newZoneProperties });
            }
        }
        return dispatch(action);
    };
}
exports.dmUpdateZone = dmUpdateZone;
function dmUpdateZoneProperties(params) {
    return function (dispatch, getState) {
        var action = { type: exports.UPDATE_ZONE_PROPS, payload: params };
        var zoneType = index_1.dmGetZoneTypeById(actionBase_1.dmFilterDmState(getState()), { id: params.id });
        if (params.type !== zoneType) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'Properties are specified for a "' + params.type + '"zone, but this zone is a "'
                + zoneType + '" zone', action);
        }
        else if (zoneType === bscore_1.ZoneType.BackgroundImage) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'BackgroundImage zone has no properties', action);
        }
        return dispatch(action);
    };
}
exports.dmUpdateZoneProperties = dmUpdateZoneProperties;
function dmDeleteZoneWithParams(params) {
    return {
        type: exports.DELETE_ZONE,
        payload: params,
    };
}
exports.dmDeleteZoneWithParams = dmDeleteZoneWithParams;
function dmDeleteZone(id) {
    return function (dispatch, getState) {
        var mediaStateIds = index_1.dmGetMediaStateIdsForZone(actionBase_1.dmFilterDmState(getState()), { id: id });
        var mediaStateDeleteParams = actionMediaState_1.dmGetMediaStateDeleteParams(actionBase_1.dmFilterDmState(getState()), mediaStateIds);
        var zoneDeleteParams = Object.assign({ zoneId: id }, mediaStateDeleteParams);
        return dispatch(dmDeleteZoneWithParams(zoneDeleteParams));
    };
}
exports.dmDeleteZone = dmDeleteZone;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bscore_1 = __webpack_require__(0);
var bsDmInterfaces_1 = __webpack_require__(4);
var bsDmParameterizedStrings_1 = __webpack_require__(14);
var bsDmDefaults_1 = __webpack_require__(13);
var lodash_1 = __webpack_require__(1);
function dmGetZoneMediaStateContainer(zoneId) {
    return {
        id: zoneId,
        type: bsDmInterfaces_1.MediaStateContainerType.Zone,
    };
}
exports.dmGetZoneMediaStateContainer = dmGetZoneMediaStateContainer;
function dmCreateAssetItemFromLocalFile(fullPath, id, mediaType) {
    if (id === void 0) { id = ''; }
    if (mediaType === void 0) { mediaType = null; }
    var name = fullPath.replace(/^.*[\\\/]/, '');
    var path = fullPath.substr(0, fullPath.length - name.length);
    return {
        id: id,
        name: name,
        path: path,
        networkId: 0,
        location: bscore_1.AssetLocation.Local,
        locator: bscore_1.bscGetLocalAssetLocator(fullPath),
        assetType: bscore_1.AssetType.Content,
        mediaType: mediaType ? mediaType : bscore_1.bscGetFileMediaType(name),
    };
}
exports.dmCreateAssetItemFromLocalFile = dmCreateAssetItemFromLocalFile;
function dmCreateMediaContentItem(name, assetId, mediaType) {
    switch (mediaType) {
        case bscore_1.MediaType.Video:
            return dmCreateVideoContentItem(name, assetId);
        case bscore_1.MediaType.Audio:
            return dmCreateAudioContentItem(name, assetId);
        case bscore_1.MediaType.Image:
            return dmCreateImageContentItem(name, assetId);
        case bscore_1.MediaType.Text:
            return {
                name: name,
                type: bscore_1.ContentItemType.Text,
                assetId: assetId,
            };
        default:
            return undefined;
    }
}
exports.dmCreateMediaContentItem = dmCreateMediaContentItem;
function dmContentItemIsMediaContentItem(contentItem) {
    return contentItem.hasOwnProperty('assetId');
}
exports.dmContentItemIsMediaContentItem = dmContentItemIsMediaContentItem;
function dmCreateVideoContentItem(name, assetId, volume, videoDisplayMode, automaticallyLoop) {
    var defaults = bsDmDefaults_1.dmGetDefaultVideoContentItemData();
    return {
        name: name,
        type: bscore_1.ContentItemType.Video,
        assetId: assetId,
        volume: (volume === undefined ? defaults.volume : volume),
        videoDisplayMode: (videoDisplayMode === undefined ? defaults.videoDisplayMode : videoDisplayMode),
        automaticallyLoop: (automaticallyLoop === undefined ? defaults.automaticallyLoop : automaticallyLoop),
    };
}
exports.dmCreateVideoContentItem = dmCreateVideoContentItem;
function dmCreateAudioContentItem(name, assetId, volume) {
    var defaults = bsDmDefaults_1.dmGetDefaultAudioContentItemData();
    return {
        name: name,
        type: bscore_1.ContentItemType.Audio,
        assetId: assetId,
        volume: (volume === undefined ? defaults.volume : volume),
    };
}
exports.dmCreateAudioContentItem = dmCreateAudioContentItem;
function dmCreateImageContentItem(name, assetId, useImageBuffer, videoPlayerRequired) {
    var defaults = bsDmDefaults_1.dmGetDefaultImageContentItemData();
    return {
        name: name,
        type: bscore_1.ContentItemType.Image,
        assetId: assetId,
        useImageBuffer: (useImageBuffer === undefined ? defaults.useImageBuffer : useImageBuffer),
        videoPlayerRequired: (videoPlayerRequired === undefined ? defaults.videoPlayerRequired : videoPlayerRequired),
    };
}
exports.dmCreateImageContentItem = dmCreateImageContentItem;
function dmCreateHtmlContentItem(name, siteId, enableExternalData, enableMouseEvents, displayCursor, hwzOn, useUserStylesheet, userStylesheetAssetId, customFonts) {
    var defaults = bsDmDefaults_1.dmGetDefaultHtmlContentItemData();
    var contentItemData = {
        enableExternalData: (enableExternalData === undefined ? defaults.enableExternalData : enableExternalData),
        enableMouseEvents: (enableMouseEvents === undefined ? defaults.enableMouseEvents : enableMouseEvents),
        displayCursor: (displayCursor === undefined ? defaults.displayCursor : displayCursor),
        hwzOn: (hwzOn === undefined ? defaults.hwzOn : hwzOn),
        useUserStylesheet: (userStylesheetAssetId === undefined ? defaults.useUserStylesheet : useUserStylesheet),
    };
    if (contentItemData.useUserStylesheet) {
        if (userStylesheetAssetId === undefined) {
            userStylesheetAssetId = defaults.userStylesheetAssetId;
        }
        if (userStylesheetAssetId !== undefined) {
            contentItemData.userStylesheetAssetId = userStylesheetAssetId;
        }
        else {
            contentItemData.useUserStylesheet = false;
        }
    }
    if (customFonts !== undefined) {
        contentItemData.customFonts = customFonts;
    }
    return Object.assign({ name: name, type: bscore_1.ContentItemType.Html, siteId: siteId }, contentItemData);
}
exports.dmCreateHtmlContentItem = dmCreateHtmlContentItem;
function dmCreateLiveVideoContentItem(name, volume, overscan) {
    var defaults = bsDmDefaults_1.dmGetDefaultLiveVideoContentItemData();
    return {
        name: name,
        type: bscore_1.ContentItemType.LiveVideo,
        volume: (volume === undefined ? defaults.volume : volume),
        overscan: (overscan === undefined ? defaults.overscan : overscan),
    };
}
exports.dmCreateLiveVideoContentItem = dmCreateLiveVideoContentItem;
function dmCreateDataFeedContentItem(name, dataFeedId) {
    return {
        name: name,
        type: bscore_1.ContentItemType.DataFeed,
        dataFeedId: dataFeedId,
    };
}
exports.dmCreateDataFeedContentItem = dmCreateDataFeedContentItem;
function dmCreateMrssDataFeedContentItem(name, dataFeedId, videoPlayerRequired) {
    var defaults = bsDmDefaults_1.dmGetDefaultMrssDataFeedContentItemData();
    return {
        name: name,
        type: bscore_1.ContentItemType.MrssFeed,
        dataFeedId: dataFeedId,
        videoPlayerRequired: (videoPlayerRequired === undefined ? defaults.videoPlayerRequired : videoPlayerRequired),
    };
}
exports.dmCreateMrssDataFeedContentItem = dmCreateMrssDataFeedContentItem;
function dmCreateVideoStreamContentItem(name, url, volume) {
    var defaults = bsDmDefaults_1.dmGetDefaultVideoStreamContentItemData();
    return {
        name: name,
        type: bscore_1.ContentItemType.VideoStream,
        url: bsDmParameterizedStrings_1.dmResolveDmParameterizedString(url),
        volume: (volume === undefined ? defaults.volume : volume),
    };
}
exports.dmCreateVideoStreamContentItem = dmCreateVideoStreamContentItem;
function dmCreateAudioStreamContentItem(name, url, volume) {
    var defaults = bsDmDefaults_1.dmGetDefaultAudioStreamContentItemData();
    return {
        name: name,
        type: bscore_1.ContentItemType.AudioStream,
        url: bsDmParameterizedStrings_1.dmResolveDmParameterizedString(url),
        volume: (volume === undefined ? defaults.volume : volume),
    };
}
exports.dmCreateAudioStreamContentItem = dmCreateAudioStreamContentItem;
var VideoOrImagesZoneContentTypeArray = [
    bscore_1.ContentItemType.Video, bscore_1.ContentItemType.Image, bscore_1.ContentItemType.Audio,
    bscore_1.ContentItemType.Html, bscore_1.ContentItemType.MrssFeed, bscore_1.ContentItemType.LiveVideo,
    bscore_1.ContentItemType.VideoStream, bscore_1.ContentItemType.AudioStream,
];
var VideoOrImagesZoneContentTypes = new Set(VideoOrImagesZoneContentTypeArray);
var VideoOnlyZoneContentTypeArray = [
    bscore_1.ContentItemType.Video, bscore_1.ContentItemType.LiveVideo,
    bscore_1.ContentItemType.VideoStream, bscore_1.ContentItemType.AudioStream,
];
var VideoOnlyZoneContentTypes = new Set(VideoOnlyZoneContentTypeArray);
var ImagesZoneContentTypeArray = [
    bscore_1.ContentItemType.Image, bscore_1.ContentItemType.Html, bscore_1.ContentItemType.MrssFeed,
];
var ImagesZoneContentTypes = new Set(ImagesZoneContentTypeArray);
var AudioZoneContentTypeArray = [
    bscore_1.ContentItemType.Audio, bscore_1.ContentItemType.AudioStream,
];
var AudioZoneContentTypes = new Set(AudioZoneContentTypeArray);
var TickerZoneContentTypeArray = [
    bscore_1.ContentItemType.Text, bscore_1.ContentItemType.DataFeed,
];
var TickerZoneContentTypes = new Set(TickerZoneContentTypeArray);
function dmIsValidContentItemForZone(contentItem, zoneType) {
    return dmIsValidContentItemTypeForZone(contentItem.type, zoneType);
}
exports.dmIsValidContentItemForZone = dmIsValidContentItemForZone;
function dmIsValidContentItemTypeForZone(contentItemType, zoneType) {
    switch (zoneType) {
        case bscore_1.ZoneType.VideoOrImages:
            return VideoOrImagesZoneContentTypes.has(contentItemType);
        case bscore_1.ZoneType.VideoOnly:
            return VideoOnlyZoneContentTypes.has(contentItemType);
        case bscore_1.ZoneType.Images:
            return ImagesZoneContentTypes.has(contentItemType);
        case bscore_1.ZoneType.AudioOnly:
        case bscore_1.ZoneType.EnhancedAudio:
            return AudioZoneContentTypes.has(contentItemType);
        case bscore_1.ZoneType.Ticker:
            return TickerZoneContentTypes.has(contentItemType);
        case bscore_1.ZoneType.Clock:
            return false;
        case bscore_1.ZoneType.BackgroundImage:
            return contentItemType === bscore_1.ContentItemType.Image;
    }
    return false;
}
exports.dmIsValidContentItemTypeForZone = dmIsValidContentItemTypeForZone;
var VideoOrImagesPlaylistContentTypeArray = [
    bscore_1.ContentItemType.Video, bscore_1.ContentItemType.Image, bscore_1.ContentItemType.Audio,
    bscore_1.ContentItemType.Html, bscore_1.ContentItemType.MrssFeed, bscore_1.ContentItemType.LiveVideo,
    bscore_1.ContentItemType.VideoStream, bscore_1.ContentItemType.AudioStream,
];
var VideoOrImagesPlaylistContentTypes = new Set(VideoOrImagesPlaylistContentTypeArray);
var VideoOnlyPlaylistContentTypeArray = [
    bscore_1.ContentItemType.Video, bscore_1.ContentItemType.LiveVideo,
    bscore_1.ContentItemType.VideoStream, bscore_1.ContentItemType.AudioStream,
];
var VideoOnlyPlaylistContentTypes = new Set(VideoOnlyPlaylistContentTypeArray);
var ImagesPlaylistContentTypeArray = [
    bscore_1.ContentItemType.Image, bscore_1.ContentItemType.Html, bscore_1.ContentItemType.MrssFeed,
];
var ImagesPlaylistContentTypes = new Set(ImagesPlaylistContentTypeArray);
var AudioPlaylistContentTypeArray = [
    bscore_1.ContentItemType.Audio, bscore_1.ContentItemType.AudioStream,
];
var AudioPlaylistContentTypes = new Set(AudioPlaylistContentTypeArray);
var TickerPlaylistContentTypeArray = [
    bscore_1.ContentItemType.Text, bscore_1.ContentItemType.DataFeed,
];
var TickerPlaylistContentTypes = new Set(TickerPlaylistContentTypeArray);
function dmIsValidContentItemForPlaylist(contentItem, zoneType) {
    return dmIsValidContentItemTypeForPlaylist(contentItem.type, zoneType);
}
exports.dmIsValidContentItemForPlaylist = dmIsValidContentItemForPlaylist;
function dmIsValidContentItemTypeForPlaylist(contentItemType, zoneType) {
    switch (zoneType) {
        case bscore_1.ZoneType.VideoOrImages:
            return VideoOrImagesPlaylistContentTypes.has(contentItemType);
        case bscore_1.ZoneType.VideoOnly:
            return VideoOnlyPlaylistContentTypes.has(contentItemType);
        case bscore_1.ZoneType.Images:
            return ImagesPlaylistContentTypes.has(contentItemType);
        case bscore_1.ZoneType.AudioOnly:
        case bscore_1.ZoneType.EnhancedAudio:
            return AudioPlaylistContentTypes.has(contentItemType);
        case bscore_1.ZoneType.Ticker:
            return TickerPlaylistContentTypes.has(contentItemType);
        case bscore_1.ZoneType.Clock:
            return false;
        case bscore_1.ZoneType.BackgroundImage:
            return contentItemType === bscore_1.ContentItemType.Image;
    }
    return false;
}
exports.dmIsValidContentItemTypeForPlaylist = dmIsValidContentItemTypeForPlaylist;
function dmFilterContentItemData(contentItemType, contentItemData) {
    if (contentItemData) {
        switch (contentItemType) {
            case bscore_1.ContentItemType.Video:
                return lodash_1.pick(contentItemData, bsDmInterfaces_1.DmVideoContentItemDataNameArray);
            case bscore_1.ContentItemType.Image:
                return lodash_1.pick(contentItemData, bsDmInterfaces_1.DmImageContentItemDataNameArray);
            case bscore_1.ContentItemType.Audio:
                return lodash_1.pick(contentItemData, bsDmInterfaces_1.DmAudioContentItemDataNameArray);
            case bscore_1.ContentItemType.Html:
                return lodash_1.pick(contentItemData, bsDmInterfaces_1.DmHtmlContentItemDataNameArray);
            case bscore_1.ContentItemType.LiveVideo:
                return lodash_1.pick(contentItemData, bsDmInterfaces_1.DmLiveVideoContentItemDataNameArray);
            case bscore_1.ContentItemType.MrssFeed:
                return lodash_1.pick(contentItemData, bsDmInterfaces_1.DmMrssDataFeedContentItemDataNameArray);
            case bscore_1.ContentItemType.VideoStream:
            case bscore_1.ContentItemType.AudioStream:
                return lodash_1.pick(contentItemData, bsDmInterfaces_1.DmStreamContentItemDataNameArray);
        }
    }
    return null;
}
exports.dmFilterContentItemData = dmFilterContentItemData;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bscore_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(1);
function dmSetDefaultPropertyValues(defaults) {
    DmInternal.defaults.merge(defaults);
}
exports.dmSetDefaultPropertyValues = dmSetDefaultPropertyValues;
function dmResetDefaultPropertyValues() {
    DmInternal.defaults.reset();
}
exports.dmResetDefaultPropertyValues = dmResetDefaultPropertyValues;
function dmGetDefaultPropertyValues() {
    return DmInternal.defaults.allDefaults;
}
exports.dmGetDefaultPropertyValues = dmGetDefaultPropertyValues;
exports.initialSignPropertyDefaults = {
    videoMode: bscore_1.VideoMode.v1920x1080x60p,
    model: bscore_1.PlayerModel.XT1143,
    monitorOrientation: bscore_1.MonitorOrientationType.Landscape,
    monitorOverscan: bscore_1.MonitorOverscanType.NoOverscan,
    videoConnector: bscore_1.VideoConnectorType.Hdmi,
    deviceWebPageDisplay: bscore_1.DeviceWebPageDisplay.Standard,
    backgroundScreenColor: { a: 255, r: 0, g: 0, b: 0 },
    forceResolution: false,
    tenBitColorEnabled: false,
    htmlEnableJavascriptConsole: false,
    alphabetizeVariableNames: false,
    autoCreateMediaCounterVariables: false,
    resetVariablesOnPresentationStart: false,
    networkedVariablesUpdateInterval: 300,
    delayScheduleChangeUntilMediaEndEvent: false,
    language: bscore_1.LanguageType.English,
    languageKey: bscore_1.LanguageKeyType.English,
    flipCoordinates: false,
    isMosaic: false,
    inactivityTimeout: false,
    inactivityTime: 30,
    touchCursorDisplayMode: bscore_1.TouchCursorDisplayModeType.Auto,
    graphicsZOrder: bscore_1.GraphicsZOrderType.Back,
    udpDestinationAddressType: bscore_1.UdpAddressType.IPAddress,
    udpDestinationAddress: '255.255.255.255',
    udpDestinationPort: 5000,
    udpReceiverPort: 5000,
};
Object.freeze(exports.initialSignPropertyDefaults);
function dmGetDefaultSignPropertyData() {
    return DmInternal.defaults.signProperties;
}
exports.dmGetDefaultSignPropertyData = dmGetDefaultSignPropertyData;
exports.initialSerialPortDefaults = {
    port: 0,
    baudRate: 115200,
    dataBits: 8,
    stopBits: 1,
    parity: 'N',
    protocol: 'ASCII',
    sendEol: 'CR',
    receiveEol: 'CR',
    invertSignals: false,
    connectedDevice: 'None',
};
Object.freeze(exports.initialSerialPortDefaults);
var createDefaultSerialPortList = function () {
    var portList = [];
    for (var port = 0; port < 8; ++port) {
        portList.push(Object.assign({}, exports.initialSerialPortDefaults, { port: port }));
    }
    return portList;
};
function dmGetDefaultSerialPortList() {
    return DmInternal.defaults.serialPortConfigurations;
}
exports.dmGetDefaultSerialPortList = dmGetDefaultSerialPortList;
exports.initialGpioListDefaults = [
    bscore_1.GpioType.Input, bscore_1.GpioType.Input, bscore_1.GpioType.Input, bscore_1.GpioType.Input,
    bscore_1.GpioType.Input, bscore_1.GpioType.Input, bscore_1.GpioType.Input, bscore_1.GpioType.Input,
];
function dmGetDefaultGpioList() {
    return DmInternal.defaults.gpio;
}
exports.dmGetDefaultGpioList = dmGetDefaultGpioList;
exports.initialButtonPanelConfigurationDefaults = {
    configureAutomatically: true,
    configuration: 0,
};
Object.freeze(exports.initialButtonPanelConfigurationDefaults);
var createDefaultButtonPanelMap = function () {
    var bpMap = {};
    bscore_1.ButtonPanelNameArray.forEach(function (bpName) {
        bpMap[bpName] = Object.assign({}, exports.initialButtonPanelConfigurationDefaults);
    });
    return bpMap;
};
function dmGetDefaultButtonPanelMap() {
    return DmInternal.defaults.buttonPanels;
}
exports.dmGetDefaultButtonPanelMap = dmGetDefaultButtonPanelMap;
exports.initialAudioSignPropertyDefaults = {
    min: 0,
    max: 100,
};
Object.freeze(exports.initialAudioSignPropertyDefaults);
var createDefaultAudioSignPropertyMap = function () {
    var audioPropertyMap = {};
    bscore_1.AudioOutputNameArray.forEach(function (audioName) {
        audioPropertyMap[audioName] = Object.assign({}, exports.initialAudioSignPropertyDefaults);
    });
    return audioPropertyMap;
};
function dmGetDefaultAudioSignPropertyMap() {
    return DmInternal.defaults.audioSignPropertyMap;
}
exports.dmGetDefaultAudioSignPropertyMap = dmGetDefaultAudioSignPropertyMap;
var initialDefaultAudioOutputAssignmentMap = {
    analog1: bscore_1.AudioOutputType.Pcm,
    analog2: bscore_1.AudioOutputType.None,
    analog3: bscore_1.AudioOutputType.None,
    usbA: bscore_1.AudioOutputType.None,
    usbB: bscore_1.AudioOutputType.None,
    usbC: bscore_1.AudioOutputType.None,
    usbD: bscore_1.AudioOutputType.None,
    hdmi: bscore_1.AudioOutputType.Pcm,
    spdif: bscore_1.AudioOutputType.Pcm,
};
Object.freeze(initialDefaultAudioOutputAssignmentMap);
exports.initialAudioZonePropertyDefaults = {
    audioOutput: bscore_1.AudioOutputSelectionType.Analog,
    audioMode: bscore_1.AudioModeType.Stereo,
    audioMapping: bscore_1.AudioMappingType.Audio1,
    audioOutputAssignments: initialDefaultAudioOutputAssignmentMap,
    audioMixMode: bscore_1.AudioMixModeType.Stereo,
    audioVolume: 100,
    minimumVolume: 0,
    maximumVolume: 100,
};
Object.freeze(exports.initialAudioZonePropertyDefaults);
function dmGetDefaultAudioZoneProperties() {
    return DmInternal.defaults.audioZoneProperties;
}
exports.dmGetDefaultAudioZoneProperties = dmGetDefaultAudioZoneProperties;
exports.initialEnhancedAudioZonePropertyDefaults = {
    fadeLength: 4,
};
Object.freeze(exports.initialEnhancedAudioZonePropertyDefaults);
function dmGetDefaultEnhancedAudioZoneProperties() {
    return DmInternal.defaults.enhancedAudioZoneProperties;
}
exports.dmGetDefaultEnhancedAudioZoneProperties = dmGetDefaultEnhancedAudioZoneProperties;
exports.initialImageZonePropertyDefaults = {
    imageMode: bscore_1.ImageModeType.CenterImage,
};
Object.freeze(exports.initialImageZonePropertyDefaults);
function dmGetDefaultImageZoneProperties() {
    return DmInternal.defaults.imageZoneProperties;
}
exports.dmGetDefaultImageZoneProperties = dmGetDefaultImageZoneProperties;
exports.initialVideoZonePropertyDefaults = {
    viewMode: bscore_1.ViewModeType.Letterboxed,
    liveVideoInput: bscore_1.LiveVideoInputType.SVideo,
    liveVideoStandard: bscore_1.LiveVideoStandardType.NtscM,
    videoVolume: 100,
    brightness: 128,
    contrast: 64,
    saturation: 64,
    hue: 0,
    zOrderFront: true,
    mosaic: false,
    maxContentResolution: bscore_1.MosaicMaxContentResolutionType.HD,
};
Object.freeze(exports.initialVideoZonePropertyDefaults);
function dmGetDefaultVideoZoneProperties() {
    return DmInternal.defaults.videoZoneProperties;
}
exports.dmGetDefaultVideoZoneProperties = dmGetDefaultVideoZoneProperties;
var initialWidgetDefaults = {
    foregroundTextColor: { a: 255, r: 160, g: 160, b: 160 },
    backgroundTextColor: { a: 255, r: 0, g: 0, b: 0 },
    font: 'System',
    fontSize: 0,
    backgroundBitmapAssetId: '',
    stretchBitmapFile: false,
    safeTextRegion: { x: 0, y: 0, width: 100, height: 100, pct: true },
};
Object.freeze(initialWidgetDefaults);
var initialTextWidgetDefaults = {
    numberOfLines: 3,
    delay: 5,
    rotation: bscore_1.RotationType.rot0,
    alignment: bscore_1.TextHAlignmentType.Left,
    scrollingMethod: bscore_1.TextScrollingMethodType.Animated,
};
Object.freeze(initialTextWidgetDefaults);
exports.initialTickerZonePropertyDefaults = {
    textWidget: initialTextWidgetDefaults,
    widget: initialWidgetDefaults,
    scrollSpeed: 100,
};
Object.freeze(exports.initialTickerZonePropertyDefaults);
function dmGetDefaultTickerZoneProperties() {
    return DmInternal.defaults.tickerZoneProperties;
}
exports.dmGetDefaultTickerZoneProperties = dmGetDefaultTickerZoneProperties;
exports.initialClockZonePropertyDefaults = {
    displayTime: true,
    rotation: bscore_1.RotationType.rot0,
    widget: initialWidgetDefaults,
};
Object.freeze(exports.initialClockZonePropertyDefaults);
function dmGetDefaultClockZoneProperties() {
    return DmInternal.defaults.clockZoneProperties;
}
exports.dmGetDefaultClockZoneProperties = dmGetDefaultClockZoneProperties;
exports.initialVideoContentItemDefaults = {
    volume: 100,
    videoDisplayMode: bscore_1.VideoDisplayModeType.m2D,
    automaticallyLoop: false,
};
Object.freeze(exports.initialVideoContentItemDefaults);
function dmGetDefaultVideoContentItemData() {
    return DmInternal.defaults.videoContentItem;
}
exports.dmGetDefaultVideoContentItemData = dmGetDefaultVideoContentItemData;
exports.initialAudioContentItemDefaults = {
    volume: 100,
};
Object.freeze(exports.initialAudioContentItemDefaults);
function dmGetDefaultAudioContentItemData() {
    return DmInternal.defaults.audioContentItem;
}
exports.dmGetDefaultAudioContentItemData = dmGetDefaultAudioContentItemData;
exports.initialImageContentItemDefaults = {
    useImageBuffer: false,
    videoPlayerRequired: false,
    displayDuration: 6,
};
Object.freeze(exports.initialImageContentItemDefaults);
function dmGetDefaultImageContentItemData() {
    return DmInternal.defaults.imageContentItem;
}
exports.dmGetDefaultImageContentItemData = dmGetDefaultImageContentItemData;
exports.initialHtmlContentItemDefaults = {
    enableExternalData: false,
    enableMouseEvents: false,
    displayCursor: false,
    hwzOn: false,
    useUserStylesheet: false,
    displayDuration: 0,
};
Object.freeze(exports.initialHtmlContentItemDefaults);
function dmGetDefaultHtmlContentItemData() {
    return DmInternal.defaults.htmlContentItem;
}
exports.dmGetDefaultHtmlContentItemData = dmGetDefaultHtmlContentItemData;
exports.initialMrssContentItemDefaults = {
    videoPlayerRequired: false,
};
Object.freeze(exports.initialMrssContentItemDefaults);
function dmGetDefaultMrssDataFeedContentItemData() {
    return DmInternal.defaults.mrssContentItem;
}
exports.dmGetDefaultMrssDataFeedContentItemData = dmGetDefaultMrssDataFeedContentItemData;
exports.initialLiveVideoContentItemDefaults = {
    volume: 100,
    overscan: false,
    displayDuration: 0,
};
Object.freeze(exports.initialLiveVideoContentItemDefaults);
function dmGetDefaultLiveVideoContentItemData() {
    return DmInternal.defaults.liveVideoContentItem;
}
exports.dmGetDefaultLiveVideoContentItemData = dmGetDefaultLiveVideoContentItemData;
exports.initialStreamContentItemDefaults = {
    volume: 100,
    displayDuration: 0,
};
Object.freeze(exports.initialStreamContentItemDefaults);
function dmGetDefaultVideoStreamContentItemData() {
    return DmInternal.defaults.videoStreamContentItem;
}
exports.dmGetDefaultVideoStreamContentItemData = dmGetDefaultVideoStreamContentItemData;
function dmGetDefaultAudioStreamContentItemData() {
    return DmInternal.defaults.audioStreamContentItem;
}
exports.dmGetDefaultAudioStreamContentItemData = dmGetDefaultAudioStreamContentItemData;
var DmInternal;
(function (DmInternal) {
    var DefaultProperties = (function () {
        function DefaultProperties() {
            this.reset();
        }
        DefaultProperties.prototype.reset = function () {
            this._signProperties = Object.assign({}, exports.initialSignPropertyDefaults);
            this._serialPortConfigurations = createDefaultSerialPortList();
            this._gpioList = exports.initialGpioListDefaults.slice();
            this._buttonPanels = createDefaultButtonPanelMap();
            this._audioSignPropertyMap = createDefaultAudioSignPropertyMap();
            this._audioZoneProperties = Object.assign({}, exports.initialAudioZonePropertyDefaults);
            this._enhancedAudioZoneProperties = Object.assign({}, exports.initialEnhancedAudioZonePropertyDefaults);
            this._imageZoneProperties = Object.assign({}, exports.initialImageZonePropertyDefaults);
            this._videoZoneProperties = Object.assign({}, exports.initialVideoZonePropertyDefaults);
            this._tickerZoneProperties = Object.assign({}, exports.initialTickerZonePropertyDefaults);
            this._clockZoneProperties = Object.assign({}, exports.initialClockZonePropertyDefaults);
            this._videoContentItem = Object.assign({}, exports.initialVideoContentItemDefaults);
            this._audioContentItem = Object.assign({}, exports.initialAudioContentItemDefaults);
            this._imageContentItem = Object.assign({}, exports.initialImageContentItemDefaults);
            this._htmlContentItem = Object.assign({}, exports.initialHtmlContentItemDefaults);
            this._mrssContentItem = Object.assign({}, exports.initialMrssContentItemDefaults);
            this._liveVideoContentItem = Object.assign({}, exports.initialLiveVideoContentItemDefaults);
            this._videoStreamContentItem = Object.assign({}, exports.initialStreamContentItemDefaults);
            this._audioStreamContentItem = Object.assign({}, exports.initialStreamContentItemDefaults);
        };
        DefaultProperties.prototype.merge = function (params) {
            var _this = this;
            if (params.signProperties) {
                Object.assign(this._signProperties, params.signProperties);
            }
            if (params.serialPortConfigurations && Array.isArray(params.serialPortConfigurations)) {
                var updateList = params.serialPortConfigurations;
                updateList.forEach(function (portConfig) {
                    var portNum = portConfig.port;
                    if (portNum != null) {
                        _this._serialPortConfigurations[portNum] =
                            Object.assign({}, _this._serialPortConfigurations[portNum], portConfig);
                    }
                });
            }
            if (params.gpio && Array.isArray(params.gpio)) {
                this._gpioList = params.gpio.slice();
            }
            if (params.buttonPanels) {
                var updateList_1 = params.buttonPanels;
                Object.keys(updateList_1).forEach(function (bpName) {
                    _this._buttonPanels[bpName] = Object.assign({}, _this._buttonPanels[bpName], updateList_1[bpName]);
                });
            }
            if (params.audioSignPropertyMap) {
                var updateList_2 = params.audioSignPropertyMap;
                Object.keys(updateList_2).forEach(function (audioName) {
                    _this._audioSignPropertyMap[audioName] =
                        Object.assign({}, _this._audioSignPropertyMap[audioName], updateList_2[audioName]);
                });
            }
            if (params.audioZoneProperties) {
                Object.assign(this._audioZoneProperties, params.audioZoneProperties);
            }
            if (params.enhancedAudioZoneProperties) {
                Object.assign(this._enhancedAudioZoneProperties, params.enhancedAudioZoneProperties);
            }
            if (params.imageZoneProperties) {
                Object.assign(this._imageZoneProperties, params.imageZoneProperties);
            }
            if (params.videoZoneProperties) {
                Object.assign(this._videoZoneProperties, params.videoZoneProperties);
            }
            if (params.tickerZoneProperties) {
                var newProps = Object.assign({}, params.tickerZoneProperties);
                if (params.tickerZoneProperties.textWidget) {
                    newProps.textWidget =
                        Object.assign({}, this._tickerZoneProperties.textWidget, params.tickerZoneProperties.textWidget);
                }
                if (params.tickerZoneProperties.widget) {
                    var widgetClone = lodash_1.cloneDeep(params.tickerZoneProperties.widget);
                    newProps.widget = Object.assign({}, this._tickerZoneProperties.widget, widgetClone);
                }
                Object.assign(this._tickerZoneProperties, newProps);
            }
            if (params.clockZoneProperties) {
                var newProps = Object.assign({}, params.clockZoneProperties);
                if (params.clockZoneProperties.widget) {
                    var widgetClone = lodash_1.cloneDeep(params.clockZoneProperties.widget);
                    newProps.widget = Object.assign({}, this._clockZoneProperties.widget, widgetClone);
                }
                Object.assign(this._clockZoneProperties, newProps);
            }
            if (params.videoContentItem) {
                Object.assign(this._videoContentItem, params.videoContentItem);
            }
            if (params.audioContentItem) {
                Object.assign(this._audioContentItem, params.audioContentItem);
            }
            if (params.imageContentItem) {
                Object.assign(this._imageContentItem, params.imageContentItem);
            }
            if (params.htmlContentItem) {
                Object.assign(this._htmlContentItem, params.htmlContentItem);
            }
            if (params.mrssContentItem) {
                Object.assign(this._mrssContentItem, params.mrssContentItem);
            }
            if (params.liveVideoContentItem) {
                Object.assign(this._liveVideoContentItem, params.liveVideoContentItem);
            }
            if (params.videoStreamContentItem) {
                Object.assign(this._videoStreamContentItem, params.videoStreamContentItem);
            }
            if (params.audioStreamContentItem) {
                Object.assign(this._audioStreamContentItem, params.audioStreamContentItem);
            }
        };
        Object.defineProperty(DefaultProperties.prototype, "allDefaults", {
            get: function () {
                return {
                    signProperties: this.signProperties,
                    serialPortConfigurations: this.serialPortConfigurations,
                    gpio: this.gpio,
                    buttonPanels: this.buttonPanels,
                    audioSignPropertyMap: this.audioSignPropertyMap,
                    audioZoneProperties: this.audioZoneProperties,
                    enhancedAudioZoneProperties: this.enhancedAudioZoneProperties,
                    imageZoneProperties: this.imageZoneProperties,
                    videoZoneProperties: this.videoZoneProperties,
                    tickerZoneProperties: this.tickerZoneProperties,
                    clockZoneProperties: this.clockZoneProperties,
                    videoContentItem: this.videoContentItem,
                    audioContentItem: this.audioContentItem,
                    imageContentItem: this.imageContentItem,
                    htmlContentItem: this.htmlContentItem,
                    mrssContentItem: this.mrssContentItem,
                    liveVideoContentItem: this.liveVideoContentItem,
                    videoStreamContentItem: this.videoStreamContentItem,
                    audioStreamContentItem: this.audioStreamContentItem,
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "signProperties", {
            get: function () { return lodash_1.cloneDeep(this._signProperties); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "serialPortConfigurations", {
            get: function () { return lodash_1.cloneDeep(this._serialPortConfigurations); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "gpio", {
            get: function () { return lodash_1.cloneDeep(this._gpioList); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "buttonPanels", {
            get: function () { return lodash_1.cloneDeep(this._buttonPanels); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "audioSignPropertyMap", {
            get: function () { return lodash_1.cloneDeep(this._audioSignPropertyMap); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "audioZoneProperties", {
            get: function () { return lodash_1.cloneDeep(this._audioZoneProperties); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "enhancedAudioZoneProperties", {
            get: function () { return lodash_1.cloneDeep(this._enhancedAudioZoneProperties); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "imageZoneProperties", {
            get: function () { return lodash_1.cloneDeep(this._imageZoneProperties); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "videoZoneProperties", {
            get: function () { return lodash_1.cloneDeep(this._videoZoneProperties); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "tickerZoneProperties", {
            get: function () { return lodash_1.cloneDeep(this._tickerZoneProperties); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "clockZoneProperties", {
            get: function () { return lodash_1.cloneDeep(this._clockZoneProperties); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "videoContentItem", {
            get: function () { return lodash_1.cloneDeep(this._videoContentItem); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "audioContentItem", {
            get: function () { return lodash_1.cloneDeep(this._audioContentItem); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "imageContentItem", {
            get: function () { return lodash_1.cloneDeep(this._imageContentItem); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "htmlContentItem", {
            get: function () { return lodash_1.cloneDeep(this._htmlContentItem); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "mrssContentItem", {
            get: function () { return lodash_1.cloneDeep(this._mrssContentItem); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "liveVideoContentItem", {
            get: function () { return lodash_1.cloneDeep(this._liveVideoContentItem); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "videoStreamContentItem", {
            get: function () { return lodash_1.cloneDeep(this._videoStreamContentItem); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefaultProperties.prototype, "audioStreamContentItem", {
            get: function () { return lodash_1.cloneDeep(this._audioStreamContentItem); },
            enumerable: true,
            configurable: true
        });
        return DefaultProperties;
    }());
    DmInternal.DefaultProperties = DefaultProperties;
    DmInternal.defaults = new DefaultProperties();
})(DmInternal = exports.DmInternal || (exports.DmInternal = {}));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bscore_1 = __webpack_require__(0);
function dmGetEmptyParameterizedString() {
    return { params: [] };
}
exports.dmGetEmptyParameterizedString = dmGetEmptyParameterizedString;
function dmGetParameterizedStringFromString(value) {
    return { params: [{ type: bscore_1.StringParameterType.Text, value: value }] };
}
exports.dmGetParameterizedStringFromString = dmGetParameterizedStringFromString;
function dmResolveDmParameterizedString(arg) {
    if (arg !== undefined) {
        if (typeof arg === 'string') {
            return dmGetParameterizedStringFromString(arg);
        }
        else if (dmIsValidParameterizedString(arg)) {
            return arg;
        }
    }
    return dmGetEmptyParameterizedString();
}
exports.dmResolveDmParameterizedString = dmResolveDmParameterizedString;
function dmGetParameterizedStringFromUserVariable(value) {
    return { params: [{ type: bscore_1.StringParameterType.UserVariable, value: value }] };
}
exports.dmGetParameterizedStringFromUserVariable = dmGetParameterizedStringFromUserVariable;
function dmAppendStringToParameterizedString(ps, value) {
    ps.params.push({ type: bscore_1.StringParameterType.Text, value: value });
    return ps;
}
exports.dmAppendStringToParameterizedString = dmAppendStringToParameterizedString;
function dmAppendUserVariableToParameterizedString(ps, value) {
    ps.params.push({ type: bscore_1.StringParameterType.UserVariable, value: value });
    return ps;
}
exports.dmAppendUserVariableToParameterizedString = dmAppendUserVariableToParameterizedString;
function dmIsValidParameterizedString(ps) {
    if (typeof ps !== 'object' || !ps.params || !Array.isArray(ps.params) || ps.params.length === 0) {
        return false;
    }
    var ok = true;
    ps.params.every(function (component) {
        if (!(typeof component === 'object'
            && component.hasOwnProperty('type')
            && component.hasOwnProperty('value')
            && (component.type === bscore_1.StringParameterType.Text || component.type === bscore_1.StringParameterType.UserVariable)
            && typeof component.value === 'string')) {
            ok = false;
            return false;
        }
        return true;
    });
    return ok;
}
exports.dmIsValidParameterizedString = dmIsValidParameterizedString;
function dmGetSimpleStringFromParameterizedString(ps) {
    var returnString;
    if (typeof ps === 'object' && ps.params && ps.params.length) {
        ps.params.every(function (param) {
            if (param.type === bscore_1.StringParameterType.UserVariable) {
                returnString = undefined;
                return false;
            }
            if (returnString) {
                returnString = returnString + param.value;
            }
            else {
                returnString = param.value;
            }
            return true;
        });
    }
    return returnString ? returnString : null;
}
exports.dmGetSimpleStringFromParameterizedString = dmGetSimpleStringFromParameterizedString;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(3);
exports.ADD_EVENT = 'DM_ADD_EVENT';
exports.UPDATE_EVENT = 'DM_UPDATE_EVENT';
exports.DELETE_EVENT = 'DM_DELETE_EVENT';
function dmAddEvent(name, type, mediaStateId, data) {
    return {
        type: exports.ADD_EVENT,
        payload: {
            id: utils_1.newBsDmId(),
            name: name,
            type: type,
            mediaStateId: mediaStateId,
            data: data,
        },
    };
}
exports.dmAddEvent = dmAddEvent;
function dmUpdateEvent(params) {
    return {
        type: exports.UPDATE_EVENT,
        payload: params,
    };
}
exports.dmUpdateEvent = dmUpdateEvent;
function dmDeleteEvent(id) {
    return {
        type: exports.DELETE_EVENT,
        payload: { id: id },
    };
}
exports.dmDeleteEvent = dmDeleteEvent;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var selectorSignEntityDetail_1 = __webpack_require__(39);
var selectorPlaylist_1 = __webpack_require__(38);
function dmGetInitialMediaStateIdForZone(state, props) {
    return selectorSignEntityDetail_1.getInitialMediaStateIdForZone(state, props);
}
exports.dmGetInitialMediaStateIdForZone = dmGetInitialMediaStateIdForZone;
function dmGetInitialMediaStateForZone(state, props) {
    return selectorSignEntityDetail_1.getInitialMediaStateForZone(state, props);
}
exports.dmGetInitialMediaStateForZone = dmGetInitialMediaStateForZone;
function dmGetMediaStateById(state, props) {
    return selectorSignEntityDetail_1.getMediaStateById(state, props);
}
exports.dmGetMediaStateById = dmGetMediaStateById;
function dmGetMediaStateByName(state, props) {
    return selectorSignEntityDetail_1.getMediaStateByName(state, props);
}
exports.dmGetMediaStateByName = dmGetMediaStateByName;
function dmGetEventById(state, props) {
    return selectorSignEntityDetail_1.getEventById(state, props);
}
exports.dmGetEventById = dmGetEventById;
function dmCanChangeZoneType(state, props) {
    return selectorSignEntityDetail_1.canChangeZoneType(state, props);
}
exports.dmCanChangeZoneType = dmCanChangeZoneType;
function dmGetZoneSimplePlaylist(state, props) {
    return selectorPlaylist_1.getZoneSimplePlaylist(state, props);
}
exports.dmGetZoneSimplePlaylist = dmGetZoneSimplePlaylist;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(3);
var bscore_1 = __webpack_require__(0);
var index_1 = __webpack_require__(9);
var actionBase_1 = __webpack_require__(10);
var bsDmError_1 = __webpack_require__(8);
exports.PUT_ASSET_ITEM = 'DM_PUT_ASSET_ITEM';
exports.REMOVE_ASSET_ITEMS = 'DM_REMOVE_ASSET_ITEMS';
function dmPutAssetItem(params) {
    return function (dispatch, getState) {
        var putAction = {
            type: exports.PUT_ASSET_ITEM,
            payload: Object.assign({}, params),
        };
        var locator = bscore_1.bscGenerateAssetLocator(params);
        if (!locator) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'Asset Item does not contain valid locator information', putAction);
        }
        putAction.payload.locator = locator;
        var dmState = actionBase_1.dmFilterDmState(getState());
        if (!putAction.payload.id) {
            dmSetAssetId(dmState, putAction.payload);
        }
        dispatch(putAction);
        return putAction;
    };
}
exports.dmPutAssetItem = dmPutAssetItem;
function dmSetAssetId(state, assetItem) {
    var locator = bscore_1.bscGenerateAssetLocator(assetItem);
    var assetId = index_1.dmGetAssetIdByLocator(state, { locator: locator });
    assetItem.id = assetId ? assetId : utils_1.newBsDmId();
    assetItem.locator = locator;
    return assetItem;
}
exports.dmSetAssetId = dmSetAssetId;
function dmPutAssetItemWithoutTest(params) {
    var putAction = {
        type: exports.PUT_ASSET_ITEM,
        payload: Object.assign({}, params),
    };
    var locator = bscore_1.bscGenerateAssetLocator(params);
    putAction.payload.locator = locator;
    if (!putAction.payload.id) {
        putAction.payload.id = utils_1.newBsDmId();
    }
    return putAction;
}
exports.dmPutAssetItemWithoutTest = dmPutAssetItemWithoutTest;
function dmRemoveAssetItems(id) {
    var assetIds = typeof id === 'string' ? [id] : id;
    return {
        type: exports.REMOVE_ASSET_ITEMS,
        payload: { assetIds: assetIds },
    };
}
exports.dmRemoveAssetItems = dmRemoveAssetItems;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(3);
var bscore_1 = __webpack_require__(0);
exports.ADD_TRANSITION = 'DM_ADD_TRANSITION';
exports.UPDATE_TRANSITION = 'DM_UPDATE_TRANSITION';
exports.DELETE_TRANSITION = 'DM_DELETE_TRANSITION';
function dmAddTransition(name, eventId, targetMediaStateId, type, duration, condition) {
    if (type === void 0) { type = bscore_1.TransitionType.NoEffect; }
    if (duration === void 0) { duration = 0; }
    return {
        type: exports.ADD_TRANSITION,
        payload: {
            id: utils_1.newBsDmId(),
            name: name,
            eventId: eventId,
            targetMediaStateId: targetMediaStateId,
            type: type,
            duration: duration,
            condition: condition,
        },
    };
}
exports.dmAddTransition = dmAddTransition;
function dmUpdateTransition(params) {
    return {
        type: exports.UPDATE_TRANSITION,
        payload: params,
    };
}
exports.dmUpdateTransition = dmUpdateTransition;
function dmDeleteTransition(id) {
    return {
        type: exports.DELETE_TRANSITION,
        payload: { id: id },
    };
}
exports.dmDeleteTransition = dmDeleteTransition;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(26);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(3);
var bscore_1 = __webpack_require__(0);
var bsDmInterfaces_1 = __webpack_require__(4);
var bsDmParameterizedStrings_1 = __webpack_require__(14);
exports.ADD_DATA_FEED = 'DM_ADD_DATA_FEED';
exports.ADD_BSN_DATA_FEED = 'DM_ADD_BSN_DATA_FEED';
exports.UPDATE_DATA_FEED = 'DM_UPDATE_DATA_FEED';
exports.UPDATE_BSN_DATA_FEED = 'DM_UPDATE_BSN_DATA_FEED';
exports.DELETE_DATA_FEED = 'DM_DELETE_DATA_FEED';
function dmAddDataFeed(name, url, usage, updateInterval, useHeadRequest, parserPlugin, autoGenerateUserVariables, userVariableAccess) {
    if (updateInterval === void 0) { updateInterval = 300; }
    if (useHeadRequest === void 0) { useHeadRequest = true; }
    if (parserPlugin === void 0) { parserPlugin = bsDmInterfaces_1.BsDmIdNone; }
    if (autoGenerateUserVariables === void 0) { autoGenerateUserVariables = false; }
    if (userVariableAccess === void 0) { userVariableAccess = bscore_1.AccessType.Private; }
    return {
        type: exports.ADD_DATA_FEED,
        payload: {
            id: utils_1.newBsDmId(),
            name: name,
            url: bsDmParameterizedStrings_1.dmResolveDmParameterizedString(url),
            usage: usage,
            updateInterval: updateInterval,
            useHeadRequest: useHeadRequest,
            parserPlugin: parserPlugin,
            autoGenerateUserVariables: autoGenerateUserVariables,
            userVariableAccess: userVariableAccess,
        },
    };
}
exports.dmAddDataFeed = dmAddDataFeed;
function dmUpdateDataFeed(params) {
    var localParams = params;
    if (params.hasOwnProperty('url')) {
        localParams = Object.assign({}, params, { url: bsDmParameterizedStrings_1.dmResolveDmParameterizedString(params.url) });
    }
    return {
        type: exports.UPDATE_DATA_FEED,
        payload: localParams,
    };
}
exports.dmUpdateDataFeed = dmUpdateDataFeed;
function dmAddBsnDataFeed(bsnDataFeed, usage, name, updateInterval, useHeadRequest, parserPlugin, autoGenerateUserVariables, userVariableAccess, supportsAudio, matchPlayerTags) {
    if (name === void 0) { name = ''; }
    if (updateInterval === void 0) { updateInterval = 300; }
    if (useHeadRequest === void 0) { useHeadRequest = true; }
    if (parserPlugin === void 0) { parserPlugin = bsDmInterfaces_1.BsDmIdNone; }
    if (autoGenerateUserVariables === void 0) { autoGenerateUserVariables = false; }
    if (userVariableAccess === void 0) { userVariableAccess = bscore_1.AccessType.Private; }
    if (supportsAudio === void 0) { supportsAudio = false; }
    if (matchPlayerTags === void 0) { matchPlayerTags = false; }
    return {
        type: exports.ADD_BSN_DATA_FEED,
        payload: {
            id: utils_1.newBsDmId(),
            name: name ? name : bsnDataFeed.name,
            bsnDataFeed: bsnDataFeed,
            usage: usage,
            updateInterval: updateInterval,
            useHeadRequest: useHeadRequest,
            parserPlugin: parserPlugin,
            autoGenerateUserVariables: autoGenerateUserVariables,
            userVariableAccess: userVariableAccess,
            supportsAudio: supportsAudio,
            matchPlayerTags: matchPlayerTags,
        },
    };
}
exports.dmAddBsnDataFeed = dmAddBsnDataFeed;
function dmUpdateBsnDataFeed(params) {
    return {
        type: exports.UPDATE_BSN_DATA_FEED,
        payload: params,
    };
}
exports.dmUpdateBsnDataFeed = dmUpdateBsnDataFeed;
function dmDeleteDataFeed(id) {
    return {
        type: exports.DELETE_DATA_FEED,
        payload: { id: id },
    };
}
exports.dmDeleteDataFeed = dmDeleteDataFeed;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(3);
var bscore_1 = __webpack_require__(0);
var bsDmParameterizedStrings_1 = __webpack_require__(14);
exports.ADD_HTML_SITE = 'DM_ADD_HTML_SITE';
exports.UPDATE_HTML_SITE = 'DM_UPDATE_HTML_SITE';
exports.DELETE_HTML_SITE = 'DM_DELETE_HTML_SITE';
function dmAddLocalHtmlSite(name, indexAssetId, queryString) {
    return {
        type: exports.ADD_HTML_SITE,
        payload: {
            id: utils_1.newBsDmId(),
            type: bscore_1.HtmlSiteType.Local,
            name: name,
            indexAssetId: indexAssetId,
            queryString: bsDmParameterizedStrings_1.dmResolveDmParameterizedString(queryString),
        },
    };
}
exports.dmAddLocalHtmlSite = dmAddLocalHtmlSite;
function dmAddRemoteHtmlSite(name, url, queryString) {
    return {
        type: exports.ADD_HTML_SITE,
        payload: {
            id: utils_1.newBsDmId(),
            type: bscore_1.HtmlSiteType.Remote,
            name: name,
            url: url,
            queryString: bsDmParameterizedStrings_1.dmResolveDmParameterizedString(queryString),
        },
    };
}
exports.dmAddRemoteHtmlSite = dmAddRemoteHtmlSite;
function dmAddBrightPlateHtmlSite(name, brightPlateName, displayName, queryString) {
    return {
        type: exports.ADD_HTML_SITE,
        payload: {
            id: utils_1.newBsDmId(),
            type: bscore_1.HtmlSiteType.BrightPlate,
            name: name,
            brightPlateName: brightPlateName,
            displayName: displayName,
            queryString: bsDmParameterizedStrings_1.dmResolveDmParameterizedString(queryString),
        },
    };
}
exports.dmAddBrightPlateHtmlSite = dmAddBrightPlateHtmlSite;
function dmUpdateHtmlSite(params) {
    var localParams = params;
    if (params.hasOwnProperty('queryString')) {
        localParams = Object.assign({}, params, { queryString: bsDmParameterizedStrings_1.dmResolveDmParameterizedString(params.queryString) });
    }
    return {
        type: exports.UPDATE_HTML_SITE,
        payload: localParams,
    };
}
exports.dmUpdateHtmlSite = dmUpdateHtmlSite;
function dmDeleteHtmlSite(id) {
    return {
        type: exports.DELETE_HTML_SITE,
        payload: { id: id },
    };
}
exports.dmDeleteHtmlSite = dmDeleteHtmlSite;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(3);
var bscore_1 = __webpack_require__(0);
var bsDmInterfaces_1 = __webpack_require__(4);
exports.ADD_USER_VARIABLE = 'DM_ADD_USER_VARIABLE';
exports.UPDATE_USER_VARIABLE = 'DM_UPDATE_USER_VARIABLE';
exports.DELETE_USER_VARIABLE = 'DM_DELETE_USER_VARIABLE';
exports.DELETE_USER_VARIABLES = 'DM_DELETE_USER_VARIABLES';
function dmAddUserVariable(name, defaultValue, access, isNetworked, dataFeedId, systemVariable) {
    if (access === void 0) { access = bscore_1.AccessType.Private; }
    if (isNetworked === void 0) { isNetworked = false; }
    if (dataFeedId === void 0) { dataFeedId = bsDmInterfaces_1.BsDmIdNone; }
    if (systemVariable === void 0) { systemVariable = ''; }
    return {
        type: exports.ADD_USER_VARIABLE,
        payload: {
            id: utils_1.newBsDmId(),
            name: name,
            defaultValue: defaultValue,
            access: access,
            isNetworked: isNetworked,
            dataFeedId: dataFeedId,
            systemVariable: systemVariable,
        },
    };
}
exports.dmAddUserVariable = dmAddUserVariable;
function dmUpdateUserVariable(params) {
    return {
        type: exports.UPDATE_USER_VARIABLE,
        payload: params,
    };
}
exports.dmUpdateUserVariable = dmUpdateUserVariable;
function dmDeleteUserVariable(id) {
    return {
        type: exports.DELETE_USER_VARIABLE,
        payload: { id: id },
    };
}
exports.dmDeleteUserVariable = dmDeleteUserVariable;
function dmDeleteUserVariables(ids) {
    return {
        type: exports.DELETE_USER_VARIABLES,
        payload: { ids: ids },
    };
}
exports.dmDeleteUserVariables = dmDeleteUserVariables;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(1);
var actionEvent_1 = __webpack_require__(15);
var actionSign_1 = __webpack_require__(2);
var actionZone_1 = __webpack_require__(11);
var actionMediaState_1 = __webpack_require__(7);
var createEventState = function (id, name, type, mediaStateId, data) { return ({
    id: id, name: name, type: type, mediaStateId: mediaStateId, data: data,
}); };
var eventsById = function (state, action) {
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
            return {};
        case actionSign_1.OPEN_SIGN: {
            var newState = payload.newState;
            return newState.events;
        }
        case actionEvent_1.ADD_EVENT: {
            var _a = payload, id = _a.id, name_1 = _a.name, eventType = _a.type, mediaStateId = _a.mediaStateId, data = _a.data;
            return Object.assign({}, state, (_b = {}, _b[id] = createEventState(id, name_1, eventType, mediaStateId, data), _b));
        }
        case actionEvent_1.UPDATE_EVENT: {
            var id = payload.id;
            var updatedEvent = Object.assign({}, state[id], payload);
            return Object.assign({}, state, (_c = {}, _c[id] = updatedEvent, _c));
        }
        case actionEvent_1.DELETE_EVENT:
            return lodash_1.omit(state, payload.id);
        case actionMediaState_1.DELETE_MEDIA_STATE:
        case actionZone_1.DELETE_ZONE:
            var eventIds = payload.eventIds;
            if (eventIds && eventIds.length) {
                return lodash_1.omit(state, eventIds);
            }
    }
    return state;
    var _b, _c;
};
var eventReducer = eventsById;
exports.default = eventReducer;
exports.isValidEventState = function (state) {
    return typeof state === 'object';
};
exports.getEventStateById = function (state, props) {
    var eventState = state[props.id];
    return eventState ? eventState : null;
};
var getEventsById = function (state) { return state; };
exports.getEventIdsForMediaState = reselect_1.createSelector(getEventsById, function (_, props) { return props.id; }, function (events, mediaStateId) {
    return Object.keys(events).filter(function (id, index, idArray) { return events[id].mediaStateId === mediaStateId; });
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(1);
var actionSign_1 = __webpack_require__(2);
var actionZone_1 = __webpack_require__(11);
var actionMediaState_1 = __webpack_require__(7);
var mediaStatesById = function (state, action) {
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
            return {};
        case actionSign_1.OPEN_SIGN:
            var newState = payload.newState;
            return newState.mediaStates;
        case actionMediaState_1.ADD_MEDIA_STATE: {
            var _a = payload, id = _a.id, name_1 = _a.name, container = _a.container, contentItem = _a.contentItem;
            var containerCopy = lodash_1.cloneDeep(container);
            var contentItemCopy = lodash_1.cloneDeep(contentItem);
            return Object.assign({}, state, (_b = {}, _b[id] = { id: id, name: name_1, container: containerCopy, contentItem: contentItemCopy }, _b));
        }
        case actionMediaState_1.UPDATE_MEDIA_STATE: {
            var id = payload.id;
            if (state[id] !== undefined) {
                var payloadCopy = payload;
                if (payload.hasOwnProperty('contentItem') || payload.hasOwnProperty('container')) {
                    if (payload.hasOwnProperty('contentItem')) {
                        payloadCopy.contentItem = lodash_1.cloneDeep(payloadCopy.contentItem);
                    }
                    if (payload.hasOwnProperty('container')) {
                        payloadCopy.container = lodash_1.cloneDeep(payloadCopy.container);
                    }
                }
                var updatedMediaState = Object.assign({}, state[id], payloadCopy);
                return Object.assign({}, state, (_c = {}, _c[id] = updatedMediaState, _c));
            }
        }
        case actionMediaState_1.DELETE_MEDIA_STATE:
        case actionZone_1.DELETE_ZONE:
            var mediaStateIds = payload.mediaStateIds;
            if (mediaStateIds && mediaStateIds.length) {
                return lodash_1.omit(state, mediaStateIds);
            }
    }
    return state;
    var _b, _c;
};
var mediaStateReducer = mediaStatesById;
exports.default = mediaStateReducer;
exports.isValidMediaStateState = function (state) {
    return typeof state === 'object';
};
exports.getMediaStateStateById = function (state, props) {
    var mediaState = state[props.id];
    return mediaState ? mediaState : null;
};
exports.getMediaStateStateByName = reselect_1.createSelector(function (state) { return state; }, function (_, props) { return props.name; }, function (states, name) {
    var mediaStateState;
    Object.keys(states).some(function (id) {
        if (states[id].name === name) {
            mediaStateState = states[id];
            return true;
        }
    });
    return mediaStateState ? mediaStateState : null;
});
exports.getMediaStateIdsForZone = reselect_1.createSelector(function (state) { return state; }, function (_, props) { return props.id; }, function (states, zoneId) {
    return Object.keys(states).filter(function (id, index, idArray) { return states[id].container.id === zoneId; });
});
exports.getContentItemTypeForMediaStateId = function (state, props) {
    var mediaState = state[props.id];
    return mediaState ? mediaState.contentItem.type : null;
};
exports.makeGetMediaStatesForZone = function () {
    return exports.getMediaStateIdsForZone;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(19);
var bsDmInterfaces_1 = __webpack_require__(4);
var bsDmClasses_1 = __webpack_require__(5);
var bsDmDefaults_1 = __webpack_require__(13);
var actionSign_1 = __webpack_require__(2);
exports.createDefaultSignState = function (id, name, videoMode, model) {
    return ({
        properties: exports.createDefaultSignProperties(id, name, videoMode, model),
        serialPortConfigurations: bsDmDefaults_1.dmGetDefaultSerialPortList(),
        gpio: bsDmDefaults_1.dmGetDefaultGpioList(),
        buttonPanels: bsDmDefaults_1.dmGetDefaultButtonPanelMap(),
        audioSignPropertyMap: bsDmDefaults_1.dmGetDefaultAudioSignPropertyMap(),
    });
};
exports.createDefaultSignProperties = function (id, name, videoMode, model) {
    var optionals = videoMode !== undefined ? { videoMode: videoMode } : {};
    if (model !== undefined) {
        Object.assign(optionals, { model: model });
    }
    return Object.assign({ id: id, version: bsDmInterfaces_1.BsDmStateVersion, name: name }, bsDmDefaults_1.dmGetDefaultSignPropertyData(), optionals);
};
var newSignProperties = exports.createDefaultSignProperties(bsDmInterfaces_1.BsDmIdNone, 'Untitled');
var properties = function (state, _a) {
    if (state === void 0) { state = newSignProperties; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
        case actionSign_1.UPDATE_SIGN_PROPS:
            return Object.assign({}, state, payload);
        case actionSign_1.OPEN_SIGN:
            var newState = payload.newState;
            return newState.sign.properties;
    }
    return state;
};
var serialPortConfigurations = function (state, _a) {
    if (state === void 0) { state = bsDmDefaults_1.dmGetDefaultSerialPortList(); }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
            return bsDmDefaults_1.dmGetDefaultSerialPortList();
        case actionSign_1.UPDATE_SIGN_SERIAL_PORTS: {
            var updateList = payload.params;
            updateList.forEach(function (portConfig) {
                var portNum = portConfig.port;
                state[portNum] = Object.assign({}, state[portNum], portConfig);
            });
            return state;
        }
        case actionSign_1.OPEN_SIGN:
            var newState = payload.newState;
            return newState.sign.serialPortConfigurations;
    }
    return state;
};
var gpio = function (state, _a) {
    if (state === void 0) { state = bsDmDefaults_1.dmGetDefaultGpioList(); }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
            return bsDmDefaults_1.dmGetDefaultGpioList();
        case actionSign_1.UPDATE_SIGN_GPIO: {
            return payload.params;
        }
        case actionSign_1.OPEN_SIGN:
            var newState = payload.newState;
            return newState.sign.gpio;
    }
    return state;
};
var buttonPanels = function (state, _a) {
    if (state === void 0) { state = bsDmDefaults_1.dmGetDefaultButtonPanelMap(); }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
            return bsDmDefaults_1.dmGetDefaultButtonPanelMap();
        case actionSign_1.UPDATE_SIGN_BPMAP: {
            var updateList_1 = payload.params;
            Object.keys(updateList_1).forEach(function (bpName) {
                state[bpName] = Object.assign({}, state[bpName], updateList_1[bpName]);
            });
            return state;
        }
        case actionSign_1.OPEN_SIGN:
            var newState = payload.newState;
            return newState.sign.buttonPanels;
    }
    return state;
};
var audioSignPropertyMap = function (state, _a) {
    if (state === void 0) { state = bsDmDefaults_1.dmGetDefaultAudioSignPropertyMap(); }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
            return bsDmDefaults_1.dmGetDefaultAudioSignPropertyMap();
        case actionSign_1.UPDATE_SIGN_AUDIO_CONFIG: {
            var updateList_2 = payload.params;
            Object.keys(updateList_2).forEach(function (audioName) {
                state[audioName] = Object.assign({}, state[audioName], updateList_2[audioName]);
            });
            return state;
        }
        case actionSign_1.OPEN_SIGN:
            var newState = payload.newState;
            return newState.sign.audioSignPropertyMap;
    }
    return state;
};
var signReducer = redux_1.combineReducers({ properties: properties, serialPortConfigurations: serialPortConfigurations, gpio: gpio, buttonPanels: buttonPanels, audioSignPropertyMap: audioSignPropertyMap });
exports.default = signReducer;
exports.isValidSignState = function (state) {
    return typeof state === 'object'
        && state.hasOwnProperty('properties')
        && state.properties.hasOwnProperty('version')
        && state.properties.hasOwnProperty('name')
        && state.properties.hasOwnProperty('videoMode')
        && state.properties.hasOwnProperty('model')
        && state.properties.hasOwnProperty('monitorOrientation')
        && state.properties.hasOwnProperty('videoConnector')
        && state.properties.hasOwnProperty('deviceWebPageDisplay')
        && state.properties.hasOwnProperty('backgroundScreenColor')
        && state.properties.hasOwnProperty('forceResolution')
        && state.properties.hasOwnProperty('tenBitColorEnabled')
        && state.properties.hasOwnProperty('htmlEnableJavascriptConsole')
        && state.properties.hasOwnProperty('alphabetizeVariableNames')
        && state.properties.hasOwnProperty('autoCreateMediaCounterVariables')
        && state.properties.hasOwnProperty('resetVariablesOnPresentationStart')
        && state.properties.hasOwnProperty('networkedVariablesUpdateInterval')
        && state.properties.hasOwnProperty('delayScheduleChangeUntilMediaEndEvent')
        && state.properties.hasOwnProperty('language')
        && state.properties.hasOwnProperty('languageKey')
        && state.properties.hasOwnProperty('flipCoordinates')
        && state.properties.hasOwnProperty('isMosaic')
        && state.properties.hasOwnProperty('inactivityTimeout')
        && state.properties.hasOwnProperty('inactivityTime')
        && state.properties.hasOwnProperty('touchCursorDisplayMode')
        && state.properties.hasOwnProperty('graphicsZOrder')
        && state.properties.hasOwnProperty('udpDestinationAddressType')
        && state.properties.hasOwnProperty('udpDestinationAddress')
        && state.properties.hasOwnProperty('udpDestinationPort')
        && state.properties.hasOwnProperty('udpReceiverPort')
        && state.hasOwnProperty('serialPortConfigurations')
        && state.hasOwnProperty('gpio')
        && state.hasOwnProperty('buttonPanels')
        && state.hasOwnProperty('audioSignPropertyMap');
};
exports.getSignMetadata = function (state) { return new bsDmClasses_1.DmcSignMetadata(state); };
exports.getSignId = function (state) { return state.properties.id; };
exports.getSignName = function (state) { return state.properties.name; };
exports.getSignVideoMode = function (state) { return state.properties.videoMode; };
exports.getSignPlayerModel = function (state) { return state.properties.model; };
exports.getSignSerialPortConfigurations = function (state) { return state.serialPortConfigurations; };
exports.getSignGpioList = function (state) { return state.gpio; };
exports.getSignButtonPanelMap = function (state) { return state.buttonPanels; };
exports.getSignAudioPropertyMap = function (state) { return state.audioSignPropertyMap; };


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(19);
var reselect_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(1);
var bscore_1 = __webpack_require__(0);
var bsDmInterfaces_1 = __webpack_require__(4);
var bsDmClasses_1 = __webpack_require__(5);
var bsDmDefaults_1 = __webpack_require__(13);
var actionSign_1 = __webpack_require__(2);
var actionZone_1 = __webpack_require__(11);
var actionMediaState_1 = __webpack_require__(7);
exports.createDefaultZoneState = function (id, name, type, tag, nonInteractive, position) {
    if (nonInteractive === void 0) { nonInteractive = true; }
    if (position === void 0) { position = { x: 0, y: 0, width: 100, height: 100, pct: true }; }
    return ({
        id: id,
        name: name,
        type: type,
        tag: tag,
        nonInteractive: nonInteractive,
        initialMediaStateId: bsDmInterfaces_1.BsDmIdNone,
        position: position,
        properties: exports.createDefaultZoneProperties(type),
    });
};
exports.createDefaultZoneProperties = function (type) {
    switch (type) {
        case bscore_1.ZoneType.VideoOrImages:
            return Object.assign(bsDmDefaults_1.dmGetDefaultVideoZoneProperties(), bsDmDefaults_1.dmGetDefaultAudioZoneProperties(), bsDmDefaults_1.dmGetDefaultImageZoneProperties());
        case bscore_1.ZoneType.VideoOnly:
            return Object.assign(bsDmDefaults_1.dmGetDefaultVideoZoneProperties(), bsDmDefaults_1.dmGetDefaultAudioZoneProperties());
        case bscore_1.ZoneType.Images:
            return bsDmDefaults_1.dmGetDefaultImageZoneProperties();
        case bscore_1.ZoneType.AudioOnly:
            return bsDmDefaults_1.dmGetDefaultAudioZoneProperties();
        case bscore_1.ZoneType.EnhancedAudio:
            return Object.assign(bsDmDefaults_1.dmGetDefaultAudioZoneProperties(), bsDmDefaults_1.dmGetDefaultEnhancedAudioZoneProperties());
        case bscore_1.ZoneType.Ticker:
            return bsDmDefaults_1.dmGetDefaultTickerZoneProperties();
        case bscore_1.ZoneType.Clock:
            return bsDmDefaults_1.dmGetDefaultClockZoneProperties();
    }
    return {};
};
var zonesById = function (state, _a) {
    if (state === void 0) { state = {}; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
            return {};
        case actionSign_1.OPEN_SIGN:
            var newState = payload.newState;
            return newState.zones.zonesById;
        case actionZone_1.ADD_ZONE: {
            var _b = payload, id_1 = _b.id, zoneName = _b.name, zoneType = _b.type, tag = _b.tag, nonInteractive = _b.nonInteractive, position = _b.position;
            return Object.assign({}, state, (_c = {}, _c[id_1] = exports.createDefaultZoneState(id_1, zoneName, zoneType, tag, nonInteractive, position), _c));
        }
        case actionZone_1.UPDATE_ZONE: {
            var id_2 = payload.id;
            var updatedZone = Object.assign({}, state[id_2], payload);
            return Object.assign({}, state, (_d = {}, _d[id_2] = updatedZone, _d));
        }
        case actionZone_1.UPDATE_ZONE_PROPS: {
            var _e = payload, id_3 = _e.id, properties = _e.properties;
            var updatedProperties = Object.assign({}, state[id_3].properties, properties);
            var updatedZone = Object.assign({}, state[id_3], { properties: updatedProperties });
            return Object.assign({}, state, (_f = {}, _f[id_3] = updatedZone, _f));
        }
        case actionZone_1.DELETE_ZONE: {
            var zoneId = payload.zoneId;
            return lodash_1.omit(state, zoneId);
        }
        case actionMediaState_1.ADD_MEDIA_STATE:
            var _g = payload, id = _g.id, container = _g.container;
            var zone = state[container.id];
            if (zone && zone.initialMediaStateId === bsDmInterfaces_1.BsDmIdNone) {
                var updatedZone = Object.assign({}, state[container.id], { initialMediaStateId: id });
                return Object.assign({}, state, (_h = {}, _h[container.id] = updatedZone, _h));
            }
            break;
    }
    return state;
    var _c, _d, _f, _h;
};
var allZones = function (state, _a) {
    if (state === void 0) { state = []; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
            return [];
        case actionSign_1.OPEN_SIGN:
            var newState = payload.newState;
            return newState.zones.allZones;
        case actionZone_1.ADD_ZONE: {
            var id = payload.id;
            return state.concat([id]);
        }
        case actionZone_1.DELETE_ZONE: {
            var zoneId = payload.zoneId;
            var index = state.indexOf(zoneId);
            if (index >= 0) {
                return state.slice(0, index).concat(state.slice(index + 1));
            }
        }
    }
    return state;
};
var zoneReducer = redux_1.combineReducers({ zonesById: zonesById, allZones: allZones });
exports.default = zoneReducer;
exports.isValidZoneState = function (state) {
    return typeof state === 'object'
        && state.hasOwnProperty('zonesById')
        && typeof state.zonesById === 'object'
        && state.hasOwnProperty('allZones')
        && Array.isArray(state.allZones)
        && state.allZones.length === Object.keys(state.zonesById).length;
};
exports.getZoneById = function (state, props) {
    var zoneState = state.zones.zonesById[props.id];
    return zoneState ? new bsDmClasses_1.DmcZone(zoneState, state.sign.properties.videoMode) : null;
};
exports.getZoneByName = reselect_1.createSelector(function (state) { return state.zones.zonesById; }, function (_, props) { return props.name; }, function (state) { return state.sign.properties.videoMode; }, function (zones, name, videoMode) {
    var zoneState;
    Object.keys(zones).some(function (id) {
        if (zones[id].name === name) {
            zoneState = zones[id];
            return true;
        }
    });
    return zoneState ? new bsDmClasses_1.DmcZone(zoneState, videoMode) : null;
});
exports.getZoneByTag = reselect_1.createSelector(function (state) { return state.zones.zonesById; }, function (_, props) { return props.tag; }, function (state) { return state.sign.properties.videoMode; }, function (zones, tag, videoMode) {
    var zoneState;
    Object.keys(zones).some(function (id) {
        if (zones[id].tag === tag) {
            zoneState = zones[id];
            return true;
        }
    });
    return zoneState ? new bsDmClasses_1.DmcZone(zoneState, videoMode) : null;
});
exports.getZoneTypeById = function (state, props) {
    var zoneState = state.zonesById[props.id];
    return zoneState ? zoneState.type : null;
};
exports.getZonePropertiesById = function (state, props) {
    var zoneState = state.zonesById[props.id];
    return zoneState ? lodash_1.cloneDeep(zoneState.properties) : null;
};
var getZonesById = function (state) { return state.zonesById; };
exports.getZonePropertiesByName = reselect_1.createSelector(getZonesById, function (_, props) { return props.name; }, function (zones, name) {
    var zoneState;
    Object.keys(zones).some(function (id) {
        if (zones[id].name === name) {
            zoneState = zones[id];
            return true;
        }
    });
    return zoneState ? lodash_1.cloneDeep(zoneState.properties) : null;
});
exports.getZonePropertiesByTag = reselect_1.createSelector(getZonesById, function (_, props) { return props.tag; }, function (zones, tag) {
    var zoneState;
    Object.keys(zones).some(function (id) {
        if (zones[id].tag === tag) {
            zoneState = zones[id];
            return true;
        }
    });
    return zoneState ? lodash_1.cloneDeep(zoneState.properties) : null;
});
exports.getZonesForSign = function (state) { return state.allZones; };
exports.getZoneCount = function (state) { return state.allZones.length; };
exports.getZoneIdsForZoneType = reselect_1.createSelector(getZonesById, function (_, props) { return props.type; }, function (zones, type) {
    var zoneIds = [];
    Object.keys(zones).forEach(function (id) {
        var zone = zones[id];
        if (zone.type === type) {
            zoneIds.push(id);
        }
    });
    return zoneIds;
});
exports.getZoneTagMap = reselect_1.createSelector(getZonesById, function (zones) {
    var tagMap = {};
    Object.keys(zones).forEach(function (id) {
        var zone = zones[id];
        if (zone.tag) {
            tagMap[zone.tag] = id;
        }
    });
    return tagMap;
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var actionBase_1 = __webpack_require__(10);
exports.dmFilterDmState = actionBase_1.dmFilterDmState;
var actionSign_1 = __webpack_require__(2);
exports.dmNewSign = actionSign_1.dmNewSign;
exports.dmOpenSign = actionSign_1.dmOpenSign;
exports.dmVerifyAndOpenSign = actionSign_1.dmVerifyAndOpenSign;
exports.dmUpdateSignProperties = actionSign_1.dmUpdateSignProperties;
exports.dmUpdateSignSerialPorts = actionSign_1.dmUpdateSignSerialPorts;
exports.dmUpdateSignGpio = actionSign_1.dmUpdateSignGpio;
exports.dmUpdateSignButtonPanelMap = actionSign_1.dmUpdateSignButtonPanelMap;
exports.dmUpdateSignAudioPropertyMap = actionSign_1.dmUpdateSignAudioPropertyMap;
var actionZone_1 = __webpack_require__(11);
exports.dmAddZone = actionZone_1.dmAddZone;
exports.dmUpdateZone = actionZone_1.dmUpdateZone;
exports.dmUpdateZoneProperties = actionZone_1.dmUpdateZoneProperties;
exports.dmDeleteZone = actionZone_1.dmDeleteZone;
var actionMediaState_1 = __webpack_require__(7);
exports.dmAddMediaStateWithContentItem = actionMediaState_1.dmAddMediaStateWithContentItem;
exports.dmAddMediaState = actionMediaState_1.dmAddMediaState;
exports.dmUpdateMediaState = actionMediaState_1.dmUpdateMediaState;
exports.dmDeleteMediaState = actionMediaState_1.dmDeleteMediaState;
var actionEvent_1 = __webpack_require__(15);
exports.dmAddEvent = actionEvent_1.dmAddEvent;
exports.dmUpdateEvent = actionEvent_1.dmUpdateEvent;
exports.dmDeleteEvent = actionEvent_1.dmDeleteEvent;
var actionTransition_1 = __webpack_require__(18);
exports.dmAddTransition = actionTransition_1.dmAddTransition;
exports.dmUpdateTransition = actionTransition_1.dmUpdateTransition;
exports.dmDeleteTransition = actionTransition_1.dmDeleteTransition;
var actionPlaylist_1 = __webpack_require__(31);
exports.dmPlaylistAddMediaState = actionPlaylist_1.dmPlaylistAddMediaState;
exports.dmPlaylistAppendMediaState = actionPlaylist_1.dmPlaylistAppendMediaState;
exports.dmPlaylistAddMediaStateRange = actionPlaylist_1.dmPlaylistAddMediaStateRange;
exports.dmPlaylistUpdateMediaState = actionPlaylist_1.dmPlaylistUpdateMediaState;
exports.dmPlaylistDeleteMediaStateRange = actionPlaylist_1.dmPlaylistDeleteMediaStateRange;
exports.dmPlaylistDeleteMediaStatesAtIndices = actionPlaylist_1.dmPlaylistDeleteMediaStatesAtIndices;
exports.dmPlaylistMoveMediaStateRange = actionPlaylist_1.dmPlaylistMoveMediaStateRange;
exports.dmPlaylistMoveMediaStatesAtIndices = actionPlaylist_1.dmPlaylistMoveMediaStatesAtIndices;
var actionDataFeed_1 = __webpack_require__(20);
exports.dmAddDataFeed = actionDataFeed_1.dmAddDataFeed;
exports.dmAddBsnDataFeed = actionDataFeed_1.dmAddBsnDataFeed;
exports.dmUpdateDataFeed = actionDataFeed_1.dmUpdateDataFeed;
exports.dmUpdateBsnDataFeed = actionDataFeed_1.dmUpdateBsnDataFeed;
exports.dmDeleteDataFeed = actionDataFeed_1.dmDeleteDataFeed;
var actionHtmlSite_1 = __webpack_require__(21);
exports.dmAddLocalHtmlSite = actionHtmlSite_1.dmAddLocalHtmlSite;
exports.dmAddRemoteHtmlSite = actionHtmlSite_1.dmAddRemoteHtmlSite;
exports.dmAddBrightPlateHtmlSite = actionHtmlSite_1.dmAddBrightPlateHtmlSite;
exports.dmUpdateHtmlSite = actionHtmlSite_1.dmUpdateHtmlSite;
exports.dmDeleteHtmlSite = actionHtmlSite_1.dmDeleteHtmlSite;
var actionUserVariable_1 = __webpack_require__(22);
exports.dmAddUserVariable = actionUserVariable_1.dmAddUserVariable;
exports.dmUpdateUserVariable = actionUserVariable_1.dmUpdateUserVariable;
exports.dmDeleteUserVariable = actionUserVariable_1.dmDeleteUserVariable;
exports.dmDeleteUserVariables = actionUserVariable_1.dmDeleteUserVariables;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(74);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(75);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(76);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(3);
var bscore_1 = __webpack_require__(0);
var bsDmInterfaces_1 = __webpack_require__(4);
var bsDmContentItems_1 = __webpack_require__(12);
var bsDmDefaults_1 = __webpack_require__(13);
var bsDmError_1 = __webpack_require__(8);
var index_1 = __webpack_require__(16);
var index_2 = __webpack_require__(9);
var actionMediaState_1 = __webpack_require__(7);
var actionEvent_1 = __webpack_require__(15);
var actionTransition_1 = __webpack_require__(18);
var actionZone_1 = __webpack_require__(11);
var actionMediaState_2 = __webpack_require__(7);
var actionAssetMap_1 = __webpack_require__(17);
var actionBase_1 = __webpack_require__(10);
exports.PLAYLIST_ADD_MEDIA_STATE_AT_INDEX = 'DM_PLAYLIST_ADD_MEDIA_STATE_AT_INDEX';
exports.PLAYLIST_ADD_MEDIA_STATE_RANGE_AT_INDEX = 'DM_PLAYLIST_ADD_MEDIA_STATE_RANGE_AT_INDEX';
exports.PLAYLIST_DELETE_MEDIA_STATE_RANGE = 'DM_PLAYLIST_DELETE_MEDIA_STATE_RANGE';
exports.PLAYLIST_DELETE_MEDIA_STATE_AT_INDICES = 'DM_PLAYLIST_DELETE_MEDIA_STATE_AT_INDICES';
exports.PLAYLIST_MOVE_MEDIA_STATE_RANGE_TO_INDEX = 'DM_PLAYLIST_MOVE_MEDIA_STATE_RANGE_TO_INDEX';
exports.PLAYLIST_MOVE_MEDIA_STATE_INDICES_TO_INDEX = 'DM_PLAYLIST_MOVE_MEDIA_STATE_INDICES_TO_INDEX';
var getDefaultNameForContentItem = function (contentItem, index) {
    return contentItem.name ? contentItem.name : 'State' + index;
};
var getDefaultEventTypeForContentItem = function (contentItem) {
    var eventType = bscore_1.EventType.Timer;
    if (contentItem.type === bscore_1.ContentItemType.Video || contentItem.type === bscore_1.ContentItemType.Audio) {
        eventType = bscore_1.EventType.MediaEnd;
    }
    return eventType;
};
var getDefaultEventDataForEventType = function (eventType, contentItem) {
    switch (eventType) {
        case bscore_1.EventType.Timer: {
            var duration = 0;
            switch (contentItem.type) {
                case bscore_1.ContentItemType.Image: {
                    var defaults = bsDmDefaults_1.dmGetDefaultImageContentItemData();
                    duration = defaults.displayDuration;
                    break;
                }
                case bscore_1.ContentItemType.Html: {
                    var defaults = bsDmDefaults_1.dmGetDefaultHtmlContentItemData();
                    duration = defaults.displayDuration;
                    break;
                }
                case bscore_1.ContentItemType.LiveVideo: {
                    var defaults = bsDmDefaults_1.dmGetDefaultLiveVideoContentItemData();
                    duration = defaults.displayDuration;
                    break;
                }
                case bscore_1.ContentItemType.VideoStream: {
                    var defaults = bsDmDefaults_1.dmGetDefaultVideoStreamContentItemData();
                    duration = defaults.displayDuration;
                    break;
                }
                case bscore_1.ContentItemType.AudioStream: {
                    var defaults = bsDmDefaults_1.dmGetDefaultAudioStreamContentItemData();
                    duration = defaults.displayDuration;
                    break;
                }
            }
            return { interval: duration };
        }
    }
    return undefined;
};
var getDefaultTransitionType = function () { return bscore_1.TransitionType.NoEffect; };
function dmPlaylistAddMediaState(index, container, content, name, contentData, transitionType, eventType, eventData) {
    return function (dispatch, getState) {
        var newMediaStateId = utils_1.newBsDmId();
        var contentItem;
        var assetItem;
        var invalidContentItem = false;
        if (actionMediaState_1.dmContentIsAssetItem(content)) {
            assetItem = Object.assign({}, content);
            contentItem = bsDmContentItems_1.dmCreateMediaContentItem(assetItem.name, '', assetItem.mediaType);
        }
        else {
            invalidContentItem = bsDmContentItems_1.dmContentItemIsMediaContentItem(content);
            contentItem = content;
        }
        var contentItemData = bsDmContentItems_1.dmFilterContentItemData(contentItem.type, contentData);
        if (contentItemData) {
            contentItem = Object.assign({}, contentItem, contentItemData);
        }
        var mainAction = {
            type: exports.PLAYLIST_ADD_MEDIA_STATE_AT_INDEX,
            payload: { id: newMediaStateId, index: index, container: container, contentItem: contentItem, name: name, transitionType: transitionType, eventType: eventType, eventData: eventData },
        };
        if (invalidContentItem) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'MediaContentItems must be specified by AssetItem parameters', mainAction);
        }
        var dmState = actionBase_1.dmFilterDmState(getState());
        var playlistIds = index_1.dmGetZoneSimplePlaylist(dmState, { id: container.id });
        if (!playlistIds) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidOperation, 'Zone does not contain a valid simple playlist', mainAction);
        }
        var zoneType = index_2.dmGetZoneTypeById(dmState, { id: container.id });
        if (!bsDmContentItems_1.dmIsValidContentItemForPlaylist(contentItem, zoneType)) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'Content item type "' + contentItem.type + '" cannot be added to "' + zoneType + '" zone', mainAction);
        }
        if (index === undefined || index > playlistIds.length || index < 0) {
            index = playlistIds.length;
        }
        if (!name || name === '') {
            mainAction.payload.name = name = getDefaultNameForContentItem(contentItem, playlistIds.length + 1);
        }
        if (!eventType) {
            mainAction.payload.eventType = eventType = getDefaultEventTypeForContentItem(contentItem);
        }
        if (eventType === bscore_1.EventType.Timer && !(eventData && eventData.interval)) {
            mainAction.payload.eventData = eventData = getDefaultEventDataForEventType(eventType, contentItem);
        }
        if (!transitionType) {
            mainAction.payload.transitionType = transitionType = getDefaultTransitionType();
        }
        var prevMediaStateId;
        var nextMediaStateId;
        if (playlistIds.length > 1) {
            if (index > 0) {
                prevMediaStateId = playlistIds[index - 1];
            }
            else {
                prevMediaStateId = playlistIds[playlistIds.length - 1];
            }
            if (index === playlistIds.length) {
                nextMediaStateId = playlistIds[0];
            }
            else {
                nextMediaStateId = playlistIds[index];
            }
        }
        else if (playlistIds.length === 1) {
            prevMediaStateId = nextMediaStateId = playlistIds[0];
        }
        else {
            nextMediaStateId = newMediaStateId;
        }
        var prevMediaState;
        if (prevMediaStateId) {
            prevMediaState = index_1.dmGetMediaStateById(dmState, { id: prevMediaStateId });
        }
        var batchedActions = [];
        if (assetItem) {
            assetItem = actionAssetMap_1.dmSetAssetId(dmState, assetItem);
            contentItem.assetId = assetItem.id;
            batchedActions.push(actionAssetMap_1.dmPutAssetItemWithoutTest(assetItem));
            mainAction.payload.contentItem = contentItem;
        }
        var addMediaStateAction = actionMediaState_1.dmAddMediaStateWithContentItem(name, container, contentItem);
        addMediaStateAction.payload.id = newMediaStateId;
        batchedActions.push(addMediaStateAction);
        var eventAction = actionEvent_1.dmAddEvent(name + '_ev', eventType, newMediaStateId, eventData);
        var newEventId = eventAction.payload.id;
        batchedActions.push(eventAction);
        if (prevMediaState) {
            var transitionId = prevMediaState.eventList[0].defaultTransition.id;
            batchedActions.push(actionTransition_1.dmUpdateTransition({ id: transitionId, targetMediaStateId: newMediaStateId }));
        }
        batchedActions.push(actionTransition_1.dmAddTransition(name + '_tr', newEventId, nextMediaStateId, transitionType));
        if (index === 0) {
            batchedActions.push(actionZone_1.dmUpdateZoneWithoutTest({ id: container.id, initialMediaStateId: newMediaStateId }));
        }
        dispatch(actionBase_1.dmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.dmPlaylistAddMediaState = dmPlaylistAddMediaState;
function dmPlaylistAppendMediaState(container, content, name, contentData, transitionType, eventType, eventData) {
    return dmPlaylistAddMediaState(-1, container, content, name, contentData, transitionType, eventType, eventData);
}
exports.dmPlaylistAppendMediaState = dmPlaylistAppendMediaState;
function dmPlaylistAddMediaStateRange(index, container, content, name, contentData) {
    return function (dispatch, getState) {
        var getName = function (i) { return name && i < name.length ? name[i] : ''; };
        var mainAction = {
            type: exports.PLAYLIST_ADD_MEDIA_STATE_RANGE_AT_INDEX,
            payload: {
                index: index,
                container: container,
                id: [],
                name: [],
                contentItems: [],
            },
        };
        if (!content || content.length === 0) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'Invalid parameters for MediaState addition: no content provided', mainAction);
        }
        var dmState = actionBase_1.dmFilterDmState(getState());
        var playlistIds = index_1.dmGetZoneSimplePlaylist(dmState, { id: container.id });
        if (!playlistIds) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidOperation, 'Zone does not contain a valid simple playlist', mainAction);
        }
        var contentItems = [];
        var assetItems = [];
        var invalidContentItem = false;
        content.forEach(function (item, contentIndex) {
            var contentItem;
            if (actionMediaState_1.dmContentIsAssetItem(item)) {
                assetItems.push(item);
                contentItem = bsDmContentItems_1.dmCreateMediaContentItem(item.name, '', item.mediaType);
            }
            else {
                invalidContentItem = bsDmContentItems_1.dmContentItemIsMediaContentItem(item);
                contentItem = item;
                assetItems.push(undefined);
            }
            if (contentData) {
                var contentItemData = bsDmContentItems_1.dmFilterContentItemData(contentItem.type, contentData[contentIndex]);
                if (contentItemData) {
                    contentItem = Object.assign({}, contentItem, contentItemData);
                }
            }
            contentItems.push(contentItem);
        });
        if (invalidContentItem) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'MediaContentItems must be specified by AssetItem parameters', mainAction);
        }
        var zoneType = index_2.dmGetZoneTypeById(dmState, { id: container.id });
        var contentItemsInvalid = false;
        contentItems.forEach(function (item) {
            if (!bsDmContentItems_1.dmIsValidContentItemForPlaylist(item, zoneType)) {
                contentItemsInvalid = true;
            }
        });
        if (contentItemsInvalid) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'One or more content item types cannot be added to this Zone type', mainAction);
        }
        if (index === undefined || index > playlistIds.length || index < 0) {
            index = playlistIds.length;
        }
        var prevMediaStateId;
        var nextMediaStateId;
        if (playlistIds.length > 1) {
            if (index > 0) {
                prevMediaStateId = playlistIds[index - 1];
            }
            else {
                prevMediaStateId = playlistIds[playlistIds.length - 1];
            }
            if (index === playlistIds.length) {
                nextMediaStateId = playlistIds[0];
            }
            else {
                nextMediaStateId = playlistIds[index];
            }
        }
        else if (playlistIds.length === 1) {
            prevMediaStateId = nextMediaStateId = playlistIds[0];
        }
        var transitionType = getDefaultTransitionType();
        var batchedActions = [];
        var addedEvents = [];
        contentItems.forEach(function (item, itemIndex) {
            var eventType = getDefaultEventTypeForContentItem(item);
            var eventData = getDefaultEventDataForEventType(eventType, item);
            if (assetItems[itemIndex]) {
                var assetItem = Object.assign({}, assetItems[itemIndex]);
                assetItem = actionAssetMap_1.dmSetAssetId(dmState, assetItem);
                item.assetId = assetItem.id;
                batchedActions.push(actionAssetMap_1.dmPutAssetItemWithoutTest(assetItem));
            }
            mainAction.payload.contentItems.push(item);
            var mediaStateName = getName(itemIndex);
            if (mediaStateName === '') {
                mediaStateName = getDefaultNameForContentItem(item, playlistIds.length + itemIndex + 1);
            }
            var addMediaStateAction = actionMediaState_1.dmAddMediaStateWithContentItem(mediaStateName, container, item);
            mainAction.payload.id.push(addMediaStateAction.payload.id);
            mainAction.payload.name.push(mediaStateName);
            batchedActions.push(addMediaStateAction);
            var eventAction = actionEvent_1.dmAddEvent(name + '_ev', eventType, addMediaStateAction.payload.id, eventData);
            addedEvents.push(eventAction.payload.id);
            batchedActions.push(eventAction);
        });
        if (prevMediaStateId) {
            var prevMediaState = index_1.dmGetMediaStateById(dmState, { id: prevMediaStateId });
            if (prevMediaState) {
                var transitionId = prevMediaState.eventList[0].defaultTransition.id;
                batchedActions.push(actionTransition_1.dmUpdateTransition({
                    id: transitionId,
                    targetMediaStateId: mainAction.payload.id[0],
                }));
            }
        }
        addedEvents.forEach(function (eventId, itemIndex) {
            var nextStateId = itemIndex + 1 < mainAction.payload.id.length ?
                mainAction.payload.id[itemIndex + 1] :
                (nextMediaStateId ? nextMediaStateId : mainAction.payload.id[0]);
            batchedActions.push(actionTransition_1.dmAddTransition(mainAction.payload.name[itemIndex] + '_tr', eventId, nextStateId, transitionType));
        });
        if (index === 0) {
            batchedActions.push(actionZone_1.dmUpdateZoneWithoutTest({ id: container.id, initialMediaStateId: mainAction.payload.id[0] }));
        }
        dispatch(actionBase_1.dmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.dmPlaylistAddMediaStateRange = dmPlaylistAddMediaStateRange;
function dmPlaylistUpdateMediaState(params) {
    return function (dispatch, getState) {
        var updateMediaStateAction = actionMediaState_1.dmUpdateMediaState(params);
        var dmState = actionBase_1.dmFilterDmState(getState());
        var mediaState = index_2.dmGetMediaStateStateById(dmState, { id: params.id });
        var playlistIds = index_1.dmGetZoneSimplePlaylist(dmState, { id: mediaState.container.id });
        if (!playlistIds) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidOperation, 'Zone does not contain a valid simple playlist', updateMediaStateAction);
        }
        if (params.hasOwnProperty('contentItem')) {
            var zoneType = index_2.dmGetZoneTypeById(dmState, { id: mediaState.container.id });
            if (!bsDmContentItems_1.dmIsValidContentItemForPlaylist(params.contentItem, zoneType)) {
                throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'Content item type "' + params.contentItem.type + '" cannot be added to "' + zoneType + '" zone', updateMediaStateAction);
            }
        }
        dispatch(updateMediaStateAction);
        return updateMediaStateAction;
    };
}
exports.dmPlaylistUpdateMediaState = dmPlaylistUpdateMediaState;
function dmPlaylistDeleteMediaStateRange(container, startingIndex, count) {
    return function (dispatch, getState) {
        var mainAction = {
            type: exports.PLAYLIST_DELETE_MEDIA_STATE_RANGE,
            payload: { containerId: container.id, startingIndex: startingIndex, count: count },
        };
        var dmState = actionBase_1.dmFilterDmState(getState());
        var playlistIds = index_1.dmGetZoneSimplePlaylist(dmState, { id: container.id });
        if (!playlistIds) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidOperation, 'Zone does not contain a valid simple playlist', mainAction);
        }
        if (count === undefined) {
            count = 1;
        }
        if (startingIndex >= playlistIds.length || count === 0 || startingIndex + count > playlistIds.length) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'Invalid parameters for deletion range', mainAction);
        }
        var endingIndex = startingIndex + count;
        var mediaStateIdsToDelete = playlistIds.slice(startingIndex, endingIndex);
        var prevMediaStateId;
        var nextMediaStateId;
        var remainingMediaStates = playlistIds.length - count;
        if (remainingMediaStates > 1) {
            if (startingIndex > 0) {
                prevMediaStateId = playlistIds[startingIndex - 1];
            }
            else {
                prevMediaStateId = playlistIds[playlistIds.length - 1];
            }
            if (endingIndex === playlistIds.length) {
                nextMediaStateId = playlistIds[0];
            }
            else {
                nextMediaStateId = playlistIds[endingIndex];
            }
        }
        else if (remainingMediaStates === 1) {
            if (startingIndex > 0) {
                prevMediaStateId = nextMediaStateId = playlistIds[0];
            }
            else {
                prevMediaStateId = nextMediaStateId = playlistIds[playlistIds.length - 1];
            }
        }
        var prevMediaState;
        if (prevMediaStateId) {
            prevMediaState = index_1.dmGetMediaStateById(dmState, { id: prevMediaStateId });
        }
        var assetIds = [];
        mediaStateIdsToDelete.forEach(function (id) {
            var mediaStateState = index_2.dmGetMediaStateStateById(dmState, { id: id });
            if (mediaStateState && bsDmContentItems_1.dmContentItemIsMediaContentItem(mediaStateState.contentItem)) {
                assetIds.push(mediaStateState.contentItem.assetId);
            }
        });
        var batchedActions = [];
        if (assetIds.length > 0) {
            batchedActions.push(actionAssetMap_1.dmRemoveAssetItems(assetIds));
        }
        var deleteParams = actionMediaState_2.dmGetMediaStateDeleteParams(dmState, mediaStateIdsToDelete);
        batchedActions.push(actionMediaState_2.dmDeleteMediaStateWithParams(deleteParams));
        if (prevMediaState) {
            var transitionId = prevMediaState.eventList[0].defaultTransition.id;
            batchedActions.push(actionTransition_1.dmUpdateTransition({ id: transitionId, targetMediaStateId: nextMediaStateId }));
        }
        if (startingIndex === 0) {
            var newInitialMediaState = remainingMediaStates > 0 ? nextMediaStateId : bsDmInterfaces_1.BsDmIdNone;
            batchedActions.push(actionZone_1.dmUpdateZoneWithoutTest({ id: container.id, initialMediaStateId: newInitialMediaState }));
        }
        dispatch(actionBase_1.dmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.dmPlaylistDeleteMediaStateRange = dmPlaylistDeleteMediaStateRange;
function dmPlaylistDeleteMediaStatesAtIndices(container, indices) {
    return function (dispatch, getState) {
        var mainAction = {
            type: exports.PLAYLIST_DELETE_MEDIA_STATE_AT_INDICES,
            payload: { containerId: container.id, indices: indices },
        };
        var dmState = actionBase_1.dmFilterDmState(getState());
        var playlistIds = index_1.dmGetZoneSimplePlaylist(dmState, { id: container.id });
        if (!playlistIds) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidOperation, 'Zone does not contain a valid simple playlist', mainAction);
        }
        if (!indices || indices.length === 0) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'Incorrect parameters for media state delete by indices operation', mainAction);
        }
        indices.sort(function (a, b) { return a - b; });
        var tempIndices = indices.slice();
        var finalPlaylistIds = [];
        var mediaStateIdsToDelete = [];
        var mediaStateIdsForTransitionsToUpdate = [];
        playlistIds.forEach(function (id, index) {
            if (index === tempIndices[0]) {
                mediaStateIdsToDelete.push(id);
                var prevMediaState = finalPlaylistIds.length > 0 ? finalPlaylistIds[finalPlaylistIds.length - 1] : undefined;
                if (prevMediaState && mediaStateIdsForTransitionsToUpdate.indexOf(prevMediaState) < 0) {
                    mediaStateIdsForTransitionsToUpdate.push(prevMediaState);
                }
                tempIndices.shift();
            }
            else {
                finalPlaylistIds.push(id);
            }
        });
        if (indices[0] === 0 && finalPlaylistIds.length > 0) {
            var finalMediaState = finalPlaylistIds[finalPlaylistIds.length - 1];
            if (finalMediaState && mediaStateIdsForTransitionsToUpdate.indexOf(finalMediaState) < 0) {
                mediaStateIdsForTransitionsToUpdate.push(finalMediaState);
            }
        }
        var assetIds = [];
        mediaStateIdsToDelete.forEach(function (id) {
            var mediaStateState = index_2.dmGetMediaStateStateById(dmState, { id: id });
            if (mediaStateState && bsDmContentItems_1.dmContentItemIsMediaContentItem(mediaStateState.contentItem)) {
                assetIds.push(mediaStateState.contentItem.assetId);
            }
        });
        var batchedActions = [];
        if (assetIds.length > 0) {
            batchedActions.push(actionAssetMap_1.dmRemoveAssetItems(assetIds));
        }
        var deleteParams = actionMediaState_2.dmGetMediaStateDeleteParams(dmState, mediaStateIdsToDelete);
        batchedActions.push(actionMediaState_2.dmDeleteMediaStateWithParams(deleteParams));
        finalPlaylistIds.forEach(function (id, index) {
            var mediaState = index_1.dmGetMediaStateById(dmState, { id: id });
            var targetMediaStateId = index + 1 < finalPlaylistIds.length ? finalPlaylistIds[index + 1] : finalPlaylistIds[0];
            if (mediaState) {
                var transitionId = mediaState.eventList[0].defaultTransition.id;
                batchedActions.push(actionTransition_1.dmUpdateTransition({ id: transitionId, targetMediaStateId: targetMediaStateId }));
            }
        });
        if (indices[0] === 0) {
            var newInitialMediaState = finalPlaylistIds.length > 0 ? finalPlaylistIds[0] : bsDmInterfaces_1.BsDmIdNone;
            batchedActions.push(actionZone_1.dmUpdateZoneWithoutTest({ id: container.id, initialMediaStateId: newInitialMediaState }));
        }
        dispatch(actionBase_1.dmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.dmPlaylistDeleteMediaStatesAtIndices = dmPlaylistDeleteMediaStatesAtIndices;
function dmPlaylistMoveMediaStateRange(container, startingIndex, targetIndex, count) {
    return function (dispatch, getState) {
        var mainAction = {
            type: exports.PLAYLIST_MOVE_MEDIA_STATE_RANGE_TO_INDEX,
            payload: { containerId: container.id, startingIndex: startingIndex, targetIndex: targetIndex, count: count },
        };
        var dmState = actionBase_1.dmFilterDmState(getState());
        var playlistIds = index_1.dmGetZoneSimplePlaylist(dmState, { id: container.id });
        if (!playlistIds) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidOperation, 'Zone does not contain a valid simple playlist', mainAction);
        }
        if (count === undefined) {
            count = 1;
        }
        if (startingIndex >= playlistIds.length
            || count === 0
            || startingIndex === targetIndex
            || targetIndex + count > playlistIds.length) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'Incorrect parameters for media state move operation', mainAction);
        }
        var endingIndex = startingIndex + count;
        var intermediateListIds = playlistIds.slice();
        intermediateListIds.splice(startingIndex, count);
        var prevMediaStateIdForSrc;
        var nextMediaStateIdForSrc;
        if (intermediateListIds.length > 1) {
            if (startingIndex > 0) {
                prevMediaStateIdForSrc = playlistIds[startingIndex - 1];
            }
            else {
                prevMediaStateIdForSrc = playlistIds[playlistIds.length - 1];
            }
            if (endingIndex === playlistIds.length) {
                nextMediaStateIdForSrc = playlistIds[0];
            }
            else {
                nextMediaStateIdForSrc = playlistIds[endingIndex];
            }
        }
        var prevMediaStateIdForTarget;
        var nextMediaStateIdForTarget;
        if (targetIndex >= intermediateListIds.length || targetIndex === 0) {
            prevMediaStateIdForTarget = intermediateListIds[intermediateListIds.length - 1];
            nextMediaStateIdForTarget = intermediateListIds[0];
        }
        else {
            prevMediaStateIdForTarget = intermediateListIds[targetIndex - 1];
            nextMediaStateIdForTarget = intermediateListIds[targetIndex];
        }
        var firstMediaStateIdToMove = playlistIds[startingIndex];
        var lastMediaStateIdToMove = playlistIds[endingIndex - 1];
        var prevMediaStateForSrc;
        if (prevMediaStateIdForSrc) {
            prevMediaStateForSrc = index_1.dmGetMediaStateById(dmState, { id: prevMediaStateIdForSrc });
        }
        var prevMediaStateForTarget;
        if (prevMediaStateIdForTarget) {
            prevMediaStateForTarget = index_1.dmGetMediaStateById(dmState, { id: prevMediaStateIdForTarget });
        }
        var lastMediaStateToMove;
        if (lastMediaStateIdToMove) {
            lastMediaStateToMove = index_1.dmGetMediaStateById(dmState, { id: lastMediaStateIdToMove });
        }
        var batchedActions = [];
        if (prevMediaStateForSrc) {
            var transitionId = prevMediaStateForSrc.eventList[0].defaultTransition.id;
            batchedActions.push(actionTransition_1.dmUpdateTransition({ id: transitionId, targetMediaStateId: nextMediaStateIdForSrc }));
        }
        if (prevMediaStateForTarget) {
            var transitionId = prevMediaStateForTarget.eventList[0].defaultTransition.id;
            batchedActions.push(actionTransition_1.dmUpdateTransition({ id: transitionId, targetMediaStateId: firstMediaStateIdToMove }));
        }
        if (lastMediaStateToMove) {
            var transitionId = lastMediaStateToMove.eventList[0].defaultTransition.id;
            batchedActions.push(actionTransition_1.dmUpdateTransition({ id: transitionId, targetMediaStateId: nextMediaStateIdForTarget }));
        }
        if (startingIndex === 0 || targetIndex === 0) {
            var newInitialMediaStateId = targetIndex === 0 ? firstMediaStateIdToMove : intermediateListIds[0];
            batchedActions.push(actionZone_1.dmUpdateZoneWithoutTest({ id: container.id, initialMediaStateId: newInitialMediaStateId }));
        }
        dispatch(actionBase_1.dmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.dmPlaylistMoveMediaStateRange = dmPlaylistMoveMediaStateRange;
function dmPlaylistMoveMediaStatesAtIndices(container, indices, targetIndex) {
    return function (dispatch, getState) {
        var mainAction = {
            type: exports.PLAYLIST_MOVE_MEDIA_STATE_INDICES_TO_INDEX,
            payload: { containerId: container.id, indices: indices, targetIndex: targetIndex },
        };
        var dmState = actionBase_1.dmFilterDmState(getState());
        var playlistIds = index_1.dmGetZoneSimplePlaylist(dmState, { id: container.id });
        if (!playlistIds) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidOperation, 'Zone does not contain a valid simple playlist', mainAction);
        }
        if (!indices || indices.length === 0) {
            throw new bsDmError_1.BsDmError(bsDmError_1.DmErrorType.invalidParameters, 'Incorrect parameters for media state move by indices operation', mainAction);
        }
        if (targetIndex > playlistIds.length) {
            targetIndex = playlistIds.length;
        }
        indices.sort(function (a, b) { return a - b; });
        var tempIndices = indices.slice();
        var finalPlaylistIds = [];
        var movedMediaStateIds = [];
        var mediaStateIdsForTransitionsToUpdate = [];
        var finalTargetIndex = playlistIds.length;
        playlistIds.forEach(function (id, index) {
            if (index === tempIndices[0]) {
                movedMediaStateIds.push(id);
                mediaStateIdsForTransitionsToUpdate.push(id);
                var prevMediaState = finalPlaylistIds.length > 0 ? finalPlaylistIds[finalPlaylistIds.length - 1] : undefined;
                if (prevMediaState && mediaStateIdsForTransitionsToUpdate.indexOf(prevMediaState) < 0) {
                    mediaStateIdsForTransitionsToUpdate.push(prevMediaState);
                }
                if (index === targetIndex) {
                    ++targetIndex;
                }
                tempIndices.shift();
            }
            else {
                finalPlaylistIds.push(id);
                if (index === targetIndex) {
                    finalTargetIndex = finalPlaylistIds.length - 1;
                }
            }
        });
        mainAction.payload.targetIndex = targetIndex;
        var preInsertMediaState = finalTargetIndex > 0 ?
            finalPlaylistIds[finalTargetIndex - 1] : finalPlaylistIds[finalPlaylistIds.length - 1];
        if (preInsertMediaState && mediaStateIdsForTransitionsToUpdate.indexOf(preInsertMediaState) < 0) {
            mediaStateIdsForTransitionsToUpdate.push(preInsertMediaState);
        }
        if (indices[0] === 0 || targetIndex === playlistIds.length) {
            var finalMediaState = finalPlaylistIds[finalPlaylistIds.length - 1];
            if (finalMediaState && mediaStateIdsForTransitionsToUpdate.indexOf(finalMediaState) < 0) {
                mediaStateIdsForTransitionsToUpdate.push(finalMediaState);
            }
        }
        finalPlaylistIds.splice.apply(finalPlaylistIds, [finalTargetIndex, 0].concat(movedMediaStateIds));
        var batchedActions = [];
        finalPlaylistIds.forEach(function (id, index) {
            var transitionChangeIndex = mediaStateIdsForTransitionsToUpdate.indexOf(id);
            if (transitionChangeIndex >= 0) {
                var mediaState = index_1.dmGetMediaStateById(dmState, { id: id });
                var targetMediaStateId = index + 1 < finalPlaylistIds.length ? finalPlaylistIds[index + 1] : finalPlaylistIds[0];
                if (mediaState) {
                    var transitionId = mediaState.eventList[0].defaultTransition.id;
                    batchedActions.push(actionTransition_1.dmUpdateTransition({
                        id: transitionId,
                        targetMediaStateId: targetMediaStateId,
                    }));
                }
                mediaStateIdsForTransitionsToUpdate.splice(transitionChangeIndex, 1);
            }
        });
        if (indices[0] === 0 || targetIndex === 0) {
            var newInitialMediaState = finalPlaylistIds.length > 0 ? finalPlaylistIds[0] : bsDmInterfaces_1.BsDmIdNone;
            batchedActions.push(actionZone_1.dmUpdateZoneWithoutTest({ id: container.id, initialMediaStateId: newInitialMediaState }));
        }
        dispatch(actionBase_1.dmBatchActions(batchedActions));
        return mainAction;
    };
}
exports.dmPlaylistMoveMediaStatesAtIndices = dmPlaylistMoveMediaStatesAtIndices;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(30);
__webpack_require__(29);
__webpack_require__(28);
__export(__webpack_require__(9));
__export(__webpack_require__(27));
__export(__webpack_require__(16));
__export(__webpack_require__(4));
__export(__webpack_require__(5));
__export(__webpack_require__(12));
__export(__webpack_require__(14));
__export(__webpack_require__(8));
var bsDmClasses_1 = __webpack_require__(5);
exports.DmcSignMetadata = bsDmClasses_1.DmcSignMetadata;
exports.DmcZone = bsDmClasses_1.DmcZone;
exports.DmcDataFeed = bsDmClasses_1.DmcDataFeed;
var bsDmDefaults_1 = __webpack_require__(13);
exports.dmSetDefaultPropertyValues = bsDmDefaults_1.dmSetDefaultPropertyValues;
exports.dmResetDefaultPropertyValues = bsDmDefaults_1.dmResetDefaultPropertyValues;
exports.dmGetDefaultPropertyValues = bsDmDefaults_1.dmGetDefaultPropertyValues;
exports.dmGetDefaultSignPropertyData = bsDmDefaults_1.dmGetDefaultSignPropertyData;
exports.dmGetDefaultSerialPortList = bsDmDefaults_1.dmGetDefaultSerialPortList;
exports.dmGetDefaultGpioList = bsDmDefaults_1.dmGetDefaultGpioList;
exports.dmGetDefaultButtonPanelMap = bsDmDefaults_1.dmGetDefaultButtonPanelMap;
exports.dmGetDefaultAudioSignPropertyMap = bsDmDefaults_1.dmGetDefaultAudioSignPropertyMap;
exports.dmGetDefaultAudioZoneProperties = bsDmDefaults_1.dmGetDefaultAudioZoneProperties;
exports.dmGetDefaultEnhancedAudioZoneProperties = bsDmDefaults_1.dmGetDefaultEnhancedAudioZoneProperties;
exports.dmGetDefaultImageZoneProperties = bsDmDefaults_1.dmGetDefaultImageZoneProperties;
exports.dmGetDefaultVideoZoneProperties = bsDmDefaults_1.dmGetDefaultVideoZoneProperties;
exports.dmGetDefaultTickerZoneProperties = bsDmDefaults_1.dmGetDefaultTickerZoneProperties;
exports.dmGetDefaultClockZoneProperties = bsDmDefaults_1.dmGetDefaultClockZoneProperties;
exports.dmGetDefaultVideoContentItemData = bsDmDefaults_1.dmGetDefaultVideoContentItemData;
exports.dmGetDefaultAudioContentItemData = bsDmDefaults_1.dmGetDefaultAudioContentItemData;
exports.dmGetDefaultImageContentItemData = bsDmDefaults_1.dmGetDefaultImageContentItemData;
exports.dmGetDefaultHtmlContentItemData = bsDmDefaults_1.dmGetDefaultHtmlContentItemData;
exports.dmGetDefaultMrssDataFeedContentItemData = bsDmDefaults_1.dmGetDefaultMrssDataFeedContentItemData;
exports.dmGetDefaultLiveVideoContentItemData = bsDmDefaults_1.dmGetDefaultLiveVideoContentItemData;
exports.dmGetDefaultVideoStreamContentItemData = bsDmDefaults_1.dmGetDefaultVideoStreamContentItemData;
exports.dmGetDefaultAudioStreamContentItemData = bsDmDefaults_1.dmGetDefaultAudioStreamContentItemData;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var actionAssetMap_1 = __webpack_require__(17);
var actionSign_1 = __webpack_require__(2);
var assetsById = function (state, _a) {
    if (state === void 0) { state = {}; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
            return {};
        case actionSign_1.OPEN_SIGN: {
            var newState = payload.newState;
            return newState.assetMap ? newState.assetMap : {};
        }
        case actionAssetMap_1.PUT_ASSET_ITEM: {
            var id = payload.id;
            var newItem = void 0;
            if (state[id]) {
                newItem = Object.assign({}, state[id], payload);
            }
            else {
                newItem = Object.assign({}, payload);
            }
            newItem.refCount = newItem.refCount ? newItem.refCount + 1 : 1;
            return Object.assign({}, state, (_b = {}, _b[id] = newItem, _b));
        }
        case actionAssetMap_1.REMOVE_ASSET_ITEMS: {
            var assetIds = payload.assetIds;
            var newState_1 = Object.assign({}, state);
            assetIds.forEach(function (id) {
                if (newState_1[id].refCount && newState_1[id].refCount > 1) {
                    newState_1[id].refCount = newState_1[id].refCount - 1;
                }
                else {
                    delete newState_1[id];
                }
            });
            return newState_1;
        }
    }
    return state;
    var _b;
};
var assetMapReducer = assetsById;
exports.default = assetMapReducer;
exports.isValidAssetMapState = function (state) {
    return typeof state === 'object';
};
exports.getAssetItemById = function (state, props) {
    var asset = state[props.id];
    return asset ? Object.assign({}, asset) : null;
};
exports.getAssetIdByLocator = function (state, props) {
    var assetId = null;
    var locator = props.locator;
    Object.keys(state).some(function (id) {
        if (state[id].locator === locator) {
            assetId = id;
            return true;
        }
    });
    return assetId;
};
exports.getAssetItemByLocator = function (state, props) {
    var asset = null;
    var locator = props.locator;
    Object.keys(state).some(function (id) {
        var item = state[id];
        if (item[id].locator === locator) {
            asset = item;
            return true;
        }
    });
    return asset;
};
exports.getAssetItemIdsForSign = function (state) { return Object.keys(state); };


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(1);
var bscore_1 = __webpack_require__(0);
var bsDmClasses_1 = __webpack_require__(5);
var actionDataFeed_1 = __webpack_require__(20);
var actionSign_1 = __webpack_require__(2);
var createDataFeed = function (id, name, url, usage, updateInterval, useHeadRequest, parserPlugin, autoGenerateUserVariables, userVariableAccess) { return ({
    id: id, name: name, type: bscore_1.DataFeedType.URLDataFeed, url: url, usage: usage, updateInterval: updateInterval,
    useHeadRequest: useHeadRequest, parserPlugin: parserPlugin, autoGenerateUserVariables: autoGenerateUserVariables, userVariableAccess: userVariableAccess,
}); };
var createBsnDataFeed = function (id, name, bsnDataFeed, usage, updateInterval, useHeadRequest, parserPlugin, autoGenerateUserVariables, userVariableAccess, supportsAudio, matchPlayerTags) { return ({
    id: id,
    name: name,
    type: bsnDataFeed.type,
    url: bsnDataFeed.physicalPath,
    bsnId: bsnDataFeed.id,
    bsnName: bsnDataFeed.name,
    usage: usage, updateInterval: updateInterval, useHeadRequest: useHeadRequest, parserPlugin: parserPlugin,
    autoGenerateUserVariables: autoGenerateUserVariables, userVariableAccess: userVariableAccess,
    supportsAudio: supportsAudio, matchPlayerTags: matchPlayerTags,
}); };
var dataFeedsById = function (state, action) {
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
            return {};
        case actionSign_1.OPEN_SIGN:
            var newState = payload.newState;
            return newState.dataFeeds ? newState.dataFeeds : {};
        case actionDataFeed_1.ADD_DATA_FEED: {
            var _a = payload, id = _a.id, name_1 = _a.name, url = _a.url, usage = _a.usage, updateInterval = _a.updateInterval, useHeadRequest = _a.useHeadRequest, parserPlugin = _a.parserPlugin, autoGenerateUserVariables = _a.autoGenerateUserVariables, userVariableAccess = _a.userVariableAccess;
            return Object.assign({}, state, (_b = {}, _b[id] = createDataFeed(id, name_1, url, usage, updateInterval, useHeadRequest, parserPlugin, autoGenerateUserVariables, userVariableAccess), _b));
        }
        case actionDataFeed_1.ADD_BSN_DATA_FEED: {
            var _c = payload, id = _c.id, name_2 = _c.name, bsnDataFeed = _c.bsnDataFeed, usage = _c.usage, updateInterval = _c.updateInterval, useHeadRequest = _c.useHeadRequest, parserPlugin = _c.parserPlugin, autoGenerateUserVariables = _c.autoGenerateUserVariables, userVariableAccess = _c.userVariableAccess, supportsAudio = _c.supportsAudio, matchPlayerTags = _c.matchPlayerTags;
            return Object.assign({}, state, (_d = {}, _d[id] = createBsnDataFeed(id, name_2, bsnDataFeed, usage, updateInterval, useHeadRequest, parserPlugin, autoGenerateUserVariables, userVariableAccess, supportsAudio, matchPlayerTags), _d));
        }
        case actionDataFeed_1.UPDATE_DATA_FEED: {
            var id = payload.id;
            var updatedDataFeed = Object.assign({}, state[id], payload);
            return Object.assign({}, state, (_e = {}, _e[id] = updatedDataFeed, _e));
        }
        case actionDataFeed_1.UPDATE_BSN_DATA_FEED: {
            var id = payload.id;
            var updatedDataFeed = Object.assign({}, state[id], payload);
            return Object.assign({}, state, (_f = {}, _f[id] = updatedDataFeed, _f));
        }
        case actionDataFeed_1.DELETE_DATA_FEED:
            return lodash_1.omit(state, payload.id);
    }
    return state;
    var _b, _d, _e, _f;
};
var dataFeedReducer = dataFeedsById;
exports.default = dataFeedReducer;
exports.isValidDataFeedState = function (state) {
    return typeof state === 'object';
};
exports.getDataFeedById = function (state, props) {
    return state[props.id] ? new bsDmClasses_1.DmcDataFeed(state[props.id]) : null;
};
exports.getDataFeedIdsForSign = function (state) { return Object.keys(state); };
exports.getDataFeedNamesForSign = reselect_1.createSelector(function (state) { return state; }, function (dataFeeds) {
    var dataFeedNames = [];
    Object.keys(dataFeeds).forEach(function (id) {
        dataFeedNames.push(dataFeeds[id].name);
    });
    return dataFeedNames;
});
exports.getDataFeedByName = reselect_1.createSelector(function (state) { return state; }, function (_, props) { return props.name; }, function (dataFeeds, name) {
    var dataFeed;
    Object.keys(dataFeeds).some(function (id) {
        if (dataFeeds[id].name === name) {
            dataFeed = dataFeeds[id];
            return true;
        }
    });
    return dataFeed ? new bsDmClasses_1.DmcDataFeed(dataFeed) : null;
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(1);
var bscore_1 = __webpack_require__(0);
var bsDmClasses_1 = __webpack_require__(5);
var actionHtmlSite_1 = __webpack_require__(21);
var actionSign_1 = __webpack_require__(2);
var getHtmlSiteForType = function (payload) {
    var _a = payload, id = _a.id, name = _a.name, type = _a.type, queryString = _a.queryString;
    var baseSite = { id: id, name: name, type: type, queryString: queryString };
    switch (type) {
        case bscore_1.HtmlSiteType.Local: {
            var indexAssetId = payload.indexAssetId;
            return Object.assign(baseSite, { indexAssetId: indexAssetId });
        }
        case bscore_1.HtmlSiteType.Remote: {
            var url = payload.url;
            return Object.assign(baseSite, { url: url });
        }
        case bscore_1.HtmlSiteType.BrightPlate: {
            var _b = payload, brightPlateName = _b.brightPlateName, displayName = _b.displayName;
            return Object.assign(baseSite, { brightPlateName: brightPlateName, displayName: displayName });
        }
    }
    return undefined;
};
var getUpdateHtmlParamsForType = function (payload) {
    var type = payload.type;
    var updateParams = lodash_1.pick(payload, ['type', 'name', 'queryString']);
    switch (type) {
        case bscore_1.HtmlSiteType.Local: {
            var indexAssetId = payload.indexAssetId;
            return Object.assign(updateParams, lodash_1.pick(payload, 'indexAssetId'));
        }
        case bscore_1.HtmlSiteType.Remote: {
            var url = payload.url;
            return Object.assign(updateParams, lodash_1.pick(payload, 'url'));
        }
        case bscore_1.HtmlSiteType.BrightPlate: {
            var _a = payload, brightPlateName = _a.brightPlateName, displayName = _a.displayName;
            return Object.assign(updateParams, lodash_1.pick(payload, ['brightPlateName', 'displayName']));
        }
    }
    return undefined;
};
var htmlSitesById = function (state, action) {
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
            return {};
        case actionSign_1.OPEN_SIGN:
            var newState = payload.newState;
            return newState.htmlSites ? newState.htmlSites : {};
        case actionHtmlSite_1.ADD_HTML_SITE: {
            var id = payload.id;
            var newSite = getHtmlSiteForType(payload);
            if (newSite) {
                return Object.assign({}, state, (_a = {}, _a[id] = newSite, _a));
            }
            break;
        }
        case actionHtmlSite_1.UPDATE_HTML_SITE: {
            var id = payload.id;
            if (!payload.hasOwnProperty('type')) {
                payload.type = state[id].type;
            }
            var updateParams = getUpdateHtmlParamsForType(payload);
            if (updateParams) {
                var updatedHtmlSite = updateParams.type === state[id].type ?
                    Object.assign({}, state[id], updateParams) :
                    updateParams;
                return Object.assign({}, state, (_b = {}, _b[id] = updatedHtmlSite, _b));
            }
            break;
        }
        case actionHtmlSite_1.DELETE_HTML_SITE:
            return lodash_1.omit(state, payload.id);
    }
    return state;
    var _a, _b;
};
var htmlSiteReducer = htmlSitesById;
exports.default = htmlSiteReducer;
exports.isValidHtmlSiteState = function (state) {
    return typeof state === 'object';
};
exports.getHtmlSiteById = function (state, props) {
    return state[props.id] ? new bsDmClasses_1.DmcHtmlSite(state[props.id]) : null;
};
exports.getHtmlSiteIdsForSign = function (state) { return Object.keys(state); };
var getHtmlSitesById = function (state) { return state; };
exports.getHtmlSiteByName = reselect_1.createSelector(getHtmlSitesById, function (_, props) { return props.name; }, function (htmlSites, name) {
    var htmlSite;
    Object.keys(htmlSites).some(function (id) {
        if (htmlSites[id].name === name) {
            htmlSite = htmlSites[id];
            return true;
        }
    });
    return htmlSite ? new bsDmClasses_1.DmcHtmlSite(htmlSite) : null;
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(1);
var bsDmClasses_1 = __webpack_require__(5);
var actionTransition_1 = __webpack_require__(18);
var actionSign_1 = __webpack_require__(2);
var actionZone_1 = __webpack_require__(11);
var actionMediaState_1 = __webpack_require__(7);
var actionEvent_1 = __webpack_require__(15);
var createTransitionState = function (id, name, eventId, targetMediaStateId, transitionType, duration, condition) {
    return ({
        id: id,
        name: name,
        eventId: eventId,
        targetMediaStateId: targetMediaStateId,
        type: transitionType,
        duration: duration,
        condition: condition,
    });
};
var transitionsById = function (state, action) {
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
            return {};
        case actionSign_1.OPEN_SIGN:
            var newState = payload.newState;
            return newState.transitions;
        case actionTransition_1.ADD_TRANSITION: {
            var _a = payload, id = _a.id, name_1 = _a.name, eventId_1 = _a.eventId, targetMediaStateId = _a.targetMediaStateId, transitionType = _a.type, duration = _a.duration, condition = _a.condition;
            return Object.assign({}, state, (_b = {}, _b[id] = createTransitionState(id, name_1, eventId_1, targetMediaStateId, transitionType, duration, condition), _b));
        }
        case actionTransition_1.UPDATE_TRANSITION: {
            var id = payload.id;
            var updatedTransition = Object.assign({}, state[id], payload);
            return Object.assign({}, state, (_c = {}, _c[id] = updatedTransition, _c));
        }
        case actionTransition_1.DELETE_TRANSITION:
            return lodash_1.omit(state, payload.id);
        case actionEvent_1.DELETE_EVENT:
            var eventId_2 = payload.id;
            var newTransitionState_1 = {};
            var transitionsDeleted_1 = false;
            Object.keys(state).forEach(function (transitionId) {
                if (state[transitionId].eventId !== eventId_2) {
                    newTransitionState_1[transitionId] = state[transitionId];
                }
                else {
                    transitionsDeleted_1 = true;
                }
            });
            if (transitionsDeleted_1) {
                return newTransitionState_1;
            }
        case actionMediaState_1.DELETE_MEDIA_STATE:
        case actionZone_1.DELETE_ZONE:
            var transitionIds = payload.transitionIds;
            if (transitionIds && transitionIds.length) {
                return lodash_1.omit(state, transitionIds);
            }
    }
    return state;
    var _b, _c;
};
var transitionReducer = transitionsById;
exports.default = transitionReducer;
exports.isValidTransitionState = function (state) {
    return typeof state === 'object';
};
exports.getTransitionStateById = function (state, props) {
    var transitionState = state[props.id];
    return transitionState ? transitionState : null;
};
exports.getTransitionById = function (state, props) {
    var transitionState = state[props.id];
    return transitionState ? new bsDmClasses_1.DmcTransition(transitionState) : null;
};
var getTransitionsById = function (state) { return state; };
exports.getTransitionIdsForEvent = reselect_1.createSelector(getTransitionsById, function (_, props) { return props.id; }, function (transitions, eventId) {
    return Object.keys(transitions).filter(function (id, index, idArray) { return transitions[id].eventId === eventId; });
});


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(1);
var actionUserVariable_1 = __webpack_require__(22);
var actionSign_1 = __webpack_require__(2);
var createUserVariable = function (id, name, defaultValue, access, isNetworked, dataFeedId, systemVariable) { return ({
    id: id, name: name, defaultValue: defaultValue, access: access, isNetworked: isNetworked, dataFeedId: dataFeedId, systemVariable: systemVariable,
}); };
var userVariablesById = function (state, action) {
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case actionSign_1.NEW_SIGN:
            return {};
        case actionSign_1.OPEN_SIGN:
            var newState = payload.newState;
            return newState.userVariables ? newState.userVariables : {};
        case actionUserVariable_1.ADD_USER_VARIABLE: {
            var _a = payload, id = _a.id, name_1 = _a.name, defaultValue = _a.defaultValue, access = _a.access, isNetworked = _a.isNetworked, dataFeedId = _a.dataFeedId, systemVariable = _a.systemVariable;
            return Object.assign({}, state, (_b = {}, _b[id] = createUserVariable(id, name_1, defaultValue, access, isNetworked, dataFeedId, systemVariable), _b));
        }
        case actionUserVariable_1.UPDATE_USER_VARIABLE: {
            var id = payload.id;
            var updatedUserVariable = Object.assign({}, state[id], payload);
            return Object.assign({}, state, (_c = {}, _c[id] = updatedUserVariable, _c));
        }
        case actionUserVariable_1.DELETE_USER_VARIABLE:
            return lodash_1.omit(state, payload.id);
        case actionUserVariable_1.DELETE_USER_VARIABLES: {
            var ids = payload.ids;
            return lodash_1.omit(state, ids);
        }
    }
    return state;
    var _b, _c;
};
var userVariableReducer = userVariablesById;
exports.default = userVariableReducer;
exports.isValidUserVariableState = function (state) {
    return typeof state === 'object';
};
exports.getUserVariableById = function (state, props) {
    return state[props.id] ? Object.assign({}, state[props.id]) : null;
};
exports.getUserVariableIdsForSign = function (state) { return Object.keys(state); };
var getUserVariablesById = function (state) { return state; };
exports.getUserVariableByName = reselect_1.createSelector(getUserVariablesById, function (_, props) { return props.name; }, function (userVariables, name) {
    var userVariable;
    Object.keys(userVariables).some(function (id) {
        if (userVariables[id].name === name) {
            userVariable = userVariables[id];
            return true;
        }
    });
    return userVariable ? Object.assign({}, userVariable) : null;
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = __webpack_require__(6);
var bsDmInterfaces_1 = __webpack_require__(4);
var bsDmContentItems_1 = __webpack_require__(12);
var getOrderedMediaStateIdsForPlaylistInZone = function (zoneId, zoneType, initialMediaStateId, mediaStates, events, transitions) {
    var mediaStateIds = Object.keys(mediaStates).filter(function (id, index, idArray) { return mediaStates[id].container.id === zoneId; });
    var sortedMediaStateIds = [];
    var nextMediaStateId = initialMediaStateId;
    if (nextMediaStateId !== bsDmInterfaces_1.BsDmIdNone && mediaStateIds.length > 0) {
        var _loop_1 = function () {
            var index = mediaStateIds.indexOf(nextMediaStateId);
            if (index > -1) {
                mediaStateIds.splice(index, 1);
            }
            var mediaStateState = mediaStates[nextMediaStateId];
            if (!mediaStateState || !bsDmContentItems_1.dmIsValidContentItemForPlaylist(mediaStateState.contentItem, zoneType)) {
                return { value: null };
            }
            var eventListIds = Object.keys(events).filter(function (id) { return events[id].mediaStateId === nextMediaStateId; });
            if (!eventListIds || eventListIds.length !== 1) {
                return { value: null };
            }
            var transitionIds = Object.keys(transitions).filter(function (id) { return transitions[id].eventId === eventListIds[0]; });
            if (!transitionIds || transitionIds.length !== 1) {
                return { value: null };
            }
            var transitionState = transitions[transitionIds[0]];
            if (nextMediaStateId === transitionState.targetMediaStateId
                && (nextMediaStateId !== initialMediaStateId || mediaStateIds.length > 0)) {
                return { value: null };
            }
            sortedMediaStateIds.push(nextMediaStateId);
            nextMediaStateId = transitionState.targetMediaStateId;
            if (nextMediaStateId === initialMediaStateId) {
                if (mediaStateIds.length > 0) {
                    return { value: null };
                }
                return "break";
            }
        };
        while (true) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
            if (state_1 === "break")
                break;
        }
    }
    return sortedMediaStateIds;
};
exports.getZoneSimplePlaylist = reselect_1.createSelector(function (state, props) { return state.zones.zonesById[props.id]; }, function (state) { return state.mediaStates; }, function (state) { return state.events; }, function (state) { return state.transitions; }, function (zone, mediaStates, events, transitions) {
    return zone ?
        getOrderedMediaStateIdsForPlaylistInZone(zone.id, zone.type, zone.initialMediaStateId, mediaStates, events, transitions) :
        null;
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = __webpack_require__(6);
var bsDmContentItems_1 = __webpack_require__(12);
var reducerMediaState_1 = __webpack_require__(24);
var reducerEvent_1 = __webpack_require__(23);
var bsDmClasses_1 = __webpack_require__(5);
exports.createMediaStateObject = function (mediaStateState, events, transitions, assetMap) {
    if (mediaStateState) {
        var assetItem = void 0;
        var deNormEvents_1 = [];
        var eventIds = Object.keys(events).filter(function (id, index, idArray) {
            return events[id].mediaStateId === mediaStateState.id;
        });
        if (eventIds.length > 0) {
            eventIds.forEach(function (eventId) {
                var deNormEvent = { eventState: events[eventId] };
                var transitionStates = getSortedTransitionStatesForEventId(eventId, transitions);
                if (transitionStates) {
                    deNormEvent.transitionStates = transitionStates;
                }
                deNormEvents_1.push(deNormEvent);
            });
        }
        if (bsDmContentItems_1.dmContentItemIsMediaContentItem(mediaStateState.contentItem)) {
            assetItem = assetMap[mediaStateState.contentItem.assetId];
        }
        return new bsDmClasses_1.DmcMediaState(mediaStateState, deNormEvents_1, assetItem);
    }
    return null;
};
exports.createEventObject = function (eventState, transitions) {
    if (eventState) {
        var transitionStates = getSortedTransitionStatesForEventId(eventState.id, transitions);
        return new bsDmClasses_1.DmcEvent(eventState, transitionStates);
    }
    return null;
};
var getSortedTransitionStatesForEventId = function (eventId, transitions) {
    var transitionStates = [];
    var transitionIds = Object.keys(transitions).filter(function (id, index, idArray) {
        return transitions[id].eventId === eventId;
    });
    if (transitionIds.length > 0) {
        transitionIds.forEach(function (transitionId) {
            transitionStates.push(transitions[transitionId]);
        });
    }
    return transitionStates.length > 0 ? transitionStates : null;
};
exports.getInitialMediaStateIdForZone = reselect_1.createSelector(function (state, props) { return state.zones.zonesById[props.id]; }, function (zone) { return zone ? zone.initialMediaStateId : null; });
exports.getInitialMediaStateForZone = reselect_1.createSelector(function (state, props) { return state.zones.zonesById[props.id]; }, function (state) { return state.mediaStates; }, function (state) { return state.events; }, function (state) { return state.transitions; }, function (state) { return state.assetMap; }, function (zone, mediaStates, events, transitions, assetMap) {
    if (zone) {
        var mediaStateState = mediaStates[zone.initialMediaStateId];
        if (mediaStateState) {
            return exports.createMediaStateObject(mediaStateState, events, transitions, assetMap);
        }
    }
    return null;
});
exports.getMediaStateById = reselect_1.createSelector(function (state, props) { return reducerMediaState_1.getMediaStateStateById(state.mediaStates, props); }, function (state) { return state.events; }, function (state) { return state.transitions; }, function (state) { return state.assetMap; }, exports.createMediaStateObject);
exports.getMediaStateByName = reselect_1.createSelector(function (state, props) { return reducerMediaState_1.getMediaStateStateByName(state.mediaStates, props); }, function (state) { return state.events; }, function (state) { return state.transitions; }, function (state) { return state.assetMap; }, exports.createMediaStateObject);
exports.getEventById = reselect_1.createSelector(function (state, props) { return reducerEvent_1.getEventStateById(state.events, props); }, function (state) { return state.transitions; }, exports.createEventObject);
exports.canChangeZoneType = reselect_1.createSelector(function (_, props) { return props.type; }, function (state, props) { return state.zones.zonesById[props.id]; }, function (state) { return state.mediaStates; }, function (targetZoneType, zone, mediaStates) {
    return zone.type === targetZoneType
        || !Object.keys(mediaStates).some(function (mediaStateId) {
            var mediaState = mediaStates[mediaStateId];
            return mediaState.container.id === zone.id
                && !(zone.nonInteractive ? bsDmContentItems_1.dmIsValidContentItemTypeForPlaylist(mediaState.contentItem.type, targetZoneType) :
                    bsDmContentItems_1.dmIsValidContentItemTypeForZone(mediaState.contentItem.type, targetZoneType));
        });
});


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(79);

/***/ })
/******/ ]);
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(147),
    mapCacheDelete = __webpack_require__(148),
    mapCacheGet = __webpack_require__(149),
    mapCacheHas = __webpack_require__(150),
    mapCacheSet = __webpack_require__(151);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(37);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(107),
    isObjectLike = __webpack_require__(11);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(3),
    stubFalse = __webpack_require__(179);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObjectLike = __webpack_require__(11);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(111),
    baseUnary = __webpack_require__(121),
    nodeUtil = __webpack_require__(155);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var buffer = __webpack_require__(5);
var Buffer = buffer.Buffer;
var SlowBuffer = buffer.SlowBuffer;
var MAX_LEN = buffer.kMaxLength || 2147483647;
exports.alloc = function alloc(size, fill, encoding) {
  if (typeof Buffer.alloc === 'function') {
    return Buffer.alloc(size, fill, encoding);
  }
  if (typeof encoding === 'number') {
    throw new TypeError('encoding must not be number');
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  var enc = encoding;
  var _fill = fill;
  if (_fill === undefined) {
    enc = undefined;
    _fill = 0;
  }
  var buf = new Buffer(size);
  if (typeof _fill === 'string') {
    var fillBuf = new Buffer(_fill, enc);
    var flen = fillBuf.length;
    var i = -1;
    while (++i < size) {
      buf[i] = fillBuf[i % flen];
    }
  } else {
    buf.fill(_fill);
  }
  return buf;
}
exports.allocUnsafe = function allocUnsafe(size) {
  if (typeof Buffer.allocUnsafe === 'function') {
    return Buffer.allocUnsafe(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new Buffer(size);
}
exports.from = function from(value, encodingOrOffset, length) {
  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
    return Buffer.from(value, encodingOrOffset, length);
  }
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof value === 'string') {
    return new Buffer(value, encodingOrOffset);
  }
  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    var offset = encodingOrOffset;
    if (arguments.length === 1) {
      return new Buffer(value);
    }
    if (typeof offset === 'undefined') {
      offset = 0;
    }
    var len = length;
    if (typeof len === 'undefined') {
      len = value.byteLength - offset;
    }
    if (offset >= value.byteLength) {
      throw new RangeError('\'offset\' is out of bounds');
    }
    if (len > value.byteLength - offset) {
      throw new RangeError('\'length\' is out of bounds');
    }
    return new Buffer(value.slice(offset, offset + len));
  }
  if (Buffer.isBuffer(value)) {
    var out = new Buffer(value.length);
    value.copy(out, 0, 0, value.length);
    return out;
  }
  if (value) {
    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
      return new Buffer(value);
    }
    if (value.type === 'Buffer' && Array.isArray(value.data)) {
      return new Buffer(value.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
}
exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
  if (typeof Buffer.allocUnsafeSlow === 'function') {
    return Buffer.allocUnsafeSlow(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size >= MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new SlowBuffer(size);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = __webpack_require__(5).Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = nextTick;
} else {
  module.exports = process.nextTick;
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



module.exports = Writable;

/*<replacement>*/
var processNextTick = __webpack_require__(41);
/*</replacement>*/

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = __webpack_require__(14);
util.inherits = __webpack_require__(8);
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__(205)
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(72);
/*</replacement>*/

var Buffer = __webpack_require__(5).Buffer;
/*<replacement>*/
var bufferShim = __webpack_require__(39);
/*</replacement>*/

util.inherits(Writable, Stream);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__(6);

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(6);

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  processNextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    processNextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = Buffer.isBuffer(chunk);

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = bufferShim.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    chunk = decodeChunk(state, chunk, encoding);
    if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) processNextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24), __webpack_require__(73).setImmediate))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(42);
exports.Duplex = __webpack_require__(6);
exports.Transform = __webpack_require__(71);
exports.PassThrough = __webpack_require__(198);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bscore_1 = __webpack_require__(25);
function stringToBool(s) {
    return (s.toLowerCase() === 'true');
}
exports.stringToBool = stringToBool;
function stringToNumber(s) {
    return (Number(s));
}
exports.stringToNumber = stringToNumber;
function getAudioMixMode(bacAudioMixMode) {
    switch (bacAudioMixMode) {
        case 'Stereo': {
            return bscore_1.AudioMixModeType.Stereo;
        }
        case 'Left': {
            return bscore_1.AudioMixModeType.Left;
        }
        case 'Right': {
            return bscore_1.AudioMixModeType.Right;
        }
    }
}
exports.getAudioMixMode = getAudioMixMode;
function getTransitionType(bacTransition) {
    switch (bacTransition) {
        case 'No effect':
            return bscore_1.TransitionType.NoEffect;
        default:
            return bscore_1.TransitionType.NoEffect;
    }
}
exports.getTransitionType = getTransitionType;
function getViewMode(bpfViewMode) {
    var viewMode;
    switch (bpfViewMode) {
        case 'Fill Screen and Centered': {
            viewMode = bscore_1.ViewModeType.FillAndCenter;
            break;
        }
        case 'Scale to Fill': {
            viewMode = bscore_1.ViewModeType.ScaleToFill;
            break;
        }
        default: {
            viewMode = bscore_1.ViewModeType.Letterboxed;
            break;
        }
    }
    return viewMode;
}
exports.getViewMode = getViewMode;
function getAudioOutput(bpfAudioOutput) {
    switch (bpfAudioOutput) {
        case 'Analog Audio':
        default:
            return bscore_1.AudioOutputSelectionType.Analog;
        case 'USB Audio':
            return bscore_1.AudioOutputSelectionType.Usb;
        case 'SPDIF Audio with Stereo PCM (HDMI Audio)':
            return bscore_1.AudioOutputSelectionType.DigitalPcm;
        case 'SPDIF Audio, Raw Multichannel':
            return bscore_1.AudioOutputSelectionType.DigitalAc3;
        case 'Analog Audio with Raw Multichannel on SPDIF':
            return bscore_1.AudioOutputSelectionType.AnalogHdmiAc3;
    }
}
exports.getAudioOutput = getAudioOutput;
function getAudioMode(bpfAudioMode) {
    switch (bpfAudioMode) {
        case 'Multichannel Surround':
            return bscore_1.AudioModeType.Surround;
        case 'Multichannel Mixed Down to Stereo':
        default:
            return bscore_1.AudioModeType.Stereo;
        case 'No Audio':
            return bscore_1.AudioModeType.NoAudio;
        case 'Mono Left Mixdown':
            return bscore_1.AudioModeType.Left;
        case 'Mono Right Mixdown':
            return bscore_1.AudioModeType.Right;
    }
}
exports.getAudioMode = getAudioMode;
function getAudioMapping(bpfAudioMapping) {
    switch (bpfAudioMapping) {
        case 'Audio-1':
            return bscore_1.AudioMappingType.Audio1;
        case 'Audio-2':
            return bscore_1.AudioMappingType.Audio2;
        case 'Audio-3':
            return bscore_1.AudioMappingType.Audio3;
        case 'Audio-all':
            return bscore_1.AudioMappingType.AudioAll;
    }
}
exports.getAudioMapping = getAudioMapping;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(15),
    stackClear = __webpack_require__(164),
    stackDelete = __webpack_require__(165),
    stackGet = __webpack_require__(166),
    stackHas = __webpack_require__(167),
    stackSet = __webpack_require__(168);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(47),
    eq = __webpack_require__(21);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(53);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(51),
    toKey = __webpack_require__(20);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(108),
    isObjectLike = __webpack_require__(11);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(32),
    nativeKeys = __webpack_require__(154);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isKey = __webpack_require__(31),
    stringToPath = __webpack_require__(169),
    toString = __webpack_require__(180);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(46),
    baseAssignValue = __webpack_require__(47);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(89),
    arraySome = __webpack_require__(98),
    cacheHas = __webpack_require__(122);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(85),
    Map = __webpack_require__(28),
    Promise = __webpack_require__(87),
    Set = __webpack_require__(88),
    WeakMap = __webpack_require__(91),
    baseGetTag = __webpack_require__(9),
    toSource = __webpack_require__(60);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(21),
    isArrayLike = __webpack_require__(10),
    isIndex = __webpack_require__(30),
    isObject = __webpack_require__(2);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.10.0
(function() {
  "use strict";
  var bom, builder, escapeCDATA, events, isEmpty, processName, processors, requiresCDATA, sax, setImmediate, wrapCDATA,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  sax = __webpack_require__(182);

  events = __webpack_require__(23);

  builder = __webpack_require__(194);

  bom = __webpack_require__(183);

  processors = __webpack_require__(184);

  setImmediate = __webpack_require__(73).setImmediate;

  isEmpty = function(thing) {
    return typeof thing === "object" && (thing != null) && Object.keys(thing).length === 0;
  };

  processName = function(processors, processedName) {
    var i, len, process;
    for (i = 0, len = processors.length; i < len; i++) {
      process = processors[i];
      processedName = process(processedName);
    }
    return processedName;
  };

  requiresCDATA = function(entry) {
    return entry.indexOf('&') >= 0 || entry.indexOf('>') >= 0 || entry.indexOf('<') >= 0;
  };

  wrapCDATA = function(entry) {
    return "<![CDATA[" + (escapeCDATA(entry)) + "]]>";
  };

  escapeCDATA = function(entry) {
    return entry.replace(']]>', ']]]]><![CDATA[>');
  };

  exports.processors = processors;

  exports.defaults = {
    "0.1": {
      explicitCharkey: false,
      trim: true,
      normalize: true,
      normalizeTags: false,
      attrkey: "@",
      charkey: "#",
      explicitArray: false,
      ignoreAttrs: false,
      mergeAttrs: false,
      explicitRoot: false,
      validator: null,
      xmlns: false,
      explicitChildren: false,
      childkey: '@@',
      charsAsChildren: false,
      includeWhiteChars: false,
      async: false,
      strict: true,
      attrNameProcessors: null,
      attrValueProcessors: null,
      tagNameProcessors: null,
      valueProcessors: null,
      emptyTag: ''
    },
    "0.2": {
      explicitCharkey: false,
      trim: false,
      normalize: false,
      normalizeTags: false,
      attrkey: "$",
      charkey: "_",
      explicitArray: true,
      ignoreAttrs: false,
      mergeAttrs: false,
      explicitRoot: true,
      validator: null,
      xmlns: false,
      explicitChildren: false,
      preserveChildrenOrder: false,
      childkey: '$$',
      charsAsChildren: false,
      includeWhiteChars: false,
      async: false,
      strict: true,
      attrNameProcessors: null,
      attrValueProcessors: null,
      tagNameProcessors: null,
      valueProcessors: null,
      rootName: 'root',
      xmldec: {
        'version': '1.0',
        'encoding': 'UTF-8',
        'standalone': true
      },
      doctype: null,
      renderOpts: {
        'pretty': true,
        'indent': '  ',
        'newline': '\n'
      },
      headless: false,
      chunkSize: 10000,
      emptyTag: '',
      cdata: false
    }
  };

  exports.ValidationError = (function(superClass) {
    extend(ValidationError, superClass);

    function ValidationError(message) {
      this.message = message;
    }

    return ValidationError;

  })(Error);

  exports.Builder = (function() {
    function Builder(opts) {
      var key, ref, value;
      this.options = {};
      ref = exports.defaults["0.2"];
      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this.options[key] = value;
      }
      for (key in opts) {
        if (!hasProp.call(opts, key)) continue;
        value = opts[key];
        this.options[key] = value;
      }
    }

    Builder.prototype.buildObject = function(rootObj) {
      var attrkey, charkey, render, rootElement, rootName;
      attrkey = this.options.attrkey;
      charkey = this.options.charkey;
      if ((Object.keys(rootObj).length === 1) && (this.options.rootName === exports.defaults['0.2'].rootName)) {
        rootName = Object.keys(rootObj)[0];
        rootObj = rootObj[rootName];
      } else {
        rootName = this.options.rootName;
      }
      render = (function(_this) {
        return function(element, obj) {
          var attr, child, entry, index, key, value;
          if (typeof obj !== 'object') {
            if (_this.options.cdata && requiresCDATA(obj)) {
              element.raw(wrapCDATA(obj));
            } else {
              element.txt(obj);
            }
          } else {
            for (key in obj) {
              if (!hasProp.call(obj, key)) continue;
              child = obj[key];
              if (key === attrkey) {
                if (typeof child === "object") {
                  for (attr in child) {
                    value = child[attr];
                    element = element.att(attr, value);
                  }
                }
              } else if (key === charkey) {
                if (_this.options.cdata && requiresCDATA(child)) {
                  element = element.raw(wrapCDATA(child));
                } else {
                  element = element.txt(child);
                }
              } else if (Array.isArray(child)) {
                for (index in child) {
                  if (!hasProp.call(child, index)) continue;
                  entry = child[index];
                  if (typeof entry === 'string') {
                    if (_this.options.cdata && requiresCDATA(entry)) {
                      element = element.ele(key).raw(wrapCDATA(entry)).up();
                    } else {
                      element = element.ele(key, entry).up();
                    }
                  } else {
                    element = render(element.ele(key), entry).up();
                  }
                }
              } else if (typeof child === "object") {
                element = render(element.ele(key), child).up();
              } else {
                if (typeof child === 'string' && _this.options.cdata && requiresCDATA(child)) {
                  element = element.ele(key).raw(wrapCDATA(child)).up();
                } else {
                  if (child == null) {
                    child = '';
                  }
                  element = element.ele(key, child.toString()).up();
                }
              }
            }
          }
          return element;
        };
      })(this);
      rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
        headless: this.options.headless,
        allowSurrogateChars: this.options.allowSurrogateChars
      });
      return render(rootElement, rootObj).end(this.options.renderOpts);
    };

    return Builder;

  })();

  exports.Parser = (function(superClass) {
    extend(Parser, superClass);

    function Parser(opts) {
      this.parseString = bind(this.parseString, this);
      this.reset = bind(this.reset, this);
      this.assignOrPush = bind(this.assignOrPush, this);
      this.processAsync = bind(this.processAsync, this);
      var key, ref, value;
      if (!(this instanceof exports.Parser)) {
        return new exports.Parser(opts);
      }
      this.options = {};
      ref = exports.defaults["0.2"];
      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this.options[key] = value;
      }
      for (key in opts) {
        if (!hasProp.call(opts, key)) continue;
        value = opts[key];
        this.options[key] = value;
      }
      if (this.options.xmlns) {
        this.options.xmlnskey = this.options.attrkey + "ns";
      }
      if (this.options.normalizeTags) {
        if (!this.options.tagNameProcessors) {
          this.options.tagNameProcessors = [];
        }
        this.options.tagNameProcessors.unshift(processors.normalize);
      }
      this.reset();
    }

    Parser.prototype.processAsync = function() {
      var chunk, err, error1;
      try {
        if (this.remaining.length <= this.options.chunkSize) {
          chunk = this.remaining;
          this.remaining = '';
          this.saxParser = this.saxParser.write(chunk);
          return this.saxParser.close();
        } else {
          chunk = this.remaining.substr(0, this.options.chunkSize);
          this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
          this.saxParser = this.saxParser.write(chunk);
          return setImmediate(this.processAsync);
        }
      } catch (error1) {
        err = error1;
        if (!this.saxParser.errThrown) {
          this.saxParser.errThrown = true;
          return this.emit(err);
        }
      }
    };

    Parser.prototype.assignOrPush = function(obj, key, newValue) {
      if (!(key in obj)) {
        if (!this.options.explicitArray) {
          return obj[key] = newValue;
        } else {
          return obj[key] = [newValue];
        }
      } else {
        if (!(obj[key] instanceof Array)) {
          obj[key] = [obj[key]];
        }
        return obj[key].push(newValue);
      }
    };

    Parser.prototype.reset = function() {
      var attrkey, charkey, ontext, stack;
      this.removeAllListeners();
      this.saxParser = sax.parser(this.options.strict, {
        trim: false,
        normalize: false,
        xmlns: this.options.xmlns
      });
      this.saxParser.errThrown = false;
      this.saxParser.onerror = (function(_this) {
        return function(error) {
          _this.saxParser.resume();
          if (!_this.saxParser.errThrown) {
            _this.saxParser.errThrown = true;
            return _this.emit("error", error);
          }
        };
      })(this);
      this.saxParser.onend = (function(_this) {
        return function() {
          if (!_this.saxParser.ended) {
            _this.saxParser.ended = true;
            return _this.emit("end", _this.resultObject);
          }
        };
      })(this);
      this.saxParser.ended = false;
      this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
      this.resultObject = null;
      stack = [];
      attrkey = this.options.attrkey;
      charkey = this.options.charkey;
      this.saxParser.onopentag = (function(_this) {
        return function(node) {
          var key, newValue, obj, processedKey, ref;
          obj = {};
          obj[charkey] = "";
          if (!_this.options.ignoreAttrs) {
            ref = node.attributes;
            for (key in ref) {
              if (!hasProp.call(ref, key)) continue;
              if (!(attrkey in obj) && !_this.options.mergeAttrs) {
                obj[attrkey] = {};
              }
              newValue = _this.options.attrValueProcessors ? processName(_this.options.attrValueProcessors, node.attributes[key]) : node.attributes[key];
              processedKey = _this.options.attrNameProcessors ? processName(_this.options.attrNameProcessors, key) : key;
              if (_this.options.mergeAttrs) {
                _this.assignOrPush(obj, processedKey, newValue);
              } else {
                obj[attrkey][processedKey] = newValue;
              }
            }
          }
          obj["#name"] = _this.options.tagNameProcessors ? processName(_this.options.tagNameProcessors, node.name) : node.name;
          if (_this.options.xmlns) {
            obj[_this.options.xmlnskey] = {
              uri: node.uri,
              local: node.local
            };
          }
          return stack.push(obj);
        };
      })(this);
      this.saxParser.onclosetag = (function(_this) {
        return function() {
          var cdata, emptyStr, err, error1, key, node, nodeName, obj, objClone, old, s, xpath;
          obj = stack.pop();
          nodeName = obj["#name"];
          if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) {
            delete obj["#name"];
          }
          if (obj.cdata === true) {
            cdata = obj.cdata;
            delete obj.cdata;
          }
          s = stack[stack.length - 1];
          if (obj[charkey].match(/^\s*$/) && !cdata) {
            emptyStr = obj[charkey];
            delete obj[charkey];
          } else {
            if (_this.options.trim) {
              obj[charkey] = obj[charkey].trim();
            }
            if (_this.options.normalize) {
              obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
            }
            obj[charkey] = _this.options.valueProcessors ? processName(_this.options.valueProcessors, obj[charkey]) : obj[charkey];
            if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
              obj = obj[charkey];
            }
          }
          if (isEmpty(obj)) {
            obj = _this.options.emptyTag !== '' ? _this.options.emptyTag : emptyStr;
          }
          if (_this.options.validator != null) {
            xpath = "/" + ((function() {
              var i, len, results;
              results = [];
              for (i = 0, len = stack.length; i < len; i++) {
                node = stack[i];
                results.push(node["#name"]);
              }
              return results;
            })()).concat(nodeName).join("/");
            try {
              obj = _this.options.validator(xpath, s && s[nodeName], obj);
            } catch (error1) {
              err = error1;
              _this.emit("error", err);
            }
          }
          if (_this.options.explicitChildren && !_this.options.mergeAttrs && typeof obj === 'object') {
            if (!_this.options.preserveChildrenOrder) {
              node = {};
              if (_this.options.attrkey in obj) {
                node[_this.options.attrkey] = obj[_this.options.attrkey];
                delete obj[_this.options.attrkey];
              }
              if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
                node[_this.options.charkey] = obj[_this.options.charkey];
                delete obj[_this.options.charkey];
              }
              if (Object.getOwnPropertyNames(obj).length > 0) {
                node[_this.options.childkey] = obj;
              }
              obj = node;
            } else if (s) {
              s[_this.options.childkey] = s[_this.options.childkey] || [];
              objClone = {};
              for (key in obj) {
                if (!hasProp.call(obj, key)) continue;
                objClone[key] = obj[key];
              }
              s[_this.options.childkey].push(objClone);
              delete obj["#name"];
              if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                obj = obj[charkey];
              }
            }
          }
          if (stack.length > 0) {
            return _this.assignOrPush(s, nodeName, obj);
          } else {
            if (_this.options.explicitRoot) {
              old = obj;
              obj = {};
              obj[nodeName] = old;
            }
            _this.resultObject = obj;
            _this.saxParser.ended = true;
            return _this.emit("end", _this.resultObject);
          }
        };
      })(this);
      ontext = (function(_this) {
        return function(text) {
          var charChild, s;
          s = stack[stack.length - 1];
          if (s) {
            s[charkey] += text;
            if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, '').trim() !== '')) {
              s[_this.options.childkey] = s[_this.options.childkey] || [];
              charChild = {
                '#name': '__text__'
              };
              charChild[charkey] = text;
              if (_this.options.normalize) {
                charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
              }
              s[_this.options.childkey].push(charChild);
            }
            return s;
          }
        };
      })(this);
      this.saxParser.ontext = ontext;
      return this.saxParser.oncdata = (function(_this) {
        return function(text) {
          var s;
          s = ontext(text);
          if (s) {
            return s.cdata = true;
          }
        };
      })(this);
    };

    Parser.prototype.parseString = function(str, cb) {
      var err, error1;
      if ((cb != null) && typeof cb === "function") {
        this.on("end", function(result) {
          this.reset();
          return cb(null, result);
        });
        this.on("error", function(err) {
          this.reset();
          return cb(err);
        });
      }
      try {
        str = str.toString();
        if (str.trim() === '') {
          this.emit("end", null);
          return true;
        }
        str = bom.stripBOM(str);
        if (this.options.async) {
          this.remaining = str;
          setImmediate(this.processAsync);
          return this.saxParser;
        }
        return this.saxParser.write(str).close();
      } catch (error1) {
        err = error1;
        if (!(this.saxParser.errThrown || this.saxParser.ended)) {
          this.emit('error', err);
          return this.saxParser.errThrown = true;
        } else if (this.saxParser.ended) {
          throw err;
        }
      }
    };

    return Parser;

  })(events.EventEmitter);

  exports.parseString = function(str, a, b) {
    var cb, options, parser;
    if (b != null) {
      if (typeof b === 'function') {
        cb = b;
      }
      if (typeof a === 'object') {
        options = a;
      }
    } else {
      if (typeof a === 'function') {
        cb = a;
      }
      options = {};
    }
    parser = new exports.Parser(options);
    return parser.parseString(str, cb);
  };

}).call(this);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLCData, XMLNode, create,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  create = __webpack_require__(0);

  XMLNode = __webpack_require__(7);

  module.exports = XMLCData = (function(superClass) {
    extend(XMLCData, superClass);

    function XMLCData(parent, text) {
      XMLCData.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing CDATA text");
      }
      this.text = this.stringify.cdata(text);
    }

    XMLCData.prototype.clone = function() {
      return create(XMLCData.prototype, this);
    };

    XMLCData.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<![CDATA[' + this.text + ']]>';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLCData;

  })(XMLNode);

}).call(this);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLComment, XMLNode, create,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  create = __webpack_require__(0);

  XMLNode = __webpack_require__(7);

  module.exports = XMLComment = (function(superClass) {
    extend(XMLComment, superClass);

    function XMLComment(parent, text) {
      XMLComment.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing comment text");
      }
      this.text = this.stringify.comment(text);
    }

    XMLComment.prototype.clone = function() {
      return create(XMLComment.prototype, this);
    };

    XMLComment.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<!-- ' + this.text + ' -->';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLComment;

  })(XMLNode);

}).call(this);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLDeclaration, XMLNode, create, isObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  create = __webpack_require__(0);

  isObject = __webpack_require__(2);

  XMLNode = __webpack_require__(7);

  module.exports = XMLDeclaration = (function(superClass) {
    extend(XMLDeclaration, superClass);

    function XMLDeclaration(parent, version, encoding, standalone) {
      var ref;
      XMLDeclaration.__super__.constructor.call(this, parent);
      if (isObject(version)) {
        ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
      }
      if (!version) {
        version = '1.0';
      }
      this.version = this.stringify.xmlVersion(version);
      if (encoding != null) {
        this.encoding = this.stringify.xmlEncoding(encoding);
      }
      if (standalone != null) {
        this.standalone = this.stringify.xmlStandalone(standalone);
      }
    }

    XMLDeclaration.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<?xml';
      r += ' version="' + this.version + '"';
      if (this.encoding != null) {
        r += ' encoding="' + this.encoding + '"';
      }
      if (this.standalone != null) {
        r += ' standalone="' + this.standalone + '"';
      }
      r += '?>';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLDeclaration;

  })(XMLNode);

}).call(this);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLProcessingInstruction, create, isObject;

  create = __webpack_require__(0);

  isObject = __webpack_require__(2);

  XMLCData = __webpack_require__(62);

  XMLComment = __webpack_require__(63);

  XMLDTDAttList = __webpack_require__(187);

  XMLDTDEntity = __webpack_require__(189);

  XMLDTDElement = __webpack_require__(188);

  XMLDTDNotation = __webpack_require__(190);

  XMLProcessingInstruction = __webpack_require__(67);

  module.exports = XMLDocType = (function() {
    function XMLDocType(parent, pubID, sysID) {
      var ref, ref1;
      this.documentObject = parent;
      this.stringify = this.documentObject.stringify;
      this.children = [];
      if (isObject(pubID)) {
        ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
      }
      if (sysID == null) {
        ref1 = [pubID, sysID], sysID = ref1[0], pubID = ref1[1];
      }
      if (pubID != null) {
        this.pubID = this.stringify.dtdPubID(pubID);
      }
      if (sysID != null) {
        this.sysID = this.stringify.dtdSysID(sysID);
      }
    }

    XMLDocType.prototype.element = function(name, value) {
      var child;
      child = new XMLDTDElement(this, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      var child;
      child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.entity = function(name, value) {
      var child;
      child = new XMLDTDEntity(this, false, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.pEntity = function(name, value) {
      var child;
      child = new XMLDTDEntity(this, true, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.notation = function(name, value) {
      var child;
      child = new XMLDTDNotation(this, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.cdata = function(value) {
      var child;
      child = new XMLCData(this, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.comment = function(value) {
      var child;
      child = new XMLComment(this, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.instruction = function(target, value) {
      var child;
      child = new XMLProcessingInstruction(this, target, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.root = function() {
      return this.documentObject.root();
    };

    XMLDocType.prototype.document = function() {
      return this.documentObject;
    };

    XMLDocType.prototype.toString = function(options, level) {
      var child, i, indent, len, newline, offset, pretty, r, ref, ref1, ref2, ref3, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<!DOCTYPE ' + this.root().name;
      if (this.pubID && this.sysID) {
        r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
      } else if (this.sysID) {
        r += ' SYSTEM "' + this.sysID + '"';
      }
      if (this.children.length > 0) {
        r += ' [';
        if (pretty) {
          r += newline;
        }
        ref3 = this.children;
        for (i = 0, len = ref3.length; i < len; i++) {
          child = ref3[i];
          r += child.toString(options, level + 1);
        }
        r += ']';
      }
      r += '>';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    XMLDocType.prototype.ele = function(name, value) {
      return this.element(name, value);
    };

    XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
    };

    XMLDocType.prototype.ent = function(name, value) {
      return this.entity(name, value);
    };

    XMLDocType.prototype.pent = function(name, value) {
      return this.pEntity(name, value);
    };

    XMLDocType.prototype.not = function(name, value) {
      return this.notation(name, value);
    };

    XMLDocType.prototype.dat = function(value) {
      return this.cdata(value);
    };

    XMLDocType.prototype.com = function(value) {
      return this.comment(value);
    };

    XMLDocType.prototype.ins = function(target, value) {
      return this.instruction(target, value);
    };

    XMLDocType.prototype.up = function() {
      return this.root();
    };

    XMLDocType.prototype.doc = function() {
      return this.document();
    };

    return XMLDocType;

  })();

}).call(this);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLAttribute, XMLElement, XMLNode, XMLProcessingInstruction, create, every, isFunction, isObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  create = __webpack_require__(0);

  isObject = __webpack_require__(2);

  isFunction = __webpack_require__(22);

  every = __webpack_require__(172);

  XMLNode = __webpack_require__(7);

  XMLAttribute = __webpack_require__(185);

  XMLProcessingInstruction = __webpack_require__(67);

  module.exports = XMLElement = (function(superClass) {
    extend(XMLElement, superClass);

    function XMLElement(parent, name, attributes) {
      XMLElement.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing element name");
      }
      this.name = this.stringify.eleName(name);
      this.children = [];
      this.instructions = [];
      this.attributes = {};
      if (attributes != null) {
        this.attribute(attributes);
      }
    }

    XMLElement.prototype.clone = function() {
      var att, attName, clonedSelf, i, len, pi, ref, ref1;
      clonedSelf = create(XMLElement.prototype, this);
      if (clonedSelf.isRoot) {
        clonedSelf.documentObject = null;
      }
      clonedSelf.attributes = {};
      ref = this.attributes;
      for (attName in ref) {
        if (!hasProp.call(ref, attName)) continue;
        att = ref[attName];
        clonedSelf.attributes[attName] = att.clone();
      }
      clonedSelf.instructions = [];
      ref1 = this.instructions;
      for (i = 0, len = ref1.length; i < len; i++) {
        pi = ref1[i];
        clonedSelf.instructions.push(pi.clone());
      }
      clonedSelf.children = [];
      this.children.forEach(function(child) {
        var clonedChild;
        clonedChild = child.clone();
        clonedChild.parent = clonedSelf;
        return clonedSelf.children.push(clonedChild);
      });
      return clonedSelf;
    };

    XMLElement.prototype.attribute = function(name, value) {
      var attName, attValue;
      if (name != null) {
        name = name.valueOf();
      }
      if (isObject(name)) {
        for (attName in name) {
          if (!hasProp.call(name, attName)) continue;
          attValue = name[attName];
          this.attribute(attName, attValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        if (!this.options.skipNullAttributes || (value != null)) {
          this.attributes[name] = new XMLAttribute(this, name, value);
        }
      }
      return this;
    };

    XMLElement.prototype.removeAttribute = function(name) {
      var attName, i, len;
      if (name == null) {
        throw new Error("Missing attribute name");
      }
      name = name.valueOf();
      if (Array.isArray(name)) {
        for (i = 0, len = name.length; i < len; i++) {
          attName = name[i];
          delete this.attributes[attName];
        }
      } else {
        delete this.attributes[name];
      }
      return this;
    };

    XMLElement.prototype.instruction = function(target, value) {
      var i, insTarget, insValue, instruction, len;
      if (target != null) {
        target = target.valueOf();
      }
      if (value != null) {
        value = value.valueOf();
      }
      if (Array.isArray(target)) {
        for (i = 0, len = target.length; i < len; i++) {
          insTarget = target[i];
          this.instruction(insTarget);
        }
      } else if (isObject(target)) {
        for (insTarget in target) {
          if (!hasProp.call(target, insTarget)) continue;
          insValue = target[insTarget];
          this.instruction(insTarget, insValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        instruction = new XMLProcessingInstruction(this, target, value);
        this.instructions.push(instruction);
      }
      return this;
    };

    XMLElement.prototype.toString = function(options, level) {
      var att, child, i, indent, instruction, j, len, len1, name, newline, offset, pretty, r, ref, ref1, ref2, ref3, ref4, ref5, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      ref3 = this.instructions;
      for (i = 0, len = ref3.length; i < len; i++) {
        instruction = ref3[i];
        r += instruction.toString(options, level);
      }
      if (pretty) {
        r += space;
      }
      r += '<' + this.name;
      ref4 = this.attributes;
      for (name in ref4) {
        if (!hasProp.call(ref4, name)) continue;
        att = ref4[name];
        r += att.toString(options);
      }
      if (this.children.length === 0 || every(this.children, function(e) {
        return e.value === '';
      })) {
        r += '/>';
        if (pretty) {
          r += newline;
        }
      } else if (pretty && this.children.length === 1 && (this.children[0].value != null)) {
        r += '>';
        r += this.children[0].value;
        r += '</' + this.name + '>';
        r += newline;
      } else {
        r += '>';
        if (pretty) {
          r += newline;
        }
        ref5 = this.children;
        for (j = 0, len1 = ref5.length; j < len1; j++) {
          child = ref5[j];
          r += child.toString(options, level + 1);
        }
        if (pretty) {
          r += space;
        }
        r += '</' + this.name + '>';
        if (pretty) {
          r += newline;
        }
      }
      return r;
    };

    XMLElement.prototype.att = function(name, value) {
      return this.attribute(name, value);
    };

    XMLElement.prototype.ins = function(target, value) {
      return this.instruction(target, value);
    };

    XMLElement.prototype.a = function(name, value) {
      return this.attribute(name, value);
    };

    XMLElement.prototype.i = function(target, value) {
      return this.instruction(target, value);
    };

    return XMLElement;

  })(XMLNode);

}).call(this);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLProcessingInstruction, create;

  create = __webpack_require__(0);

  module.exports = XMLProcessingInstruction = (function() {
    function XMLProcessingInstruction(parent, target, value) {
      this.stringify = parent.stringify;
      if (target == null) {
        throw new Error("Missing instruction target");
      }
      this.target = this.stringify.insTarget(target);
      if (value) {
        this.value = this.stringify.insValue(value);
      }
    }

    XMLProcessingInstruction.prototype.clone = function() {
      return create(XMLProcessingInstruction.prototype, this);
    };

    XMLProcessingInstruction.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<?';
      r += this.target;
      if (this.value) {
        r += ' ' + this.value;
      }
      r += '?>';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLProcessingInstruction;

  })();

}).call(this);


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

module.exports = Readable;

/*<replacement>*/
var processNextTick = __webpack_require__(41);
/*</replacement>*/

/*<replacement>*/
var isArray = __webpack_require__(69);
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__(23).EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(72);
/*</replacement>*/

var Buffer = __webpack_require__(5).Buffer;
/*<replacement>*/
var bufferShim = __webpack_require__(39);
/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(14);
util.inherits = __webpack_require__(8);
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(207);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__(199);
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__(6);

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(40).StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(6);

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = bufferShim.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');
      stream.emit('error', _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(40).StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    processNextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        processNextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    processNextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = bufferShim.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    processNextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__(6);

/*<replacement>*/
var util = __webpack_require__(14);
util.inherits = __webpack_require__(8);
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er, data) {
      done(stream, er, data);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data !== null && data !== undefined) stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23).EventEmitter;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(203);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/array/from");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/object/assign");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fse = __webpack_require__(206);
var xml2js = __webpack_require__(61);
var redux_1 = __webpack_require__(26);
var redux_thunk_1 = __webpack_require__(181);
var bsdatamodel_1 = __webpack_require__(27);
var reducers_1 = __webpack_require__(84);
var bpfToJson_1 = __webpack_require__(81);
var signBuilder_1 = __webpack_require__(83);
function importBPF(bpfFilePath) {
    console.log('importBPF entry');
    var store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(redux_thunk_1.default));
    return executeImportBPF(bpfFilePath, store.dispatch, store.getState);
}
exports.default = importBPF;
function executeImportBPF(bpfFilePath, dispatch, getState) {
    return new Promise(function (resolve, reject) {
        readFile(bpfFilePath).then(function (bpfBuf) {
            return bpfToJson_1.bpfToJson(bpfBuf);
        }).then(function (bpf) {
            console.log(bpf);
            signBuilder_1.createSign(bpf, dispatch, getState);
            var signState = bsdatamodel_1.dmGetSignState(getState().bsdm);
            resolve(signState);
        });
    });
}
function readFile(filePath) {
    return new Promise(function (resolve, reject) {
        fse.readFile(filePath, function (err, buf) {
            if (err) {
                reject(err);
            }
            resolve(buf);
        });
    });
}


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xml2js = __webpack_require__(61);
var Converters = __webpack_require__(44);
function bpfToJson(xmlBPF) {
    return new Promise(function (resolve) {
        stringToJson(xmlBPF).then(function (jsonBPF) {
            var bpf = fixJsonBPF(jsonBPF);
            resolve(bpf);
        });
    });
}
exports.bpfToJson = bpfToJson;
function fixJsonBPF(rawBPF) {
    var bpf = {};
    var rawBrightAuthor = rawBPF.BrightAuthor;
    var rawPresentationParameters = rawBrightAuthor.$;
    var rawMetadata = rawBrightAuthor.meta;
    var rawZones = rawBrightAuthor.zones;
    var rawZone = rawZones.zone;
    bpf.presentationParameters = fixPresentationParameters(rawPresentationParameters);
    bpf.metadata = fixMetadata(rawMetadata);
    bpf.zones = fixZones(rawZones);
    console.log(bpf);
    return bpf;
}
function fixPresentationParameters(rawPresentationParameters) {
    var presentationParametersSpec = [
        { name: 'BrightAuthorVersion', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'version', type: 'number' }
    ];
    return fixJson(presentationParametersSpec, rawPresentationParameters);
}
function fixMetadata(rawMetadata) {
    var DirectoryLocations = rawMetadata.DirectoryLocations, SerialPortConfiguration = rawMetadata.SerialPortConfiguration, backgroundScreenColor = rawMetadata.backgroundScreenColor, beacons = rawMetadata.beacons, htmlSites = rawMetadata.htmlSites, liveDataFeeds = rawMetadata.liveDataFeeds, parserPlugins = rawMetadata.parserPlugins, presentationIdentifiers = rawMetadata.presentationIdentifiers, scriptPlugins = rawMetadata.scriptPlugins, userDefinedEvents = rawMetadata.userDefinedEvents, userVariables = rawMetadata.userVariables;
    var metadataSpec = [
        { name: 'name', type: 'string' },
        { name: 'videoMode', type: 'string' },
        { name: 'model', type: 'string' },
        { name: 'alphabetizeVariableNames', type: 'boolean' },
        { name: 'autoCreateMediaCounterVariables', type: 'boolean' },
        { name: 'delayScheduleChangeUntilMediaEndEvent', type: 'boolean' },
        { name: 'deviceWebPageDisplay', type: 'string' },
        { name: 'flipCoordinates', type: 'boolean' },
        { name: 'forceResolution', type: 'boolean' },
        { name: 'graphicsZOrder', type: 'string' },
        { name: 'htmlEnableJavascriptConsole', type: 'boolean' },
        { name: 'inactivityTime', type: 'number' },
        { name: 'inactivityTimeout', type: 'boolean' },
        { name: 'isMosaic', type: 'boolean' },
        { name: 'language', type: 'string' },
        { name: 'languageKey', type: 'string' },
        { name: 'monitorOrientation', type: 'string' },
        { name: 'monitorOverscan', type: 'string' },
        { name: 'resetVariablesOnPresentationStart', type: 'boolean' },
        { name: 'tenBitColorEnabled', type: 'boolean' },
        { name: 'touchCursorDisplayMode', type: 'string' },
        { name: 'udpDestinationAddress', type: 'string' },
        { name: 'udpDestinationAddressType', type: 'string' },
        { name: 'udpDestinationPort', type: 'number' },
        { name: 'udpReceiverPort', type: 'number' },
        { name: 'videoConnector', type: 'string' },
        { name: 'BP200AConfiguration', type: 'number' },
        { name: 'BP200AConfigureAutomatically', type: 'boolean' },
        { name: 'BP200BConfiguration', type: 'number' },
        { name: 'BP200BConfigureAutomatically', type: 'boolean' },
        { name: 'BP200CConfiguration', type: 'number' },
        { name: 'BP200CConfigureAutomatically', type: 'boolean' },
        { name: 'BP200DConfiguration', type: 'number' },
        { name: 'BP200DConfigureAutomatically', type: 'boolean' },
        { name: 'BP900AConfiguration', type: 'number' },
        { name: 'BP900AConfigureAutomatically', type: 'boolean' },
        { name: 'BP900BConfiguration', type: 'number' },
        { name: 'BP900BConfigureAutomatically', type: 'boolean' },
        { name: 'BP900CConfiguration', type: 'number' },
        { name: 'BP900CConfigureAutomatically', type: 'boolean' },
        { name: 'BP900DConfiguration', type: 'number' },
        { name: 'BP900DConfigureAutomatically', type: 'boolean' },
        { name: 'audio1MaxVolume', type: 'number' },
        { name: 'audio1MinVolume', type: 'number' },
        { name: 'audio2MaxVolume', type: 'number' },
        { name: 'audio2MinVolume', type: 'number' },
        { name: 'audio3MaxVolume', type: 'number' },
        { name: 'audio3MinVolume', type: 'number' },
        { name: 'audioConfiguration', type: 'string' },
        { name: 'fullResGraphicsEnabled', type: 'boolean' },
        { name: 'gpio0', type: 'string' },
        { name: 'gpio1', type: 'string' },
        { name: 'gpio2', type: 'string' },
        { name: 'gpio3', type: 'string' },
        { name: 'gpio4', type: 'string' },
        { name: 'gpio5', type: 'string' },
        { name: 'gpio6', type: 'string' },
        { name: 'gpio7', type: 'string' },
        { name: 'hdmiMaxVolume', type: 'number' },
        { name: 'hdmiMinVolume', type: 'number' },
        { name: 'isBackup', type: 'boolean' },
        { name: 'networkedVariablesUpdateInterval', type: 'number' },
        { name: 'spdifMaxVolume', type: 'number' },
        { name: 'spdifMinVolume', type: 'number' },
        { name: 'usbAMaxVolume', type: 'number' },
        { name: 'usbAMinVolume', type: 'number' },
        { name: 'usbBMaxVolume', type: 'number' },
        { name: 'usbBMinVolume', type: 'number' },
        { name: 'usbCMaxVolume', type: 'number' },
        { name: 'usbCMinVolume', type: 'number' },
        { name: 'usbDMaxVolume', type: 'number' },
        { name: 'usbDMinVolume', type: 'number' },
    ];
    var metadata = fixJson(metadataSpec, rawMetadata);
    metadata.backgroundScreenColor = fixBackgroundScreenColor(backgroundScreenColor);
    metadata.SerialPortConfigurations = fixSerialPortConfiguration(SerialPortConfiguration);
    return metadata;
}
function fixSerialPortConfiguration(rawSerialPortConfigurations) {
    var serialPortConfigurations = [];
    var serialPortConfigurationSpec = [
        { name: 'baudRate', type: 'number' },
        { name: 'connectedDevice', type: 'string' },
        { name: 'dataBits', type: 'number' },
        { name: 'invertSignals', type: 'bool' },
        { name: 'parity', type: 'string' },
        { name: 'port', type: 'number' },
        { name: 'protocol', type: 'string' },
        { name: 'receiveEol', type: 'string' },
        { name: 'sendEol', type: 'string' },
        { name: 'stopBits', type: 'number' },
    ];
    rawSerialPortConfigurations.forEach(function (rawSerialPortConfiguration) {
        serialPortConfigurations.push(fixJson(serialPortConfigurationSpec, rawSerialPortConfiguration));
    });
    return serialPortConfigurations;
}
function fixBackgroundScreenColor(rawBackgroundScreenColor) {
    var backgroundScreenColorSpec = [
        { name: 'a', type: 'number' },
        { name: 'r', type: 'number' },
        { name: 'g', type: 'number' },
        { name: 'b', type: 'number' },
    ];
    return fixJson(backgroundScreenColorSpec, rawBackgroundScreenColor.$);
}
function fixZones(rawZones) {
    var zones = [];
    zones.push(fixZone(rawZones.zone));
    return zones;
}
function fixZone(rawZone) {
    var zone = fixZoneParameters(rawZone);
    zone.zoneSpecificParameters = fixZoneSpecificParameters(rawZone.zoneSpecificParameters);
    zone.playlist = fixZonePlaylist(rawZone.playlist);
    return zone;
}
function fixZoneParameters(rawZone) {
    var zoneParametersSpec = [
        { name: 'height', type: 'number' },
        { name: 'horizontalOffset', type: 'number' },
        { name: 'id', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'verticalOffset', type: 'number' },
        { name: 'width', type: 'number' },
        { name: 'x', type: 'number' },
        { name: 'y', type: 'number' },
        { name: 'zoomValue', type: 'number' },
    ];
    return fixJson(zoneParametersSpec, rawZone);
}
function fixZoneSpecificParameters(rawZoneSpecificParameters) {
    var zoneSpecificParametersSpec = [
        { name: 'analogOutput', type: 'string' },
        { name: 'analog2Output', type: 'string' },
        { name: 'analog3Output', type: 'string' },
        { name: 'audioMapping', type: 'string' },
        { name: 'audioMixMode', type: 'string' },
        { name: 'audioMode', type: 'string' },
        { name: 'audioOutput', type: 'string' },
        { name: 'audioVolume', type: 'number' },
        { name: 'brightness', type: 'number' },
        { name: 'contrast', type: 'number' },
        { name: 'hdmiOutput', type: 'string' },
        { name: 'hue', type: 'number' },
        { name: 'imageMode', type: 'string' },
        { name: 'liveVideoInput', type: 'string' },
        { name: 'liveVideoStandard', type: 'string' },
        { name: 'maxContentResolution', type: 'string' },
        { name: 'maximumVolume', type: 'number' },
        { name: 'minimumVolume', type: 'number' },
        { name: 'mosaic', type: 'boolean' },
        { name: 'saturation', type: 'number' },
        { name: 'spdifOutput', type: 'string' },
        { name: 'usbOutput', type: 'string' },
        { name: 'usbOutputA', type: 'string' },
        { name: 'usbOutputB', type: 'string' },
        { name: 'usbOutputC', type: 'string' },
        { name: 'usbOutputD', type: 'string' },
        { name: 'videoVolume', type: 'number' },
        { name: 'viewMode', type: 'string' },
        { name: 'zOrderFront', type: 'boolean' },
    ];
    return fixJson(zoneSpecificParametersSpec, rawZoneSpecificParameters);
}
function fixZonePlaylist(rawZonePlaylist) {
    var playlistParametersSpec = [
        { name: 'name', type: 'string' },
        { name: 'type', type: 'string' },
    ];
    var playlist = fixJson(playlistParametersSpec, rawZonePlaylist);
    if (playlist.type === 'non-interactive') {
        playlist.states = fixZonePlaylistStates(rawZonePlaylist.$$);
    }
    else {
        debugger;
    }
    return playlist;
}
function fixZonePlaylistStates(rawPlaylistItems) {
    var playlistStates = [];
    rawPlaylistItems.forEach(function (rawPlaylistItem) {
        switch (rawPlaylistItem["#name"]) {
            case 'imageItem': {
                playlistStates.push(fixImageItem(rawPlaylistItem));
                break;
            }
            case 'videoItem': {
                playlistStates.push(fixVideoItem(rawPlaylistItem));
                break;
            }
        }
    });
    return playlistStates;
}
function fixImageItem(rawImageItem) {
    var imageItemParametersSpec = [
        { name: 'fileIsLocal', type: 'boolean' },
        { name: 'slideDelayInterval', type: 'number' },
        { name: 'slideTransition', type: 'string' },
        { name: 'transitionDuration', type: 'number' },
        { name: 'videoPlayerRequired', type: 'boolean' },
    ];
    var imageItem = fixJson(imageItemParametersSpec, rawImageItem);
    imageItem.file = fixRawFileItem(rawImageItem.file.$);
    imageItem.type = 'imageItem';
    return imageItem;
}
function fixVideoItem(rawVideoItem) {
    var videoItemParametersSpec = [
        { name: 'automaticallyLoop', type: 'boolean' },
        { name: 'fileIsLocal', type: 'boolean' },
        { name: 'videoDisplayMode', type: 'string' },
        { name: 'volume', type: 'number' },
    ];
    var videoItem = fixJson(videoItemParametersSpec, rawVideoItem);
    videoItem.file = fixRawFileItem(rawVideoItem.file.$);
    videoItem.type = 'videoItem';
    return videoItem;
}
function fixRawFileItem(rawFileItem) {
    var imageItemParametersSpec = [
        { name: 'name', type: 'string' },
        { name: 'path', type: 'string' },
    ];
    return fixJson(imageItemParametersSpec, rawFileItem);
}
function fixJson(parametersSpec, parameters) {
    var convertedParameters = {};
    parametersSpec.forEach(function (parameterSpec) {
        if (parameters.hasOwnProperty(parameterSpec.name)) {
            var parameterValue = parameters[parameterSpec.name];
            switch (parameterSpec.type) {
                case 'string':
                    convertedParameters[parameterSpec.name] = parameterValue;
                    break;
                case 'boolean':
                    convertedParameters[parameterSpec.name] = Converters.stringToBool(parameterValue);
                    break;
                case 'number':
                    convertedParameters[parameterSpec.name] = Converters.stringToNumber(parameterValue);
                    break;
            }
        }
    });
    return convertedParameters;
}
function stringToJson(buf) {
    return new Promise(function (resolve, reject) {
        try {
            var parser = new xml2js.Parser({
                explicitArray: false,
                explicitChildren: true,
                preserveChildrenOrder: true
            });
            parser.parseString(buf, function (err, json) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(json);
            });
        }
        catch (parseErr) {
            reject(parseErr);
        }
    });
}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bpfImporter_1 = __webpack_require__(80);
module.exports = { importBPF: bpfImporter_1.default };


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bscore_1 = __webpack_require__(25);
var bsdatamodel_1 = __webpack_require__(27);
var Converters = __webpack_require__(44);
function createSign(bpf, dispatch, getState) {
    newSign(bpf, dispatch);
    setSignProperties(bpf, dispatch, getState);
    setSignAudioProperties(bpf, dispatch);
    setSerialPortConfiguration(bpf, dispatch);
    addZones(bpf, dispatch);
}
exports.createSign = createSign;
function newSign(bpf, dispatch) {
    var _a = bpf.metadata, name = _a.name, videoMode = _a.videoMode, model = _a.model;
    dispatch(bsdatamodel_1.dmNewSign(name, videoMode, model));
}
function setSignProperties(bpf, dispatch, getState) {
    var state = getState();
    var signAction;
    var signState;
    var signMetadata;
    var signProperties;
    signState = bsdatamodel_1.dmGetSignState(state.bsdm);
    signMetadata = signState.sign;
    signProperties = signMetadata.properties;
    var _a = bpf.metadata, alphabetizeVariableNames = _a.alphabetizeVariableNames, autoCreateMediaCounterVariables = _a.autoCreateMediaCounterVariables, delayScheduleChangeUntilMediaEndEvent = _a.delayScheduleChangeUntilMediaEndEvent, deviceWebPageDisplay = _a.deviceWebPageDisplay, flipCoordinates = _a.flipCoordinates, forceResolution = _a.forceResolution, graphicsZOrder = _a.graphicsZOrder, htmlEnableJavascriptConsole = _a.htmlEnableJavascriptConsole, inactivityTime = _a.inactivityTime, inactivityTimeout = _a.inactivityTimeout, isMosaic = _a.isMosaic, language = _a.language, languageKey = _a.languageKey, monitorOrientation = _a.monitorOrientation, monitorOverscan = _a.monitorOverscan, resetVariablesOnPresentationStart = _a.resetVariablesOnPresentationStart, tenBitColorEnabled = _a.tenBitColorEnabled, touchCursorDisplayMode = _a.touchCursorDisplayMode, udpDestinationAddress = _a.udpDestinationAddress, udpDestinationAddressType = _a.udpDestinationAddressType, udpDestinationPort = _a.udpDestinationPort, udpReceiverPort = _a.udpReceiverPort, videoConnector = _a.videoConnector;
    var _b = bpf.metadata.backgroundScreenColor, a = _b.a, r = _b.r, g = _b.g, b = _b.b;
    var backgroundScreenColor = { a: a, r: r, g: g, b: b };
    signAction = dispatch(bsdatamodel_1.dmUpdateSignProperties({
        id: signProperties.id,
        alphabetizeVariableNames: alphabetizeVariableNames,
        autoCreateMediaCounterVariables: autoCreateMediaCounterVariables,
        backgroundScreenColor: backgroundScreenColor,
        delayScheduleChangeUntilMediaEndEvent: delayScheduleChangeUntilMediaEndEvent,
        deviceWebPageDisplay: deviceWebPageDisplay,
        flipCoordinates: flipCoordinates,
        forceResolution: forceResolution,
        graphicsZOrder: graphicsZOrder,
        htmlEnableJavascriptConsole: htmlEnableJavascriptConsole,
        inactivityTime: inactivityTime,
        inactivityTimeout: inactivityTimeout,
        isMosaic: isMosaic,
        language: language,
        languageKey: languageKey,
        monitorOrientation: monitorOrientation,
        monitorOverscan: monitorOverscan,
        resetVariablesOnPresentationStart: resetVariablesOnPresentationStart,
        tenBitColorEnabled: tenBitColorEnabled,
        touchCursorDisplayMode: touchCursorDisplayMode,
        udpDestinationAddress: udpDestinationAddress,
        udpDestinationAddressType: udpDestinationAddressType,
        udpDestinationPort: udpDestinationPort,
        udpReceiverPort: udpReceiverPort,
        videoConnector: videoConnector,
    }));
}
function setSignAudioProperties(bpf, dispatch) {
    var bpfAudioVolumeNames = [
        'audio1',
        'audio2',
        'audio3',
        'hdmi',
        'spdif',
        'usbA',
        'usbB',
        'usbC',
        'usbD',
    ];
    var bpfxAudioOutputs = [
        'analog1',
        'analog2',
        'analog3',
        'hdmi',
        'spdif',
        'usbA',
        'usbB',
        'usbC',
        'usbD',
    ];
    var audioSignPropertyMap = {};
    var audioSignProperties;
    for (var i = 0; i < bpfAudioVolumeNames.length; i++) {
        audioSignProperties = {
            min: bpf.metadata[bpfAudioVolumeNames[i] + 'MinVolume'],
            max: bpf.metadata[bpfAudioVolumeNames[i] + 'MaxVolume'],
        };
        audioSignPropertyMap[bpfxAudioOutputs[i]] = audioSignProperties;
    }
    var audioSignPropertyMapParams = {
        params: audioSignPropertyMap
    };
    dispatch(bsdatamodel_1.dmUpdateSignAudioPropertyMap(audioSignPropertyMapParams));
}
function setSerialPortConfiguration(bpf, dispatch) {
    var serialPortList = [];
    bpf.metadata.SerialPortConfigurations.forEach(function (serialPortConfiguration) {
        serialPortList.push(serialPortConfiguration);
    });
    var serialPortListParams = {
        params: serialPortList
    };
    dispatch(bsdatamodel_1.dmUpdateSignSerialPorts(serialPortListParams));
}
function buildAudioOutputAssignmentMap(zoneSpecificParameters) {
    var bpfAudioOutputs = [
        'analogOutput',
        'analog2Output',
        'analog3Output',
        'hdmiOutput',
        'spdifOutput',
        'usbOutputA',
        'usbOutputB',
        'usbOutputC',
        'usbOutputD',
    ];
    var bpfxAudioOutputs = [
        'analog1',
        'analog2',
        'analog3',
        'hdmi',
        'spdif',
        'usbA',
        'usbB',
        'usbC',
        'usbD',
    ];
    var audioOutputAssignments = {};
    for (var i = 0; i < bpfAudioOutputs.length; i++) {
        audioOutputAssignments[bpfxAudioOutputs[i]] = zoneSpecificParameters[bpfAudioOutputs[i]];
    }
    return audioOutputAssignments;
}
function setZoneProperties(bpfZone, zoneId, zoneType, dispatch) {
    switch (zoneType) {
        case bscore_1.ZoneType.VideoOrImages: {
            var zoneSpecificParameters = bpfZone.zoneSpecificParameters;
            var imageZonePropertyData = {
                imageMode: bscore_1.ImageModeType.CenterImage,
            };
            var imageZoneProperties = imageZonePropertyData;
            var audioOutputAssignmentMap = buildAudioOutputAssignmentMap(zoneSpecificParameters);
            var audioZonePropertyData = {
                audioOutput: Converters.getAudioOutput(zoneSpecificParameters.audioOutput),
                audioMode: Converters.getAudioMode(zoneSpecificParameters.audioMode),
                audioMapping: Converters.getAudioMapping(zoneSpecificParameters.audioMapping),
                audioOutputAssignments: audioOutputAssignmentMap,
                audioMixMode: zoneSpecificParameters.audioMixMode,
                audioVolume: zoneSpecificParameters.audioVolume,
                minimumVolume: zoneSpecificParameters.minimumVolume,
                maximumVolume: zoneSpecificParameters.maximumVolume,
            };
            var videoZonePropertyData = {
                viewMode: Converters.getViewMode(zoneSpecificParameters.viewMode),
                liveVideoInput: zoneSpecificParameters.liveVideoInput,
                liveVideoStandard: zoneSpecificParameters.liveVideoStandard,
                videoVolume: zoneSpecificParameters.videoVolume,
                brightness: zoneSpecificParameters.brightness,
                contrast: zoneSpecificParameters.contrast,
                saturation: zoneSpecificParameters.saturation,
                hue: zoneSpecificParameters.hue,
                zOrderFront: zoneSpecificParameters.zOrderFront,
                mosaic: zoneSpecificParameters.mosaic,
                maxContentResolution: bscore_1.MosaicMaxContentResolutionType.NotApplicable,
                mosaicDecoderName: ''
            };
            var videoZoneProperties = Object.assign({}, videoZonePropertyData, audioZonePropertyData);
            var zonePropertyParams = Object.assign({}, videoZoneProperties, imageZoneProperties);
            var zonePropertyUpdateParams = {
                id: zoneId,
                type: bscore_1.ZoneType.VideoOrImages,
                properties: zonePropertyParams
            };
            var updateZonePropertyThunkAction = bsdatamodel_1.dmUpdateZoneProperties(zonePropertyUpdateParams);
            var updateZonePropertyAction = dispatch(updateZonePropertyThunkAction);
            break;
        }
        case bscore_1.ZoneType.VideoOnly: {
            break;
        }
        case bscore_1.ZoneType.Images: {
            break;
        }
        case bscore_1.ZoneType.AudioOnly: {
            break;
        }
        case bscore_1.ZoneType.EnhancedAudio: {
            break;
        }
        case bscore_1.ZoneType.Ticker: {
            break;
        }
        case bscore_1.ZoneType.Clock: {
            break;
        }
        case bscore_1.ZoneType.BackgroundImage: {
            break;
        }
        default: {
            debugger;
            break;
        }
    }
}
function buildZonePlaylist(bpfZone, zoneId, dispatch) {
    var mediaStateIds = [];
    var eventIds = [];
    var transitionTypes = [];
    var transitionDurations = [];
    bpfZone.playlist.states.forEach(function (state, index) {
        var zone = bsdatamodel_1.dmGetZoneMediaStateContainer(zoneId);
        switch (state.type) {
            case 'imageItem': {
                var file = state.file, fileIsLocal = state.fileIsLocal, slideDelayInterval = state.slideDelayInterval, transitionDuration = state.transitionDuration, videoPlayerRequired = state.videoPlayerRequired;
                var bsAssetItem = bsdatamodel_1.dmCreateAssetItemFromLocalFile(file.path, '', bscore_1.MediaType.Image);
                var addMediaStateThunkAction = bsdatamodel_1.dmAddMediaState(bsAssetItem.name, zone, bsAssetItem);
                var mediaStateAction = dispatch(addMediaStateThunkAction);
                var mediaStateParams = mediaStateAction.payload;
                var eventAction = dispatch(bsdatamodel_1.dmAddEvent('timeout', bscore_1.EventType.Timer, mediaStateParams.id, { interval: slideDelayInterval }));
                var eventParams = eventAction.payload;
                mediaStateIds.push(mediaStateParams.id);
                eventIds.push(eventParams.id);
                transitionTypes.push(bscore_1.TransitionType.NoEffect);
                transitionDurations.push(transitionDuration);
                break;
            }
            case 'videoItem': {
                var automaticallyLoop = state.automaticallyLoop, file = state.file, fileIsLocal = state.fileIsLocal, videoDisplayMode = state.videoDisplayMode, volume = state.volume;
                var bsAssetItem = bsdatamodel_1.dmCreateAssetItemFromLocalFile(file.path, '', bscore_1.MediaType.Video);
                var addMediaStateThunkAction = bsdatamodel_1.dmAddMediaState(bsAssetItem.name, zone, bsAssetItem);
                var mediaStateAction = dispatch(addMediaStateThunkAction);
                var mediaStateParams = mediaStateAction.payload;
                var eventAction = dispatch(bsdatamodel_1.dmAddEvent('mediaEnd', bscore_1.EventType.MediaEnd, mediaStateParams.id));
                var eventParams = eventAction.payload;
                mediaStateIds.push(mediaStateParams.id);
                eventIds.push(eventParams.id);
                transitionTypes.push(null);
                transitionDurations.push(0);
                if (index === 0) {
                    dispatch(bsdatamodel_1.dmUpdateZone({
                        id: zoneId,
                        initialMediaStateId: mediaStateParams.id,
                    }));
                }
                break;
            }
            default:
                break;
        }
    });
    for (var i = 0; i < (mediaStateIds.length - 1); i++) {
        var transitionAction_1 = dispatch(bsdatamodel_1.dmAddTransition('', eventIds[i], mediaStateIds[i + 1], transitionTypes[i], transitionDurations[i]));
    }
    var transitionAction = dispatch(bsdatamodel_1.dmAddTransition('', eventIds[mediaStateIds.length - 1], mediaStateIds[0], transitionTypes[mediaStateIds.length - 1], transitionDurations[mediaStateIds.length - 1]));
}
function addZones(bpf, dispatch) {
    bpf.zones.forEach(function (bpfZone) {
        var x = bpfZone.x, y = bpfZone.y, width = bpfZone.width, height = bpfZone.height;
        var zoneRect = {
            x: x,
            y: y,
            width: width,
            height: height,
            pct: false
        };
        var zoneAction = dispatch(bsdatamodel_1.dmAddZone(bpfZone.name, bpfZone.type, bpfZone.id, zoneRect, true));
        var zoneId = zoneAction.payload.id;
        var zoneType = zoneAction.payload.type;
        setZoneProperties(bpfZone, zoneId, zoneType, dispatch);
        buildZonePlaylist(bpfZone, zoneId, dispatch);
    });
}


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(26);
var bsdatamodel_1 = __webpack_require__(27);
var rootReducer = redux_1.combineReducers({
    bsdm: bsdatamodel_1.bsDmReducer,
});
exports.default = rootReducer;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(135),
    hashDelete = __webpack_require__(136),
    hashGet = __webpack_require__(137),
    hashHas = __webpack_require__(138),
    hashSet = __webpack_require__(139);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(29),
    setCacheAdd = __webpack_require__(159),
    setCacheHas = __webpack_require__(160);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

module.exports = arrayEvery;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(119),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(35),
    isIndex = __webpack_require__(30),
    isTypedArray = __webpack_require__(38);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(52),
    keys = __webpack_require__(12);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(104),
    createBaseEach = __webpack_require__(125);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(101);

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery(collection, predicate) {
  var result = true;
  baseEach(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

module.exports = baseEvery;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(126);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(103),
    keys = __webpack_require__(12);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(97),
    isArray = __webpack_require__(1);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObjectLike = __webpack_require__(11);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(45),
    equalArrays = __webpack_require__(54),
    equalByTag = __webpack_require__(127),
    equalObjects = __webpack_require__(128),
    getTag = __webpack_require__(56),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(35),
    isTypedArray = __webpack_require__(38);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(45),
    baseIsEqual = __webpack_require__(49);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(22),
    isMasked = __webpack_require__(141),
    isObject = __webpack_require__(2),
    toSource = __webpack_require__(60);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isLength = __webpack_require__(36),
    isObjectLike = __webpack_require__(11);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(113),
    baseMatchesProperty = __webpack_require__(114),
    identity = __webpack_require__(33),
    isArray = __webpack_require__(1),
    property = __webpack_require__(177);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(109),
    getMatchData = __webpack_require__(130),
    matchesStrictComparable = __webpack_require__(59);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(49),
    get = __webpack_require__(173),
    hasIn = __webpack_require__(174),
    isKey = __webpack_require__(31),
    isStrictComparable = __webpack_require__(58),
    matchesStrictComparable = __webpack_require__(59),
    toKey = __webpack_require__(20);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(48);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(33),
    overRest = __webpack_require__(158),
    setToString = __webpack_require__(162);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(171),
    defineProperty = __webpack_require__(53),
    identity = __webpack_require__(33);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(16),
    arrayMap = __webpack_require__(96),
    isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(37);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(117),
    isIterateeCall = __webpack_require__(57);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(10);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(16),
    Uint8Array = __webpack_require__(90),
    eq = __webpack_require__(21),
    equalArrays = __webpack_require__(54),
    mapToArray = __webpack_require__(152),
    setToArray = __webpack_require__(161);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(129);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(105),
    getSymbols = __webpack_require__(132),
    keys = __webpack_require__(12);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(58),
    keys = __webpack_require__(12);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(16);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(94),
    stubArray = __webpack_require__(178);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(51),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(1),
    isIndex = __webpack_require__(30),
    isLength = __webpack_require__(36),
    toKey = __webpack_require__(20);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(123);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(17);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(17);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(17);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(17);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(86),
    ListCache = __webpack_require__(15),
    Map = __webpack_require__(28);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(18);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(18);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(18);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(18);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 152 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(176);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(157);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(55);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68)(module)))

/***/ }),
/* 156 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 157 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(92);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 159 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 160 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(118),
    shortOut = __webpack_require__(163);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(15);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 165 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 166 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 167 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(15),
    Map = __webpack_require__(28),
    MapCache = __webpack_require__(29);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(153);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(46),
    copyObject = __webpack_require__(52),
    createAssigner = __webpack_require__(124),
    isArrayLike = __webpack_require__(10),
    isPrototype = __webpack_require__(32),
    keys = __webpack_require__(12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),
/* 171 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEvery = __webpack_require__(93),
    baseEvery = __webpack_require__(102),
    baseIteratee = __webpack_require__(112),
    isArray = __webpack_require__(1),
    isIterateeCall = __webpack_require__(57);

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = isArray(collection) ? arrayEvery : baseEvery;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = every;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(48);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(106),
    hasPath = __webpack_require__(134);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(50),
    getTag = __webpack_require__(56),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(1),
    isArrayLike = __webpack_require__(10),
    isBuffer = __webpack_require__(35),
    isPrototype = __webpack_require__(32),
    isTypedArray = __webpack_require__(38);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(29);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(115),
    basePropertyDeep = __webpack_require__(116),
    isKey = __webpack_require__(31),
    toKey = __webpack_require__(20);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 179 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(120);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {;(function (sax) { // wrapper for non-node envs
  sax.parser = function (strict, opt) { return new SAXParser(strict, opt) }
  sax.SAXParser = SAXParser
  sax.SAXStream = SAXStream
  sax.createStream = createStream

  // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
  // since that's the earliest that a buffer overrun could occur.  This way, checks are
  // as rare as required, but as often as necessary to ensure never crossing this bound.
  // Furthermore, buffers are only tested at most once per write(), so passing a very
  // large string into write() might have undesirable effects, but this is manageable by
  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
  // edge case, result in creating at most one complete copy of the string passed in.
  // Set to Infinity to have unlimited buffers.
  sax.MAX_BUFFER_LENGTH = 64 * 1024

  var buffers = [
    'comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype',
    'procInstName', 'procInstBody', 'entity', 'attribName',
    'attribValue', 'cdata', 'script'
  ]

  sax.EVENTS = [
    'text',
    'processinginstruction',
    'sgmldeclaration',
    'doctype',
    'comment',
    'opentagstart',
    'attribute',
    'opentag',
    'closetag',
    'opencdata',
    'cdata',
    'closecdata',
    'error',
    'end',
    'ready',
    'script',
    'opennamespace',
    'closenamespace'
  ]

  function SAXParser (strict, opt) {
    if (!(this instanceof SAXParser)) {
      return new SAXParser(strict, opt)
    }

    var parser = this
    clearBuffers(parser)
    parser.q = parser.c = ''
    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH
    parser.opt = opt || {}
    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags
    parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase'
    parser.tags = []
    parser.closed = parser.closedRoot = parser.sawRoot = false
    parser.tag = parser.error = null
    parser.strict = !!strict
    parser.noscript = !!(strict || parser.opt.noscript)
    parser.state = S.BEGIN
    parser.strictEntities = parser.opt.strictEntities
    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES)
    parser.attribList = []

    // namespaces form a prototype chain.
    // it always points at the current tag,
    // which protos to its parent tag.
    if (parser.opt.xmlns) {
      parser.ns = Object.create(rootNS)
    }

    // mostly just for error reporting
    parser.trackPosition = parser.opt.position !== false
    if (parser.trackPosition) {
      parser.position = parser.line = parser.column = 0
    }
    emit(parser, 'onready')
  }

  if (!Object.create) {
    Object.create = function (o) {
      function F () {}
      F.prototype = o
      var newf = new F()
      return newf
    }
  }

  if (!Object.keys) {
    Object.keys = function (o) {
      var a = []
      for (var i in o) if (o.hasOwnProperty(i)) a.push(i)
      return a
    }
  }

  function checkBufferLength (parser) {
    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10)
    var maxActual = 0
    for (var i = 0, l = buffers.length; i < l; i++) {
      var len = parser[buffers[i]].length
      if (len > maxAllowed) {
        // Text/cdata nodes can get big, and since they're buffered,
        // we can get here under normal conditions.
        // Avoid issues by emitting the text node now,
        // so at least it won't get any bigger.
        switch (buffers[i]) {
          case 'textNode':
            closeText(parser)
            break

          case 'cdata':
            emitNode(parser, 'oncdata', parser.cdata)
            parser.cdata = ''
            break

          case 'script':
            emitNode(parser, 'onscript', parser.script)
            parser.script = ''
            break

          default:
            error(parser, 'Max buffer length exceeded: ' + buffers[i])
        }
      }
      maxActual = Math.max(maxActual, len)
    }
    // schedule the next check for the earliest possible buffer overrun.
    var m = sax.MAX_BUFFER_LENGTH - maxActual
    parser.bufferCheckPosition = m + parser.position
  }

  function clearBuffers (parser) {
    for (var i = 0, l = buffers.length; i < l; i++) {
      parser[buffers[i]] = ''
    }
  }

  function flushBuffers (parser) {
    closeText(parser)
    if (parser.cdata !== '') {
      emitNode(parser, 'oncdata', parser.cdata)
      parser.cdata = ''
    }
    if (parser.script !== '') {
      emitNode(parser, 'onscript', parser.script)
      parser.script = ''
    }
  }

  SAXParser.prototype = {
    end: function () { end(this) },
    write: write,
    resume: function () { this.error = null; return this },
    close: function () { return this.write(null) },
    flush: function () { flushBuffers(this) }
  }

  var Stream
  try {
    Stream = __webpack_require__(204).Stream
  } catch (ex) {
    Stream = function () {}
  }

  var streamWraps = sax.EVENTS.filter(function (ev) {
    return ev !== 'error' && ev !== 'end'
  })

  function createStream (strict, opt) {
    return new SAXStream(strict, opt)
  }

  function SAXStream (strict, opt) {
    if (!(this instanceof SAXStream)) {
      return new SAXStream(strict, opt)
    }

    Stream.apply(this)

    this._parser = new SAXParser(strict, opt)
    this.writable = true
    this.readable = true

    var me = this

    this._parser.onend = function () {
      me.emit('end')
    }

    this._parser.onerror = function (er) {
      me.emit('error', er)

      // if didn't throw, then means error was handled.
      // go ahead and clear error, so we can write again.
      me._parser.error = null
    }

    this._decoder = null

    streamWraps.forEach(function (ev) {
      Object.defineProperty(me, 'on' + ev, {
        get: function () {
          return me._parser['on' + ev]
        },
        set: function (h) {
          if (!h) {
            me.removeAllListeners(ev)
            me._parser['on' + ev] = h
            return h
          }
          me.on(ev, h)
        },
        enumerable: true,
        configurable: false
      })
    })
  }

  SAXStream.prototype = Object.create(Stream.prototype, {
    constructor: {
      value: SAXStream
    }
  })

  SAXStream.prototype.write = function (data) {
    if (typeof Buffer === 'function' &&
      typeof Buffer.isBuffer === 'function' &&
      Buffer.isBuffer(data)) {
      if (!this._decoder) {
        var SD = __webpack_require__(40).StringDecoder
        this._decoder = new SD('utf8')
      }
      data = this._decoder.write(data)
    }

    this._parser.write(data.toString())
    this.emit('data', data)
    return true
  }

  SAXStream.prototype.end = function (chunk) {
    if (chunk && chunk.length) {
      this.write(chunk)
    }
    this._parser.end()
    return true
  }

  SAXStream.prototype.on = function (ev, handler) {
    var me = this
    if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
      me._parser['on' + ev] = function () {
        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
        args.splice(0, 0, ev)
        me.emit.apply(me, args)
      }
    }

    return Stream.prototype.on.call(me, ev, handler)
  }

  // this really needs to be replaced with character classes.
  // XML allows all manner of ridiculous numbers and digits.
  var CDATA = '[CDATA['
  var DOCTYPE = 'DOCTYPE'
  var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace'
  var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/'
  var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE }

  // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
  // This implementation works on strings, a single character at a time
  // as such, it cannot ever support astral-plane characters (10000-EFFFF)
  // without a significant breaking change to either this  parser, or the
  // JavaScript language.  Implementation of an emoji-capable xml parser
  // is left as an exercise for the reader.
  var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/

  var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/

  var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
  var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/

  function isWhitespace (c) {
    return c === ' ' || c === '\n' || c === '\r' || c === '\t'
  }

  function isQuote (c) {
    return c === '"' || c === '\''
  }

  function isAttribEnd (c) {
    return c === '>' || isWhitespace(c)
  }

  function isMatch (regex, c) {
    return regex.test(c)
  }

  function notMatch (regex, c) {
    return !isMatch(regex, c)
  }

  var S = 0
  sax.STATE = {
    BEGIN: S++, // leading byte order mark or whitespace
    BEGIN_WHITESPACE: S++, // leading whitespace
    TEXT: S++, // general stuff
    TEXT_ENTITY: S++, // &amp and such.
    OPEN_WAKA: S++, // <
    SGML_DECL: S++, // <!BLARG
    SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
    DOCTYPE: S++, // <!DOCTYPE
    DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
    DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
    DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
    COMMENT_STARTING: S++, // <!-
    COMMENT: S++, // <!--
    COMMENT_ENDING: S++, // <!-- blah -
    COMMENT_ENDED: S++, // <!-- blah --
    CDATA: S++, // <![CDATA[ something
    CDATA_ENDING: S++, // ]
    CDATA_ENDING_2: S++, // ]]
    PROC_INST: S++, // <?hi
    PROC_INST_BODY: S++, // <?hi there
    PROC_INST_ENDING: S++, // <?hi "there" ?
    OPEN_TAG: S++, // <strong
    OPEN_TAG_SLASH: S++, // <strong /
    ATTRIB: S++, // <a
    ATTRIB_NAME: S++, // <a foo
    ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
    ATTRIB_VALUE: S++, // <a foo=
    ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
    ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
    ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
    ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
    ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
    CLOSE_TAG: S++, // </a
    CLOSE_TAG_SAW_WHITE: S++, // </a   >
    SCRIPT: S++, // <script> ...
    SCRIPT_ENDING: S++ // <script> ... <
  }

  sax.XML_ENTITIES = {
    'amp': '&',
    'gt': '>',
    'lt': '<',
    'quot': '"',
    'apos': "'"
  }

  sax.ENTITIES = {
    'amp': '&',
    'gt': '>',
    'lt': '<',
    'quot': '"',
    'apos': "'",
    'AElig': 198,
    'Aacute': 193,
    'Acirc': 194,
    'Agrave': 192,
    'Aring': 197,
    'Atilde': 195,
    'Auml': 196,
    'Ccedil': 199,
    'ETH': 208,
    'Eacute': 201,
    'Ecirc': 202,
    'Egrave': 200,
    'Euml': 203,
    'Iacute': 205,
    'Icirc': 206,
    'Igrave': 204,
    'Iuml': 207,
    'Ntilde': 209,
    'Oacute': 211,
    'Ocirc': 212,
    'Ograve': 210,
    'Oslash': 216,
    'Otilde': 213,
    'Ouml': 214,
    'THORN': 222,
    'Uacute': 218,
    'Ucirc': 219,
    'Ugrave': 217,
    'Uuml': 220,
    'Yacute': 221,
    'aacute': 225,
    'acirc': 226,
    'aelig': 230,
    'agrave': 224,
    'aring': 229,
    'atilde': 227,
    'auml': 228,
    'ccedil': 231,
    'eacute': 233,
    'ecirc': 234,
    'egrave': 232,
    'eth': 240,
    'euml': 235,
    'iacute': 237,
    'icirc': 238,
    'igrave': 236,
    'iuml': 239,
    'ntilde': 241,
    'oacute': 243,
    'ocirc': 244,
    'ograve': 242,
    'oslash': 248,
    'otilde': 245,
    'ouml': 246,
    'szlig': 223,
    'thorn': 254,
    'uacute': 250,
    'ucirc': 251,
    'ugrave': 249,
    'uuml': 252,
    'yacute': 253,
    'yuml': 255,
    'copy': 169,
    'reg': 174,
    'nbsp': 160,
    'iexcl': 161,
    'cent': 162,
    'pound': 163,
    'curren': 164,
    'yen': 165,
    'brvbar': 166,
    'sect': 167,
    'uml': 168,
    'ordf': 170,
    'laquo': 171,
    'not': 172,
    'shy': 173,
    'macr': 175,
    'deg': 176,
    'plusmn': 177,
    'sup1': 185,
    'sup2': 178,
    'sup3': 179,
    'acute': 180,
    'micro': 181,
    'para': 182,
    'middot': 183,
    'cedil': 184,
    'ordm': 186,
    'raquo': 187,
    'frac14': 188,
    'frac12': 189,
    'frac34': 190,
    'iquest': 191,
    'times': 215,
    'divide': 247,
    'OElig': 338,
    'oelig': 339,
    'Scaron': 352,
    'scaron': 353,
    'Yuml': 376,
    'fnof': 402,
    'circ': 710,
    'tilde': 732,
    'Alpha': 913,
    'Beta': 914,
    'Gamma': 915,
    'Delta': 916,
    'Epsilon': 917,
    'Zeta': 918,
    'Eta': 919,
    'Theta': 920,
    'Iota': 921,
    'Kappa': 922,
    'Lambda': 923,
    'Mu': 924,
    'Nu': 925,
    'Xi': 926,
    'Omicron': 927,
    'Pi': 928,
    'Rho': 929,
    'Sigma': 931,
    'Tau': 932,
    'Upsilon': 933,
    'Phi': 934,
    'Chi': 935,
    'Psi': 936,
    'Omega': 937,
    'alpha': 945,
    'beta': 946,
    'gamma': 947,
    'delta': 948,
    'epsilon': 949,
    'zeta': 950,
    'eta': 951,
    'theta': 952,
    'iota': 953,
    'kappa': 954,
    'lambda': 955,
    'mu': 956,
    'nu': 957,
    'xi': 958,
    'omicron': 959,
    'pi': 960,
    'rho': 961,
    'sigmaf': 962,
    'sigma': 963,
    'tau': 964,
    'upsilon': 965,
    'phi': 966,
    'chi': 967,
    'psi': 968,
    'omega': 969,
    'thetasym': 977,
    'upsih': 978,
    'piv': 982,
    'ensp': 8194,
    'emsp': 8195,
    'thinsp': 8201,
    'zwnj': 8204,
    'zwj': 8205,
    'lrm': 8206,
    'rlm': 8207,
    'ndash': 8211,
    'mdash': 8212,
    'lsquo': 8216,
    'rsquo': 8217,
    'sbquo': 8218,
    'ldquo': 8220,
    'rdquo': 8221,
    'bdquo': 8222,
    'dagger': 8224,
    'Dagger': 8225,
    'bull': 8226,
    'hellip': 8230,
    'permil': 8240,
    'prime': 8242,
    'Prime': 8243,
    'lsaquo': 8249,
    'rsaquo': 8250,
    'oline': 8254,
    'frasl': 8260,
    'euro': 8364,
    'image': 8465,
    'weierp': 8472,
    'real': 8476,
    'trade': 8482,
    'alefsym': 8501,
    'larr': 8592,
    'uarr': 8593,
    'rarr': 8594,
    'darr': 8595,
    'harr': 8596,
    'crarr': 8629,
    'lArr': 8656,
    'uArr': 8657,
    'rArr': 8658,
    'dArr': 8659,
    'hArr': 8660,
    'forall': 8704,
    'part': 8706,
    'exist': 8707,
    'empty': 8709,
    'nabla': 8711,
    'isin': 8712,
    'notin': 8713,
    'ni': 8715,
    'prod': 8719,
    'sum': 8721,
    'minus': 8722,
    'lowast': 8727,
    'radic': 8730,
    'prop': 8733,
    'infin': 8734,
    'ang': 8736,
    'and': 8743,
    'or': 8744,
    'cap': 8745,
    'cup': 8746,
    'int': 8747,
    'there4': 8756,
    'sim': 8764,
    'cong': 8773,
    'asymp': 8776,
    'ne': 8800,
    'equiv': 8801,
    'le': 8804,
    'ge': 8805,
    'sub': 8834,
    'sup': 8835,
    'nsub': 8836,
    'sube': 8838,
    'supe': 8839,
    'oplus': 8853,
    'otimes': 8855,
    'perp': 8869,
    'sdot': 8901,
    'lceil': 8968,
    'rceil': 8969,
    'lfloor': 8970,
    'rfloor': 8971,
    'lang': 9001,
    'rang': 9002,
    'loz': 9674,
    'spades': 9824,
    'clubs': 9827,
    'hearts': 9829,
    'diams': 9830
  }

  Object.keys(sax.ENTITIES).forEach(function (key) {
    var e = sax.ENTITIES[key]
    var s = typeof e === 'number' ? String.fromCharCode(e) : e
    sax.ENTITIES[key] = s
  })

  for (var s in sax.STATE) {
    sax.STATE[sax.STATE[s]] = s
  }

  // shorthand
  S = sax.STATE

  function emit (parser, event, data) {
    parser[event] && parser[event](data)
  }

  function emitNode (parser, nodeType, data) {
    if (parser.textNode) closeText(parser)
    emit(parser, nodeType, data)
  }

  function closeText (parser) {
    parser.textNode = textopts(parser.opt, parser.textNode)
    if (parser.textNode) emit(parser, 'ontext', parser.textNode)
    parser.textNode = ''
  }

  function textopts (opt, text) {
    if (opt.trim) text = text.trim()
    if (opt.normalize) text = text.replace(/\s+/g, ' ')
    return text
  }

  function error (parser, er) {
    closeText(parser)
    if (parser.trackPosition) {
      er += '\nLine: ' + parser.line +
        '\nColumn: ' + parser.column +
        '\nChar: ' + parser.c
    }
    er = new Error(er)
    parser.error = er
    emit(parser, 'onerror', er)
    return parser
  }

  function end (parser) {
    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag')
    if ((parser.state !== S.BEGIN) &&
      (parser.state !== S.BEGIN_WHITESPACE) &&
      (parser.state !== S.TEXT)) {
      error(parser, 'Unexpected end')
    }
    closeText(parser)
    parser.c = ''
    parser.closed = true
    emit(parser, 'onend')
    SAXParser.call(parser, parser.strict, parser.opt)
    return parser
  }

  function strictFail (parser, message) {
    if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {
      throw new Error('bad call to strictFail')
    }
    if (parser.strict) {
      error(parser, message)
    }
  }

  function newTag (parser) {
    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]()
    var parent = parser.tags[parser.tags.length - 1] || parser
    var tag = parser.tag = { name: parser.tagName, attributes: {} }

    // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
    if (parser.opt.xmlns) {
      tag.ns = parent.ns
    }
    parser.attribList.length = 0
    emitNode(parser, 'onopentagstart', tag)
  }

  function qname (name, attribute) {
    var i = name.indexOf(':')
    var qualName = i < 0 ? [ '', name ] : name.split(':')
    var prefix = qualName[0]
    var local = qualName[1]

    // <x "xmlns"="http://foo">
    if (attribute && name === 'xmlns') {
      prefix = 'xmlns'
      local = ''
    }

    return { prefix: prefix, local: local }
  }

  function attrib (parser) {
    if (!parser.strict) {
      parser.attribName = parser.attribName[parser.looseCase]()
    }

    if (parser.attribList.indexOf(parser.attribName) !== -1 ||
      parser.tag.attributes.hasOwnProperty(parser.attribName)) {
      parser.attribName = parser.attribValue = ''
      return
    }

    if (parser.opt.xmlns) {
      var qn = qname(parser.attribName, true)
      var prefix = qn.prefix
      var local = qn.local

      if (prefix === 'xmlns') {
        // namespace binding attribute. push the binding into scope
        if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
          strictFail(parser,
            'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' +
            'Actual: ' + parser.attribValue)
        } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
          strictFail(parser,
            'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' +
            'Actual: ' + parser.attribValue)
        } else {
          var tag = parser.tag
          var parent = parser.tags[parser.tags.length - 1] || parser
          if (tag.ns === parent.ns) {
            tag.ns = Object.create(parent.ns)
          }
          tag.ns[local] = parser.attribValue
        }
      }

      // defer onattribute events until all attributes have been seen
      // so any new bindings can take effect. preserve attribute order
      // so deferred events can be emitted in document order
      parser.attribList.push([parser.attribName, parser.attribValue])
    } else {
      // in non-xmlns mode, we can emit the event right away
      parser.tag.attributes[parser.attribName] = parser.attribValue
      emitNode(parser, 'onattribute', {
        name: parser.attribName,
        value: parser.attribValue
      })
    }

    parser.attribName = parser.attribValue = ''
  }

  function openTag (parser, selfClosing) {
    if (parser.opt.xmlns) {
      // emit namespace binding events
      var tag = parser.tag

      // add namespace info to tag
      var qn = qname(parser.tagName)
      tag.prefix = qn.prefix
      tag.local = qn.local
      tag.uri = tag.ns[qn.prefix] || ''

      if (tag.prefix && !tag.uri) {
        strictFail(parser, 'Unbound namespace prefix: ' +
          JSON.stringify(parser.tagName))
        tag.uri = qn.prefix
      }

      var parent = parser.tags[parser.tags.length - 1] || parser
      if (tag.ns && parent.ns !== tag.ns) {
        Object.keys(tag.ns).forEach(function (p) {
          emitNode(parser, 'onopennamespace', {
            prefix: p,
            uri: tag.ns[p]
          })
        })
      }

      // handle deferred onattribute events
      // Note: do not apply default ns to attributes:
      //   http://www.w3.org/TR/REC-xml-names/#defaulting
      for (var i = 0, l = parser.attribList.length; i < l; i++) {
        var nv = parser.attribList[i]
        var name = nv[0]
        var value = nv[1]
        var qualName = qname(name, true)
        var prefix = qualName.prefix
        var local = qualName.local
        var uri = prefix === '' ? '' : (tag.ns[prefix] || '')
        var a = {
          name: name,
          value: value,
          prefix: prefix,
          local: local,
          uri: uri
        }

        // if there's any attributes with an undefined namespace,
        // then fail on them now.
        if (prefix && prefix !== 'xmlns' && !uri) {
          strictFail(parser, 'Unbound namespace prefix: ' +
            JSON.stringify(prefix))
          a.uri = prefix
        }
        parser.tag.attributes[name] = a
        emitNode(parser, 'onattribute', a)
      }
      parser.attribList.length = 0
    }

    parser.tag.isSelfClosing = !!selfClosing

    // process the tag
    parser.sawRoot = true
    parser.tags.push(parser.tag)
    emitNode(parser, 'onopentag', parser.tag)
    if (!selfClosing) {
      // special case for <script> in non-strict mode.
      if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
        parser.state = S.SCRIPT
      } else {
        parser.state = S.TEXT
      }
      parser.tag = null
      parser.tagName = ''
    }
    parser.attribName = parser.attribValue = ''
    parser.attribList.length = 0
  }

  function closeTag (parser) {
    if (!parser.tagName) {
      strictFail(parser, 'Weird empty close tag.')
      parser.textNode += '</>'
      parser.state = S.TEXT
      return
    }

    if (parser.script) {
      if (parser.tagName !== 'script') {
        parser.script += '</' + parser.tagName + '>'
        parser.tagName = ''
        parser.state = S.SCRIPT
        return
      }
      emitNode(parser, 'onscript', parser.script)
      parser.script = ''
    }

    // first make sure that the closing tag actually exists.
    // <a><b></c></b></a> will close everything, otherwise.
    var t = parser.tags.length
    var tagName = parser.tagName
    if (!parser.strict) {
      tagName = tagName[parser.looseCase]()
    }
    var closeTo = tagName
    while (t--) {
      var close = parser.tags[t]
      if (close.name !== closeTo) {
        // fail the first time in strict mode
        strictFail(parser, 'Unexpected close tag')
      } else {
        break
      }
    }

    // didn't find it.  we already failed for strict, so just abort.
    if (t < 0) {
      strictFail(parser, 'Unmatched closing tag: ' + parser.tagName)
      parser.textNode += '</' + parser.tagName + '>'
      parser.state = S.TEXT
      return
    }
    parser.tagName = tagName
    var s = parser.tags.length
    while (s-- > t) {
      var tag = parser.tag = parser.tags.pop()
      parser.tagName = parser.tag.name
      emitNode(parser, 'onclosetag', parser.tagName)

      var x = {}
      for (var i in tag.ns) {
        x[i] = tag.ns[i]
      }

      var parent = parser.tags[parser.tags.length - 1] || parser
      if (parser.opt.xmlns && tag.ns !== parent.ns) {
        // remove namespace bindings introduced by tag
        Object.keys(tag.ns).forEach(function (p) {
          var n = tag.ns[p]
          emitNode(parser, 'onclosenamespace', { prefix: p, uri: n })
        })
      }
    }
    if (t === 0) parser.closedRoot = true
    parser.tagName = parser.attribValue = parser.attribName = ''
    parser.attribList.length = 0
    parser.state = S.TEXT
  }

  function parseEntity (parser) {
    var entity = parser.entity
    var entityLC = entity.toLowerCase()
    var num
    var numStr = ''

    if (parser.ENTITIES[entity]) {
      return parser.ENTITIES[entity]
    }
    if (parser.ENTITIES[entityLC]) {
      return parser.ENTITIES[entityLC]
    }
    entity = entityLC
    if (entity.charAt(0) === '#') {
      if (entity.charAt(1) === 'x') {
        entity = entity.slice(2)
        num = parseInt(entity, 16)
        numStr = num.toString(16)
      } else {
        entity = entity.slice(1)
        num = parseInt(entity, 10)
        numStr = num.toString(10)
      }
    }
    entity = entity.replace(/^0+/, '')
    if (isNaN(num) || numStr.toLowerCase() !== entity) {
      strictFail(parser, 'Invalid character entity')
      return '&' + parser.entity + ';'
    }

    return String.fromCodePoint(num)
  }

  function beginWhiteSpace (parser, c) {
    if (c === '<') {
      parser.state = S.OPEN_WAKA
      parser.startTagPosition = parser.position
    } else if (!isWhitespace(c)) {
      // have to process this as a text node.
      // weird, but happens.
      strictFail(parser, 'Non-whitespace before first tag.')
      parser.textNode = c
      parser.state = S.TEXT
    }
  }

  function charAt (chunk, i) {
    var result = ''
    if (i < chunk.length) {
      result = chunk.charAt(i)
    }
    return result
  }

  function write (chunk) {
    var parser = this
    if (this.error) {
      throw this.error
    }
    if (parser.closed) {
      return error(parser,
        'Cannot write after close. Assign an onready handler.')
    }
    if (chunk === null) {
      return end(parser)
    }
    if (typeof chunk === 'object') {
      chunk = chunk.toString()
    }
    var i = 0
    var c = ''
    while (true) {
      c = charAt(chunk, i++)
      parser.c = c

      if (!c) {
        break
      }

      if (parser.trackPosition) {
        parser.position++
        if (c === '\n') {
          parser.line++
          parser.column = 0
        } else {
          parser.column++
        }
      }

      switch (parser.state) {
        case S.BEGIN:
          parser.state = S.BEGIN_WHITESPACE
          if (c === '\uFEFF') {
            continue
          }
          beginWhiteSpace(parser, c)
          continue

        case S.BEGIN_WHITESPACE:
          beginWhiteSpace(parser, c)
          continue

        case S.TEXT:
          if (parser.sawRoot && !parser.closedRoot) {
            var starti = i - 1
            while (c && c !== '<' && c !== '&') {
              c = charAt(chunk, i++)
              if (c && parser.trackPosition) {
                parser.position++
                if (c === '\n') {
                  parser.line++
                  parser.column = 0
                } else {
                  parser.column++
                }
              }
            }
            parser.textNode += chunk.substring(starti, i - 1)
          }
          if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
            parser.state = S.OPEN_WAKA
            parser.startTagPosition = parser.position
          } else {
            if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
              strictFail(parser, 'Text data outside of root node.')
            }
            if (c === '&') {
              parser.state = S.TEXT_ENTITY
            } else {
              parser.textNode += c
            }
          }
          continue

        case S.SCRIPT:
          // only non-strict
          if (c === '<') {
            parser.state = S.SCRIPT_ENDING
          } else {
            parser.script += c
          }
          continue

        case S.SCRIPT_ENDING:
          if (c === '/') {
            parser.state = S.CLOSE_TAG
          } else {
            parser.script += '<' + c
            parser.state = S.SCRIPT
          }
          continue

        case S.OPEN_WAKA:
          // either a /, ?, !, or text is coming next.
          if (c === '!') {
            parser.state = S.SGML_DECL
            parser.sgmlDecl = ''
          } else if (isWhitespace(c)) {
            // wait for it...
          } else if (isMatch(nameStart, c)) {
            parser.state = S.OPEN_TAG
            parser.tagName = c
          } else if (c === '/') {
            parser.state = S.CLOSE_TAG
            parser.tagName = ''
          } else if (c === '?') {
            parser.state = S.PROC_INST
            parser.procInstName = parser.procInstBody = ''
          } else {
            strictFail(parser, 'Unencoded <')
            // if there was some whitespace, then add that in.
            if (parser.startTagPosition + 1 < parser.position) {
              var pad = parser.position - parser.startTagPosition
              c = new Array(pad).join(' ') + c
            }
            parser.textNode += '<' + c
            parser.state = S.TEXT
          }
          continue

        case S.SGML_DECL:
          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
            emitNode(parser, 'onopencdata')
            parser.state = S.CDATA
            parser.sgmlDecl = ''
            parser.cdata = ''
          } else if (parser.sgmlDecl + c === '--') {
            parser.state = S.COMMENT
            parser.comment = ''
            parser.sgmlDecl = ''
          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
            parser.state = S.DOCTYPE
            if (parser.doctype || parser.sawRoot) {
              strictFail(parser,
                'Inappropriately located doctype declaration')
            }
            parser.doctype = ''
            parser.sgmlDecl = ''
          } else if (c === '>') {
            emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl)
            parser.sgmlDecl = ''
            parser.state = S.TEXT
          } else if (isQuote(c)) {
            parser.state = S.SGML_DECL_QUOTED
            parser.sgmlDecl += c
          } else {
            parser.sgmlDecl += c
          }
          continue

        case S.SGML_DECL_QUOTED:
          if (c === parser.q) {
            parser.state = S.SGML_DECL
            parser.q = ''
          }
          parser.sgmlDecl += c
          continue

        case S.DOCTYPE:
          if (c === '>') {
            parser.state = S.TEXT
            emitNode(parser, 'ondoctype', parser.doctype)
            parser.doctype = true // just remember that we saw it.
          } else {
            parser.doctype += c
            if (c === '[') {
              parser.state = S.DOCTYPE_DTD
            } else if (isQuote(c)) {
              parser.state = S.DOCTYPE_QUOTED
              parser.q = c
            }
          }
          continue

        case S.DOCTYPE_QUOTED:
          parser.doctype += c
          if (c === parser.q) {
            parser.q = ''
            parser.state = S.DOCTYPE
          }
          continue

        case S.DOCTYPE_DTD:
          parser.doctype += c
          if (c === ']') {
            parser.state = S.DOCTYPE
          } else if (isQuote(c)) {
            parser.state = S.DOCTYPE_DTD_QUOTED
            parser.q = c
          }
          continue

        case S.DOCTYPE_DTD_QUOTED:
          parser.doctype += c
          if (c === parser.q) {
            parser.state = S.DOCTYPE_DTD
            parser.q = ''
          }
          continue

        case S.COMMENT:
          if (c === '-') {
            parser.state = S.COMMENT_ENDING
          } else {
            parser.comment += c
          }
          continue

        case S.COMMENT_ENDING:
          if (c === '-') {
            parser.state = S.COMMENT_ENDED
            parser.comment = textopts(parser.opt, parser.comment)
            if (parser.comment) {
              emitNode(parser, 'oncomment', parser.comment)
            }
            parser.comment = ''
          } else {
            parser.comment += '-' + c
            parser.state = S.COMMENT
          }
          continue

        case S.COMMENT_ENDED:
          if (c !== '>') {
            strictFail(parser, 'Malformed comment')
            // allow <!-- blah -- bloo --> in non-strict mode,
            // which is a comment of " blah -- bloo "
            parser.comment += '--' + c
            parser.state = S.COMMENT
          } else {
            parser.state = S.TEXT
          }
          continue

        case S.CDATA:
          if (c === ']') {
            parser.state = S.CDATA_ENDING
          } else {
            parser.cdata += c
          }
          continue

        case S.CDATA_ENDING:
          if (c === ']') {
            parser.state = S.CDATA_ENDING_2
          } else {
            parser.cdata += ']' + c
            parser.state = S.CDATA
          }
          continue

        case S.CDATA_ENDING_2:
          if (c === '>') {
            if (parser.cdata) {
              emitNode(parser, 'oncdata', parser.cdata)
            }
            emitNode(parser, 'onclosecdata')
            parser.cdata = ''
            parser.state = S.TEXT
          } else if (c === ']') {
            parser.cdata += ']'
          } else {
            parser.cdata += ']]' + c
            parser.state = S.CDATA
          }
          continue

        case S.PROC_INST:
          if (c === '?') {
            parser.state = S.PROC_INST_ENDING
          } else if (isWhitespace(c)) {
            parser.state = S.PROC_INST_BODY
          } else {
            parser.procInstName += c
          }
          continue

        case S.PROC_INST_BODY:
          if (!parser.procInstBody && isWhitespace(c)) {
            continue
          } else if (c === '?') {
            parser.state = S.PROC_INST_ENDING
          } else {
            parser.procInstBody += c
          }
          continue

        case S.PROC_INST_ENDING:
          if (c === '>') {
            emitNode(parser, 'onprocessinginstruction', {
              name: parser.procInstName,
              body: parser.procInstBody
            })
            parser.procInstName = parser.procInstBody = ''
            parser.state = S.TEXT
          } else {
            parser.procInstBody += '?' + c
            parser.state = S.PROC_INST_BODY
          }
          continue

        case S.OPEN_TAG:
          if (isMatch(nameBody, c)) {
            parser.tagName += c
          } else {
            newTag(parser)
            if (c === '>') {
              openTag(parser)
            } else if (c === '/') {
              parser.state = S.OPEN_TAG_SLASH
            } else {
              if (!isWhitespace(c)) {
                strictFail(parser, 'Invalid character in tag name')
              }
              parser.state = S.ATTRIB
            }
          }
          continue

        case S.OPEN_TAG_SLASH:
          if (c === '>') {
            openTag(parser, true)
            closeTag(parser)
          } else {
            strictFail(parser, 'Forward-slash in opening tag not followed by >')
            parser.state = S.ATTRIB
          }
          continue

        case S.ATTRIB:
          // haven't read the attribute name yet.
          if (isWhitespace(c)) {
            continue
          } else if (c === '>') {
            openTag(parser)
          } else if (c === '/') {
            parser.state = S.OPEN_TAG_SLASH
          } else if (isMatch(nameStart, c)) {
            parser.attribName = c
            parser.attribValue = ''
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_NAME:
          if (c === '=') {
            parser.state = S.ATTRIB_VALUE
          } else if (c === '>') {
            strictFail(parser, 'Attribute without value')
            parser.attribValue = parser.attribName
            attrib(parser)
            openTag(parser)
          } else if (isWhitespace(c)) {
            parser.state = S.ATTRIB_NAME_SAW_WHITE
          } else if (isMatch(nameBody, c)) {
            parser.attribName += c
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_NAME_SAW_WHITE:
          if (c === '=') {
            parser.state = S.ATTRIB_VALUE
          } else if (isWhitespace(c)) {
            continue
          } else {
            strictFail(parser, 'Attribute without value')
            parser.tag.attributes[parser.attribName] = ''
            parser.attribValue = ''
            emitNode(parser, 'onattribute', {
              name: parser.attribName,
              value: ''
            })
            parser.attribName = ''
            if (c === '>') {
              openTag(parser)
            } else if (isMatch(nameStart, c)) {
              parser.attribName = c
              parser.state = S.ATTRIB_NAME
            } else {
              strictFail(parser, 'Invalid attribute name')
              parser.state = S.ATTRIB
            }
          }
          continue

        case S.ATTRIB_VALUE:
          if (isWhitespace(c)) {
            continue
          } else if (isQuote(c)) {
            parser.q = c
            parser.state = S.ATTRIB_VALUE_QUOTED
          } else {
            strictFail(parser, 'Unquoted attribute value')
            parser.state = S.ATTRIB_VALUE_UNQUOTED
            parser.attribValue = c
          }
          continue

        case S.ATTRIB_VALUE_QUOTED:
          if (c !== parser.q) {
            if (c === '&') {
              parser.state = S.ATTRIB_VALUE_ENTITY_Q
            } else {
              parser.attribValue += c
            }
            continue
          }
          attrib(parser)
          parser.q = ''
          parser.state = S.ATTRIB_VALUE_CLOSED
          continue

        case S.ATTRIB_VALUE_CLOSED:
          if (isWhitespace(c)) {
            parser.state = S.ATTRIB
          } else if (c === '>') {
            openTag(parser)
          } else if (c === '/') {
            parser.state = S.OPEN_TAG_SLASH
          } else if (isMatch(nameStart, c)) {
            strictFail(parser, 'No whitespace between attributes')
            parser.attribName = c
            parser.attribValue = ''
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_VALUE_UNQUOTED:
          if (!isAttribEnd(c)) {
            if (c === '&') {
              parser.state = S.ATTRIB_VALUE_ENTITY_U
            } else {
              parser.attribValue += c
            }
            continue
          }
          attrib(parser)
          if (c === '>') {
            openTag(parser)
          } else {
            parser.state = S.ATTRIB
          }
          continue

        case S.CLOSE_TAG:
          if (!parser.tagName) {
            if (isWhitespace(c)) {
              continue
            } else if (notMatch(nameStart, c)) {
              if (parser.script) {
                parser.script += '</' + c
                parser.state = S.SCRIPT
              } else {
                strictFail(parser, 'Invalid tagname in closing tag.')
              }
            } else {
              parser.tagName = c
            }
          } else if (c === '>') {
            closeTag(parser)
          } else if (isMatch(nameBody, c)) {
            parser.tagName += c
          } else if (parser.script) {
            parser.script += '</' + parser.tagName
            parser.tagName = ''
            parser.state = S.SCRIPT
          } else {
            if (!isWhitespace(c)) {
              strictFail(parser, 'Invalid tagname in closing tag')
            }
            parser.state = S.CLOSE_TAG_SAW_WHITE
          }
          continue

        case S.CLOSE_TAG_SAW_WHITE:
          if (isWhitespace(c)) {
            continue
          }
          if (c === '>') {
            closeTag(parser)
          } else {
            strictFail(parser, 'Invalid characters in closing tag')
          }
          continue

        case S.TEXT_ENTITY:
        case S.ATTRIB_VALUE_ENTITY_Q:
        case S.ATTRIB_VALUE_ENTITY_U:
          var returnState
          var buffer
          switch (parser.state) {
            case S.TEXT_ENTITY:
              returnState = S.TEXT
              buffer = 'textNode'
              break

            case S.ATTRIB_VALUE_ENTITY_Q:
              returnState = S.ATTRIB_VALUE_QUOTED
              buffer = 'attribValue'
              break

            case S.ATTRIB_VALUE_ENTITY_U:
              returnState = S.ATTRIB_VALUE_UNQUOTED
              buffer = 'attribValue'
              break
          }

          if (c === ';') {
            parser[buffer] += parseEntity(parser)
            parser.entity = ''
            parser.state = returnState
          } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
            parser.entity += c
          } else {
            strictFail(parser, 'Invalid character in entity name')
            parser[buffer] += '&' + parser.entity + c
            parser.entity = ''
            parser.state = returnState
          }

          continue

        default:
          throw new Error(parser, 'Unknown state: ' + parser.state)
      }
    } // while

    if (parser.position >= parser.bufferCheckPosition) {
      checkBufferLength(parser)
    }
    return parser
  }

  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
  /* istanbul ignore next */
  if (!String.fromCodePoint) {
    (function () {
      var stringFromCharCode = String.fromCharCode
      var floor = Math.floor
      var fromCodePoint = function () {
        var MAX_SIZE = 0x4000
        var codeUnits = []
        var highSurrogate
        var lowSurrogate
        var index = -1
        var length = arguments.length
        if (!length) {
          return ''
        }
        var result = ''
        while (++index < length) {
          var codePoint = Number(arguments[index])
          if (
            !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
            codePoint < 0 || // not a valid Unicode code point
            codePoint > 0x10FFFF || // not a valid Unicode code point
            floor(codePoint) !== codePoint // not an integer
          ) {
            throw RangeError('Invalid code point: ' + codePoint)
          }
          if (codePoint <= 0xFFFF) { // BMP code point
            codeUnits.push(codePoint)
          } else { // Astral code point; split in surrogate halves
            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            codePoint -= 0x10000
            highSurrogate = (codePoint >> 10) + 0xD800
            lowSurrogate = (codePoint % 0x400) + 0xDC00
            codeUnits.push(highSurrogate, lowSurrogate)
          }
          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
            result += stringFromCharCode.apply(null, codeUnits)
            codeUnits.length = 0
          }
        }
        return result
      }
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(String, 'fromCodePoint', {
          value: fromCodePoint,
          configurable: true,
          writable: true
        })
      } else {
        String.fromCodePoint = fromCodePoint
      }
    }())
  }
})( false ? this.sax = {} : exports)

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.10.0
(function() {
  "use strict";
  exports.stripBOM = function(str) {
    if (str[0] === '\uFEFF') {
      return str.substring(1);
    } else {
      return str;
    }
  };

}).call(this);


/***/ }),
/* 184 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.10.0
(function() {
  "use strict";
  var prefixMatch;

  prefixMatch = new RegExp(/(?!xmlns)^.*:/);

  exports.normalize = function(str) {
    return str.toLowerCase();
  };

  exports.firstCharLowerCase = function(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  };

  exports.stripPrefix = function(str) {
    return str.replace(prefixMatch, '');
  };

  exports.parseNumbers = function(str) {
    if (!isNaN(str)) {
      str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
    }
    return str;
  };

  exports.parseBooleans = function(str) {
    if (/^(?:true|false)$/i.test(str)) {
      str = str.toLowerCase() === 'true';
    }
    return str;
  };

}).call(this);


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLAttribute, create;

  create = __webpack_require__(0);

  module.exports = XMLAttribute = (function() {
    function XMLAttribute(parent, name, value) {
      this.stringify = parent.stringify;
      if (name == null) {
        throw new Error("Missing attribute name of element " + parent.name);
      }
      if (value == null) {
        throw new Error("Missing attribute value for attribute " + name + " of element " + parent.name);
      }
      this.name = this.stringify.attName(name);
      this.value = this.stringify.attValue(value);
    }

    XMLAttribute.prototype.clone = function() {
      return create(XMLAttribute.prototype, this);
    };

    XMLAttribute.prototype.toString = function(options, level) {
      return ' ' + this.name + '="' + this.value + '"';
    };

    return XMLAttribute;

  })();

}).call(this);


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLBuilder, XMLDeclaration, XMLDocType, XMLElement, XMLStringifier;

  XMLStringifier = __webpack_require__(192);

  XMLDeclaration = __webpack_require__(64);

  XMLDocType = __webpack_require__(65);

  XMLElement = __webpack_require__(66);

  module.exports = XMLBuilder = (function() {
    function XMLBuilder(name, options) {
      var root, temp;
      if (name == null) {
        throw new Error("Root element needs a name");
      }
      if (options == null) {
        options = {};
      }
      this.options = options;
      this.stringify = new XMLStringifier(options);
      temp = new XMLElement(this, 'doc');
      root = temp.element(name);
      root.isRoot = true;
      root.documentObject = this;
      this.rootObject = root;
      if (!options.headless) {
        root.declaration(options);
        if ((options.pubID != null) || (options.sysID != null)) {
          root.doctype(options);
        }
      }
    }

    XMLBuilder.prototype.root = function() {
      return this.rootObject;
    };

    XMLBuilder.prototype.end = function(options) {
      return this.toString(options);
    };

    XMLBuilder.prototype.toString = function(options) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      r = '';
      if (this.xmldec != null) {
        r += this.xmldec.toString(options);
      }
      if (this.doctype != null) {
        r += this.doctype.toString(options);
      }
      r += this.rootObject.toString(options);
      if (pretty && r.slice(-newline.length) === newline) {
        r = r.slice(0, -newline.length);
      }
      return r;
    };

    return XMLBuilder;

  })();

}).call(this);


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLDTDAttList, create;

  create = __webpack_require__(0);

  module.exports = XMLDTDAttList = (function() {
    function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      this.stringify = parent.stringify;
      if (elementName == null) {
        throw new Error("Missing DTD element name");
      }
      if (attributeName == null) {
        throw new Error("Missing DTD attribute name");
      }
      if (!attributeType) {
        throw new Error("Missing DTD attribute type");
      }
      if (!defaultValueType) {
        throw new Error("Missing DTD attribute default");
      }
      if (defaultValueType.indexOf('#') !== 0) {
        defaultValueType = '#' + defaultValueType;
      }
      if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
        throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");
      }
      if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
        throw new Error("Default value only applies to #FIXED or #DEFAULT");
      }
      this.elementName = this.stringify.eleName(elementName);
      this.attributeName = this.stringify.attName(attributeName);
      this.attributeType = this.stringify.dtdAttType(attributeType);
      this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
      this.defaultValueType = defaultValueType;
    }

    XMLDTDAttList.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<!ATTLIST ' + this.elementName + ' ' + this.attributeName + ' ' + this.attributeType;
      if (this.defaultValueType !== '#DEFAULT') {
        r += ' ' + this.defaultValueType;
      }
      if (this.defaultValue) {
        r += ' "' + this.defaultValue + '"';
      }
      r += '>';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLDTDAttList;

  })();

}).call(this);


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLDTDElement, create;

  create = __webpack_require__(0);

  module.exports = XMLDTDElement = (function() {
    function XMLDTDElement(parent, name, value) {
      this.stringify = parent.stringify;
      if (name == null) {
        throw new Error("Missing DTD element name");
      }
      if (!value) {
        value = '(#PCDATA)';
      }
      if (Array.isArray(value)) {
        value = '(' + value.join(',') + ')';
      }
      this.name = this.stringify.eleName(name);
      this.value = this.stringify.dtdElementValue(value);
    }

    XMLDTDElement.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<!ELEMENT ' + this.name + ' ' + this.value + '>';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLDTDElement;

  })();

}).call(this);


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLDTDEntity, create, isObject;

  create = __webpack_require__(0);

  isObject = __webpack_require__(2);

  module.exports = XMLDTDEntity = (function() {
    function XMLDTDEntity(parent, pe, name, value) {
      this.stringify = parent.stringify;
      if (name == null) {
        throw new Error("Missing entity name");
      }
      if (value == null) {
        throw new Error("Missing entity value");
      }
      this.pe = !!pe;
      this.name = this.stringify.eleName(name);
      if (!isObject(value)) {
        this.value = this.stringify.dtdEntityValue(value);
      } else {
        if (!value.pubID && !value.sysID) {
          throw new Error("Public and/or system identifiers are required for an external entity");
        }
        if (value.pubID && !value.sysID) {
          throw new Error("System identifier is required for a public external entity");
        }
        if (value.pubID != null) {
          this.pubID = this.stringify.dtdPubID(value.pubID);
        }
        if (value.sysID != null) {
          this.sysID = this.stringify.dtdSysID(value.sysID);
        }
        if (value.nData != null) {
          this.nData = this.stringify.dtdNData(value.nData);
        }
        if (this.pe && this.nData) {
          throw new Error("Notation declaration is not allowed in a parameter entity");
        }
      }
    }

    XMLDTDEntity.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<!ENTITY';
      if (this.pe) {
        r += ' %';
      }
      r += ' ' + this.name;
      if (this.value) {
        r += ' "' + this.value + '"';
      } else {
        if (this.pubID && this.sysID) {
          r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
        } else if (this.sysID) {
          r += ' SYSTEM "' + this.sysID + '"';
        }
        if (this.nData) {
          r += ' NDATA ' + this.nData;
        }
      }
      r += '>';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLDTDEntity;

  })();

}).call(this);


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLDTDNotation, create;

  create = __webpack_require__(0);

  module.exports = XMLDTDNotation = (function() {
    function XMLDTDNotation(parent, name, value) {
      this.stringify = parent.stringify;
      if (name == null) {
        throw new Error("Missing notation name");
      }
      if (!value.pubID && !value.sysID) {
        throw new Error("Public or system identifiers are required for an external entity");
      }
      this.name = this.stringify.eleName(name);
      if (value.pubID != null) {
        this.pubID = this.stringify.dtdPubID(value.pubID);
      }
      if (value.sysID != null) {
        this.sysID = this.stringify.dtdSysID(value.sysID);
      }
    }

    XMLDTDNotation.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<!NOTATION ' + this.name;
      if (this.pubID && this.sysID) {
        r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
      } else if (this.pubID) {
        r += ' PUBLIC "' + this.pubID + '"';
      } else if (this.sysID) {
        r += ' SYSTEM "' + this.sysID + '"';
      }
      r += '>';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLDTDNotation;

  })();

}).call(this);


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLNode, XMLRaw, create,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  create = __webpack_require__(0);

  XMLNode = __webpack_require__(7);

  module.exports = XMLRaw = (function(superClass) {
    extend(XMLRaw, superClass);

    function XMLRaw(parent, text) {
      XMLRaw.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing raw text");
      }
      this.value = this.stringify.raw(text);
    }

    XMLRaw.prototype.clone = function() {
      return create(XMLRaw.prototype, this);
    };

    XMLRaw.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += this.value;
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLRaw;

  })(XMLNode);

}).call(this);


/***/ }),
/* 192 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLStringifier,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    hasProp = {}.hasOwnProperty;

  module.exports = XMLStringifier = (function() {
    function XMLStringifier(options) {
      this.assertLegalChar = bind(this.assertLegalChar, this);
      var key, ref, value;
      this.allowSurrogateChars = options != null ? options.allowSurrogateChars : void 0;
      this.noDoubleEncoding = options != null ? options.noDoubleEncoding : void 0;
      ref = (options != null ? options.stringify : void 0) || {};
      for (key in ref) {
        if (!hasProp.call(ref, key)) continue;
        value = ref[key];
        this[key] = value;
      }
    }

    XMLStringifier.prototype.eleName = function(val) {
      val = '' + val || '';
      return this.assertLegalChar(val);
    };

    XMLStringifier.prototype.eleText = function(val) {
      val = '' + val || '';
      return this.assertLegalChar(this.elEscape(val));
    };

    XMLStringifier.prototype.cdata = function(val) {
      val = '' + val || '';
      if (val.match(/]]>/)) {
        throw new Error("Invalid CDATA text: " + val);
      }
      return this.assertLegalChar(val);
    };

    XMLStringifier.prototype.comment = function(val) {
      val = '' + val || '';
      if (val.match(/--/)) {
        throw new Error("Comment text cannot contain double-hypen: " + val);
      }
      return this.assertLegalChar(val);
    };

    XMLStringifier.prototype.raw = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.attName = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.attValue = function(val) {
      val = '' + val || '';
      return this.attEscape(val);
    };

    XMLStringifier.prototype.insTarget = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.insValue = function(val) {
      val = '' + val || '';
      if (val.match(/\?>/)) {
        throw new Error("Invalid processing instruction value: " + val);
      }
      return val;
    };

    XMLStringifier.prototype.xmlVersion = function(val) {
      val = '' + val || '';
      if (!val.match(/1\.[0-9]+/)) {
        throw new Error("Invalid version number: " + val);
      }
      return val;
    };

    XMLStringifier.prototype.xmlEncoding = function(val) {
      val = '' + val || '';
      if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-]|-)*$/)) {
        throw new Error("Invalid encoding: " + val);
      }
      return val;
    };

    XMLStringifier.prototype.xmlStandalone = function(val) {
      if (val) {
        return "yes";
      } else {
        return "no";
      }
    };

    XMLStringifier.prototype.dtdPubID = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdSysID = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdElementValue = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdAttType = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdAttDefault = function(val) {
      if (val != null) {
        return '' + val || '';
      } else {
        return val;
      }
    };

    XMLStringifier.prototype.dtdEntityValue = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.dtdNData = function(val) {
      return '' + val || '';
    };

    XMLStringifier.prototype.convertAttKey = '@';

    XMLStringifier.prototype.convertPIKey = '?';

    XMLStringifier.prototype.convertTextKey = '#text';

    XMLStringifier.prototype.convertCDataKey = '#cdata';

    XMLStringifier.prototype.convertCommentKey = '#comment';

    XMLStringifier.prototype.convertRawKey = '#raw';

    XMLStringifier.prototype.assertLegalChar = function(str) {
      var chars, chr;
      if (this.allowSurrogateChars) {
        chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uFFFE-\uFFFF]/;
      } else {
        chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/;
      }
      chr = str.match(chars);
      if (chr) {
        throw new Error("Invalid character (" + chr + ") in string: " + str + " at index " + chr.index);
      }
      return str;
    };

    XMLStringifier.prototype.elEscape = function(str) {
      var ampregex;
      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
    };

    XMLStringifier.prototype.attEscape = function(str) {
      var ampregex;
      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
    };

    return XMLStringifier;

  })();

}).call(this);


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLNode, XMLText, create,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  create = __webpack_require__(0);

  XMLNode = __webpack_require__(7);

  module.exports = XMLText = (function(superClass) {
    extend(XMLText, superClass);

    function XMLText(parent, text) {
      XMLText.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing element text");
      }
      this.value = this.stringify.eleText(text);
    }

    XMLText.prototype.clone = function() {
      return create(XMLText.prototype, this);
    };

    XMLText.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += this.value;
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLText;

  })(XMLNode);

}).call(this);


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLBuilder, assign;

  assign = __webpack_require__(170);

  XMLBuilder = __webpack_require__(186);

  module.exports.create = function(name, xmldec, doctype, options) {
    options = assign({}, xmldec, doctype, options);
    return new XMLBuilder(name, options).root();
  };

}).call(this);


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 196 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__(71);

/*<replacement>*/
var util = __webpack_require__(14);
util.inherits = __webpack_require__(8);
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(5).Buffer;
/*<replacement>*/
var bufferShim = __webpack_require__(39);
/*</replacement>*/

module.exports = BufferList;

function BufferList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

BufferList.prototype.push = function (v) {
  var entry = { data: v, next: null };
  if (this.length > 0) this.tail.next = entry;else this.head = entry;
  this.tail = entry;
  ++this.length;
};

BufferList.prototype.unshift = function (v) {
  var entry = { data: v, next: this.head };
  if (this.length === 0) this.tail = entry;
  this.head = entry;
  ++this.length;
};

BufferList.prototype.shift = function () {
  if (this.length === 0) return;
  var ret = this.head.data;
  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
  --this.length;
  return ret;
};

BufferList.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
};

BufferList.prototype.join = function (s) {
  if (this.length === 0) return '';
  var p = this.head;
  var ret = '' + p.data;
  while (p = p.next) {
    ret += s + p.data;
  }return ret;
};

BufferList.prototype.concat = function (n) {
  if (this.length === 0) return bufferShim.alloc(0);
  if (this.length === 1) return this.head.data;
  var ret = bufferShim.allocUnsafe(n >>> 0);
  var p = this.head;
  var i = 0;
  while (p) {
    p.data.copy(ret, i);
    i += p.data.length;
    p = p.next;
  }
  return ret;
};

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43).PassThrough


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43).Transform


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13), __webpack_require__(24)))

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = __webpack_require__(23).EventEmitter;
var inherits = __webpack_require__(8);

inherits(Stream, EE);
Stream.Readable = __webpack_require__(43);
Stream.Writable = __webpack_require__(202);
Stream.Duplex = __webpack_require__(197);
Stream.Transform = __webpack_require__(201);
Stream.PassThrough = __webpack_require__(200);

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 207 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
});
//# sourceMappingURL=bpfimporter.js.map