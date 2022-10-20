// https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(body, tail) {
  let sub = body.substr(-1);

  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}


// https://www.codewars.com/kata/56f6ad906b88de513f000d96
