// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript

function alienLanguage(str) {
  const splitedArr = str.split(" ");
  const result = [];
  for (let i = 0; i < splitedArr.length; i++) {
    result.push(
      splitedArr[i].slice(0, -1).toUpperCase() +
        splitedArr[i].slice(-1).toLowerCase()
    );
  }

  return result.join(" ").toString();
}

// https://www.codewars.com/kata/57284d23e81185ae6200162a
//tests passed, answers no

function topSecret(str) {
  const arrFromString = str.split("");

  const res = [];
  for (let i = 0; i < arrFromString.length; i++) {
    if (
      arrFromString[i].charCodeAt() > 68 &&
      arrFromString[i].charCodeAt() < 122 &&
      arrFromString[i].charCodeAt() !== 97 &&
      arrFromString[i].charCodeAt() !== 98 &&
      arrFromString[i].charCodeAt() !== 99
    ) {
      res.push(String.fromCharCode(arrFromString[i].charCodeAt() - 3));
    } else if (arrFromString[i].charCodeAt() === 65) {
      res.push(String.fromCharCode(88));
    } else if (arrFromString[i].charCodeAt() === 66) {
      res.push(String.fromCharCode(89));
    } else if (arrFromString[i].charCodeAt() === 67) {
      res.push(String.fromCharCode(90));
    } else if (arrFromString[i].charCodeAt() === 97) {
      res.push(String.fromCharCode(120));
    } else if (arrFromString[i].charCodeAt() === 98) {
      res.push(String.fromCharCode(121));
    } else if (arrFromString[i].charCodeAt() === 99) {
      res.push(String.fromCharCode(122));
    } else {
      res.push(String.fromCharCode(arrFromString[i].charCodeAt()));
    }
  }
  return res.join("");
}

//  https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

function fiveLine(s) {
  const newS = s.trim();
  let result = "";

  for (let i = 0; i <= 4; i++) {
    result = result + newS + newS.repeat(i) + "\n";
  }
  return result.trim();
}
  
    
