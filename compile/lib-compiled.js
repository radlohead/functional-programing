"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.curry3 = exports.curry2 = exports.curry = void 0;

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
