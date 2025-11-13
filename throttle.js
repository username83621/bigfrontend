
// https://bigfrontend.dev/problem/implement-basic-throttle


function clicked() {
  console.log('clicked')
}


function throttle(func, wait) {
  let waiting = false
  let lastArgs = null

  return function (...args) {
    if (waiting) {
      lastArgs = args
      return;
    }

    func.apply(this, args)
    waiting = true

    setTimeout(() => {
      if (lastArgs) {
        func.apply(this, lastArgs)
        lastArgs = null
      }

      waiting = false
    }, wait)
  }
}


const throttledFunc = throttle(clicked, 1000)

const body = document.querySelector('body')
body.addEventListener('click', throttledFunc)