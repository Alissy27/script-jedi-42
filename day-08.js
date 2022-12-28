// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

const whatNumberIsIt = (n) => {
  return `Input number is ${
    n === Number.MAX_VALUE
      ? "Number.MAX_VALUE"
      : n === Number.MIN_VALUE
      ? "Number.MIN_VALUE"
      : n === Number.NEGATIVE_INFINITY
      ? "Number.NEGATIVE_INFINITY"
      : n === Number.POSITIVE_INFINITY
      ? "Number.POSITIVE_INFINITY"
      : Number.isNaN(n)
      ? "Number.NaN"
      : n
  }`;
};


//https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript

function colorOf(r, g, b) {
  return "#" + toHexWithPad(r, 2) + toHexWithPad(g, 2) + toHexWithPad(b, 2);
}

function toHexWithPad(dec, pad) {
  return dec.toString(16).padStart(pad, 0);
}

function colorOf(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  if (r.length === 1) {
    r = "0" + r;
  }
  if (g.length === 1) {
    g = "0" + g;
  }
  if (b.length === 1) {
    b = "0" + b;
  }
  return "#" + r + g + b;
}

// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

function howManySmaller(arr, n) {
  const newArr = arr.map((arr) => 0 + +arr.toFixed(2));
  const result = [];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < n) {
      result.push(newArr[i]);
    }
  }
  return result.length;
}
