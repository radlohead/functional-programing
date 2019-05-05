import { curry, curry2, curry3 } from './lib-compiled.js'

const log = console.log
const add = (a, b) => a + b
const volume = (a, b, c) => a + b + c
const curried = curry3(volume)

log(curry(add)([2, 5]))
log(curry2(add, 5)(4))
log(curried(1)(2)(3))
