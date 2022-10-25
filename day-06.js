// https://www.codewars.com/kata/maximum-multiple/train/javascript

// first solution was

function maxMultiple(divisor, bound) {
  const remainder = bound % divisor;
  const result = bound - remainder;
  if (bound % divisor === 0) {
    return bound;
  } else if (bound % divisor !== 0) {
    return result;
  }
}

// and rewrited

function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

// https://www.codewars.com/kata/is-he-gonna-survive/train/javascript

function hero(bullets, dragons) {
  const needBullets = dragons * 2;
  if (needBullets <= bullets) {
    return true;
  } else {
    return false;
  }
}

//https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript

function unusualFive() {
  const result = "fives";
  return result.length;
}
