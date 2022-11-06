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
