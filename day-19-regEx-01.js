// https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript

function countAnimals(animals, count) {
  let res = [];
  for (let i = 0; i < count.length; i++) {
    let regEx = new RegExp(count[i], "g");
    if (animals.match(regEx) !== null) {
      res.push(animals.match(regEx).length);
    } else if (animals.match(regEx) == null) {
      res.push(0);
    }
  }
  return res;
}

// 
