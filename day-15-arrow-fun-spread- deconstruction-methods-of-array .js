// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/train/javascript

function loopArr(arr, direction, steps) {
  if (direction === "left") {
    const res = arr.slice(0, steps);
    const slicedArr = arr.slice(steps);
    return slicedArr.concat(res);
  } else if (direction === "right") {
    const res = arr.slice(0, -steps);
    const slicedArr = arr.slice(-steps);
    return slicedArr.concat(res);
  }
}
