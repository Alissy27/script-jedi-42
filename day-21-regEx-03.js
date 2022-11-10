// https://www.codewars.com/kata/573fb9223f9793e485000453/train/javascript

const regex = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
function addCommas(money, reg) {
  return money.replace(reg, (x) => x + ",");
}
