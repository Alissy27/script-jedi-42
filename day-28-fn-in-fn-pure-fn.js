//


// https://www.codewars.com/kata/59bdbe9d46038724ca0000b9/train/javascript

const state = {
  modifier: 2,
};

function solution(arr, state) {
  const newArr = [...arr];
  for (let i = 0; i < newArr.length; ++i) {
    newArr[i] += 2 * state.modifier;
  }
  return newArr;
}
