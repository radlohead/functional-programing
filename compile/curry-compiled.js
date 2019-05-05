"use strict";

var _libCompiled = require("./lib-compiled.js");

var add = function add(a, b) {
  return a + b;
};

console.log((0, _libCompiled.curry)(add)([2, 5]));
