"use strict";

var _libCompiled = require("./lib-compiled.js");

var log = console.log;

var add = function add(a, b) {
  return a + b;
};

var volume = function volume(a, b, c) {
  return a + b + c;
};

var curried = (0, _libCompiled.curry3)(volume);
log((0, _libCompiled.curry)(add)([2, 5]));
log((0, _libCompiled.curry2)(add, 5)(4));
log(curried(1)(2)(3));
