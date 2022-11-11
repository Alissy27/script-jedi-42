// https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript

function solution(...str) {
  const strArray = Array.from(str);
  const strSet = new Set(strArray);
  return str.length === strSet.size ? false : true;
}
