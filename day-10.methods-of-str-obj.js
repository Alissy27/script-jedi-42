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

// NO SOLUTION YET

//  https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

function fiveLine(s) {
  const newS = s.trim();
  let result = "";

  for (let i = 0; i <= 4; i++) {
    result = result + newS + newS.repeat(i) + "\n";
  }
  return result.trim();
}
  
    
