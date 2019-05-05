import { go1 } from './lib-compiled'

const log = console.log
const f1 = go1(2, a => a * 2, a => a * a)

log(f1)
