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

