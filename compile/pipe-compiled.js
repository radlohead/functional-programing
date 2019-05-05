"use strict";

var _libCompiled = require("./lib-compiled");

var log = console.log;
var f1 = (0, _libCompiled.pipe1)(function (n) {
  return n + 1;
}, function (n) {
  return n + n;
}, function (n) {
  return n * n;
});
var f2 = (0, _libCompiled.pipe2)(function (a, b) {
  return a + b;
}, function (c) {
  return c * c;
});
var f3 = (0, _libCompiled.pipe3)(function (n) {
  return n + 1;
}, function (n) {
  return n * n;
});
log(f1(1));
log(f2(3, 4));
log(f3(3));
