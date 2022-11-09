// https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript

function tailAndHead(arr) {
  const arrSum = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arrSum.push(
      Number(String(arr[i]).slice(-1)) + Number(String(arr[i + 1]).slice(0, 1))
    );
  }
  const arrProduct = arrSum.reduce((elem, nextElem) => elem * nextElem);
  return arrProduct;
}

// https://www.codewars.com/kata/5732b0351eb838d03300101d

function blackAndWhite(arr) {
  if (Array.isArray(arr) === false) {
    return "It's a fake array";
  } else if (arr.includes(5) && arr.includes(13)) {
    return "It's a black array";
  } else {
    return "It's a white array";
  }
}

// https://www.codewars.com/kata/5735956413c2054a680009ec

function rndCode() {
  const strLetter = "ABCDEFGHIJKLM";
  const strNums = "0123456789";
  const strSymb = "~!@#$%^&*";
  function rndLetter() {
    const arrLetter = strLetter.split("");
    const randomLetter =
      arrLetter[Math.floor(Math.random() * arrLetter.length)];
    return randomLetter;
  }

  function rndNum() {
    const arrNums = strNums.split("");
    const randomNum = arrNums[Math.floor(Math.random() * arrNums.length)];
    return randomNum;
  }
  function rndSymb() {
    const arrSymb = strSymb.split("");
    const randomSymb = arrSymb[Math.floor(Math.random() * arrSymb.length)];
    return randomSymb;
  }

  return (
    rndLetter() +
    rndLetter() +
    rndNum() +
    rndNum() +
    rndNum() +
    rndNum() +
    rndSymb() +
    rndSymb()
  );
}

rndCode();


