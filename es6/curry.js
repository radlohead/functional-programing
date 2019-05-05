import { curry } from './lib-compiled.js'

const add = (a, b) => a + b
console.log(curry(add)([2, 5]))
