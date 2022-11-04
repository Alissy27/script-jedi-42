// https://www.codewars.com/kata/572cb264362806af46000793/train/javascript

function threeInOne(arr) {
  const chunk = 3;
  const subArray = [];
  const result = [];

  for (let i = 0; i < Math.ceil(arr.length / chunk); i++) {
    subArray[i] = arr.slice(i * chunk, i * chunk + chunk);
  }

  for (let k = 0; k < subArray.length; k++) {
    let sum = 0;
    for (let j = 0; j < subArray[k].length; j++) {
      sum = sum + subArray[k][j];
    }
    result.push(sum);
  }

  return result;
}

// https://www.codewars.com/kata/572fdeb4380bb703fc00002c/solutions/javascript

function isolateIt(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const newElem = [];
    const leftSide = arr[i].slice(0, Math.floor(arr[i].length / 2)).split();
    const rightSide = arr[i]
      .slice(Math.round(arr[i].length / 2), arr[i].length)
      .split();

    newElem.push(leftSide);
    newElem.push(rightSide);
    result.push(newElem.join("|"));
  }

  return result;
}
