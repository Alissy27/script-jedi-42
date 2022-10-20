// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

function padIt(str, n) {
  while (n > 0) {
    if (n % 2) {
      str = "*" + str;
    } else {
      str = str + "*";
    }
    n--;
  }
  return str;
}

// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr) {
  let odd = [],
    even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) odd.push(arr[i]);
    else even.push(arr[i]);
  }

  return [odd, even];
}

// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript

// add solution!!!

// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj) {
  let z = [];
  for (let key in obj) {
    if (key.length == 5) z.push(key);
    if (obj[key].length == 5) z.push(obj[key]);
  }
  return z;
}
