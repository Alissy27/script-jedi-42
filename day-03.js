// https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript

function trueOrFalse(val) {
  return Boolean(val).toString();
}

function trueOrFalse(val) {
  if (val == false) {
    return "false";
  } else if (val == null && val == undefined) {
    return "false";
  } else {
    return "true";
  }
}

// https://www.codewars.com/kata/57202aefe8d6c514300001fd

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
}

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else if (n >= 10) {
    return n * 90;
  }
}

// https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript

function howManydays(month) {
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    //  break;
    case 2:
      return 28;
    //  break;
    default:
      return 31;
  }
}
