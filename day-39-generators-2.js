// https://www.codewars.com/kata/5637ead70013386e30000027/train/javascript

function* generator(a) {
  for (let b = 1; b <= 10; b++) {
    let c = a * b;
    yield `${a} x ${b} = ${c}`;
  }
}
