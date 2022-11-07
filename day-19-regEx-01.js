// https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript

function countAnimals(animals, count) {
  let res = [];
  for (let i = 0; i < count.length; i++) {
    const regEx = new RegExp(count[i], "g");
    if (animals.match(regEx) !== null) {
      res.push(animals.match(regEx).length);
    } else if (animals.match(regEx) == null) {
      res.push(0);
    }
  }
  return res;
}

// https://www.codewars.com/kata/573975d3ac3eec695b0013e0/train/javascript

function findSimilarity(str, word) {
  const arrOfStr = str.split(" ");
  let newStr = "";
  const firstLetter = word.slice(0, 1);
  const lastLetter = word.slice(-1);
  for (let findWord of arrOfStr) {
    if (findWord.length === word.length) {
      if (
        firstLetter === findWord.slice(0, 1) &&
        lastLetter === findWord.slice(-1)
      ) {
        newStr += findWord + " ";
      }
    }
  }
  return newStr.trim();
}
