
// https://bigfrontend.dev/problem/implement-basic-throttle


const sum = (...args) => args.reduce((sum, val) => sum + val, 0)


function memo(func, resolver) {
  const cache = new Map()

  return function (...args) {
    const key = resolver
      ? resolver(...args)
      : args.join('_')
    
    if (cache.has(key)) {
      return cache.get(key)
    }
    
    const result = func.apply(this, args)
    cache.set(key, result)
    return result
  }
}


const memoed = memo(sum, () => 'samekey')

console.log(memoed(1, 2, 3))
console.log(memoed(1, 2, 4))
console.log(memoed(1, 2, 5))