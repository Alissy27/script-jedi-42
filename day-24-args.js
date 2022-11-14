// https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript

function solution(...str) {
  const strArray = Array.from(str);
  const strSet = new Set(strArray);
  return str.length === strSet.size ? false : true;
}

//  https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript

function last() {
  const lastElem = arguments[arguments.length - 1];
  return lastElem[lastElem.length - 1] || lastElem;
}
