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

// https://www.codewars.com/kata/is-he-gonna-survive/train/javascript

function hero(bullets, dragons) {
  let needBullets = dragons * 2;
  if (needBullets <= bullets) {
    return true;
  } else {
    return false;
  }
}

//https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript

function unusualFive() {
  let str = "fives";
  return str.length;
}
