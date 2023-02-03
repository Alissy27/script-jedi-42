// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2) {
  if (s1.size === s2.size) {
    const array = [].concat(Array.from(s1), Array.from(s2));
    const setArr = new Set(array);
    if (setArr.size === s1.size) {
      return true;
    } else {
      return false;
    }
    return true;
  } else {
    return false;
  }
}

function notEqual(s1, s2){
  return !areEqual(s1, s2)
}


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
