"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe3 = exports.pipe2 = exports.pipe1 = exports.curry3 = exports.curry2 = exports.curry = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var curry = function curry(fn) {
  return function (arg) {
    return fn.apply(void 0, _toConsumableArray(arg));
  };
};

exports.curry = curry;

var curry2 = function curry2(fn) {
  for (var _len = arguments.length, arg1 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arg1[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, arg2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arg2[_key2] = arguments[_key2];
    }

    return fn.apply(void 0, arg1.concat(arg2));
  };
};

exports.curry2 = curry2;

var curry3 = function curry3(fn) {
  var fnLen = fn.length;
  return function resolver() {
    var memory = Array.prototype.slice.call(arguments);
    return function () {
      var local = memory.slice();
      Array.prototype.push.apply(local, arguments);
      var next = local.length >= fnLen ? fn : resolver;
      return next.apply(null, local);
    };
  }();
};

exports.curry3 = curry3;

var pipe1 = function pipe1() {
  for (var _len3 = arguments.length, arg = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    arg[_key3] = arguments[_key3];
  }

  var fns = arg;
  return function (arg) {
    return [].concat(fns).reduce(function (arg, fn) {
      return fn(arg);
    }, arg);
  };
};

exports.pipe1 = pipe1;

var pipe2 = function pipe2(op1, op2) {
  return function () {
    var result1 = op1.apply(void 0, arguments);
    return op2(result1);
  };
};

exports.pipe2 = pipe2;

var pipe3 = function pipe3(op1, op2) {
  return function (arg) {
    return op2(op1(arg));
  };
};

exports.pipe3 = pipe3;
