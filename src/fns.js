const delegateToSelf = fnName => fn => type => type[fnName](fn)

export const prop = p => source => source[p]

export const flip2 = fn => a => b => fn(b)(a)

export const id = x => x

export const map = delegateToSelf('map')
export const sort = delegateToSelf('sort')
export const filter = delegateToSelf('filter')
export const peek = x => (console.log(x), x)

export const pipe =
  (...fns) =>
  input =>
    fns.reduce((result, fn) => fn(result), input)

export const compose =
  (...fns) =>
  input =>
    fns.reduceRight((result, fn) => fn(result), input)

const uniqueKeys = ar =>
  ar.reduce((all = {}, current) => Object.assign(all, { [current]: true }), {})

export const unique = pipe(uniqueKeys, Object.keys)

export const equals = a => b => a === b

export const isArray = Array.isArray
export const length = arr => arr.length

export const allPass =
  (...preds) =>
  data =>
    preds.every(pred => pred(data))
export const anyPass =
  (...preds) =>
  data =>
    preds.some(pred => pred(data))

export const isEmptyArray = allPass(isArray, pipe(length, equals(0)))

export const isEmpty = anyPass(isEmptyArray)
