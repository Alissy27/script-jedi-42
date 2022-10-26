// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

function cutIt(arr) {
  const shortestString = arr.reduce(function (shortest, currentWord) {
    let shortestWord;
    if (shortest.length < currentWord.length) {
      const shortestWord = shortest;
      return shortestWord;
    } else {
      shortestWord = currentWord;
      return shortestWord;
    }
    return shortestWord.length;
  });

  const cutedArray = arr.map(function (elem) {
    return elem.substring(0, shortestString.length);
  });

  return cutedArray;
}

// https://www.codewars.com/kata/57277a31e5e51450a4000010

function firstToLast(str, c) {
  if (str.search(c) !== -1) {
    return str.lastIndexOf(c) - str.indexOf(c);
  } else {
    return -1;
  }
}

// https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

function splitAndMerge(string, separator) {
  const array = string.split(" ");
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i].toString().split("").join(separator).concat(" "));
  }
  return result.join("").toString().trim();
}
