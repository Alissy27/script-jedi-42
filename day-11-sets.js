// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

//no solution yet



// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript

function process2Arrays(arr1, arr2) {
  let result = [];

  const arrayRes = arr1.concat(arr2);
  const setArray = new Set(arrayRes);
  const elemBothArr = arrayRes.length - setArray.size;

  const uniqueOne = arr1.length - elemBothArr;
  const uniqueTwo = arr2.length - elemBothArr;
  const uniqueBoth = uniqueOne + uniqueTwo;

  result.push(elemBothArr, uniqueBoth, uniqueOne, uniqueTwo);
  return result;
}
