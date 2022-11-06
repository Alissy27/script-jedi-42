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

