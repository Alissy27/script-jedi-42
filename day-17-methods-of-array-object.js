// http://www.codewars.com/kata/573023c81add650b84000429

function countGrade(scores) {
  const scoresS = [];
  const scoresA = [];
  const scoresB = [];
  const scoresC = [];
  const scoresD = [];
  const scoresX = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 100) {
      scoresS.push(scores[i]);
    } else if (scores[i] < 100 && scores[i] >= 90) {
      scoresA.push(scores[i]);
    } else if (scores[i] < 90 && scores[i] >= 80) {
      scoresB.push(scores[i]);
    } else if (scores[i] < 80 && scores[i] >= 60) {
      scoresC.push(scores[i]);
    } else if (scores[i] < 60 && scores[i] >= 0) {
      scoresD.push(scores[i]);
    } else if (scores[i] === -1) {
      scoresX.push(scores[i]);
    }
  }

  const result = new Object();

  result.S = scoresS.length;
  result.A = scoresA.length;
  result.B = scoresB.length;
  result.C = scoresC.length;
  result.D = scoresD.length;
  result.X = scoresX.length;

  return result;
}

// https://www.codewars.com/kata/57308546bd9f0987c2000d07

function mirrorImage(arr) {
  const arrMirror = [];
  const arrNull = [-1, -1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1].toString().split("").reverse().join("")) {
      arrMirror.push(arr[i], arr[i + 1]);
    }
  }
  if (arrMirror.length >= 2) {
    return arrMirror.splice(0, 2);
  } else {
    return arrNull;
  }
}

// https://www.codewars.com/kata/5731861d05d14d6f50000626

function bigToSmall(arr) {
  const wholeArr = arr.reduce((acc, val) => acc.concat(val), []);
  const sortedArr = wholeArr.sort((a, b) => b - a);
  return sortedArr.join(">");
}
