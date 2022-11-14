//  https://www.codewars.com/kata/540de1f0716ab384b4000828/train/javascript

function spread(funcSum, list) {
  return funcSum.apply(null, list);
}

function funcSum() {
  for (let i = 0, res = 0; i < arguments.length; i++) {
    res += arguments[i++];
    return res;
  }
}


// https://www.codewars.com/kata/5258b272e6925db09900386a/train/javascript

function numbers(...argList) {
  return argList.every((arg) => typeof arg === "number");
}
