import { pipe1, pipe2, pipe3 } from './lib-compiled'

const log = console.log
const f1 = pipe1(n => n + 1, n => n + n, n => n * n)
const f2 = pipe2((a, b) => a + b, c => c * c)
const f3 = pipe3(n => n + 1, n => n * n)

log(f1(1))
log(f2(3, 4))
log(f3(3))
