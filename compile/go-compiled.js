"use strict";

var _libCompiled = require("./lib-compiled");

var log = console.log;
var f1 = (0, _libCompiled.go1)(2, function (a) {
  return a * 2;
}, function (a) {
  return a * a;
});
log(f1);
