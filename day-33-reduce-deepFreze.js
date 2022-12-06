//  https://www.codewars.com/kata/array-number-reduce/train/javascript

Array.prototype.reduce = function (process, initial) {
  for (let i = 0; i < this.length; i++) {
    if (initial !== undefined) {
      initial = process(initial, this[i]);
    } else {
      initial = this[0];
    }
  }
  return initial;
};


// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056

Object.deepFreeze = function (obj) {
  Object.freeze(obj);
  for (const key in obj) Object.deepFreeze(obj[key]);
};
