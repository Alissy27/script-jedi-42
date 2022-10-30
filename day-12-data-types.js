// https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript

function wordToBin(str) {
  const arrOfString = str.split("");
  const res = [];
  for (let i = 0; i < arrOfString.length; i++) {
    res.push(0 + arrOfString[i].charCodeAt().toString(2));
  }

  return res;
}

// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript

function calc(x) {
  const arr = x.split("");
  const arrNum = [];

  for (let i = 0; i < arr.length; i++) {
    arrNum.push(arr[i].charCodeAt() + "");
  }
  let totalOne = arrNum.join("");

  const arrForTotalOne = arrNum.join("").split("");
  const sumTotalOne = arrForTotalOne.reduce(function (sum, elem) {
    return Number(sum) + Number(elem);
  });

  const arrForTotalTwo = [];
  for (let j = 0; j < arrForTotalOne.length; j++) {
    if (arrForTotalOne[j] === "7") {
      arrForTotalTwo.push("1");
    } else {
      arrForTotalTwo.push(arrForTotalOne[j]);
    }
  }
  const sumTotalTwo = arrForTotalTwo.reduce(function (sum, elem) {
    return Number(sum) + Number(elem);
  });
  const totalTwo = arrForTotalTwo.join("");

  return sumTotalOne - sumTotalTwo;
}
