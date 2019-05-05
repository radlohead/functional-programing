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
