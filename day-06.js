// https://www.codewars.com/kata/maximum-multiple/train/javascript

// first solution was

function maxMultiple(divisor, bound) {
  let remainder = bound % divisor;
  let d = bound - remainder
    if (bound % divisor === 0) {
      return bound
    } else if (bound % divisor !== 0) {
      return d
    }
}

// and rewrited

function maxMultiple(divisor, bound) {
  let remainder = bound % divisor;
  let d = bound - remainder;
  return d;
}

