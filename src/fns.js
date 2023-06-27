const delegateToSelf = (fnName) => (fn) => (type) => type[fnName](fn)

export const map = delegateToSelf('map')
export const sort = delegateToSelf('sort')
export const peek = (x) => (console.log(x), x)
