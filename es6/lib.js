export const curry = fn => arg => fn(...arg)
export const curry2 = (fn, ...arg1) => (...arg2) => fn(...arg1, ...arg2)
export const curry3 = fn => {
    const fnLen = fn.length

    return (function resolver() {
        const memory = Array.prototype.slice.call(arguments)
        return function() {
            const local = memory.slice()
            Array.prototype.push.apply(local, arguments)
            const next = local.length >= fnLen ? fn : resolver
            return next.apply(null, local)
        }
    })()
}
export const pipe1 = (...arg) => {
    const fns = arg
    return arg => {
        return [...fns].reduce((arg, fn) => {
            return fn(arg)
        }, arg)
    }
}
export const pipe2 = (op1, op2) => {
    return (...arg) => {
        const result1 = op1(...arg)
        return op2(result1)
    }
}
export const pipe3 = (op1, op2) => arg => op2(op1(arg))
