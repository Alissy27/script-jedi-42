// https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(body, tail) { 
   const subString = body.substr(body.length - tail.length)
   return subString === tail 
}

function correctTail(body, tail) {
  const subString = body.substr(-1);

  if (subString === tail) {
    return true;
  } else {
    return false;
  }
}



// https://www.codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {
  let result;
  if (bonus === true) {
    result = salary * 10;
  } else {
    result = salary;
  }
  return `\u00A3` + result;
}

// https://www.codewars.com/kata/5a58d889880385c2f40000aa

function automorphic(n) {
  return String(n ** 2).endsWith(n) ? "Automorphic" : "Not!!";
}

function automorphic(n) {
  const square = n * n;
  stingOne = n + "";
  stringTwo = square + "";
  if (stringTwo.endsWith(stingOne)) {
    return "Automorphic";
  } else {
    return "Not!!";
  }
}

