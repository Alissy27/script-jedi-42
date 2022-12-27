//Basic data types--Number
//https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript

let v1 = 50;
let v2 = 100;
let v3 = 150;
let v4 = 200;
let v5 = 2;
let v6 = 250;

const equal1 = () => v1 + v1;
const equal2 = () => v3 - v1;
const equal3 = () => v1 * v5;
const equal4 = () => v4 / v5;
const equal5 = () => v2 % v4;

//Basic data types--String
//https://www.codewars.com/kata/571edea4b625edcb51000d8e

let [a1, a2, b1, b2, c1, c2, d1, d2, e1, e2, n1, n2] = [
  "A",
  "a",
  "B",
  "b",
  "C",
  "c",
  "D",
  "d",
  "E",
  "e",
  "N",
  "n",
];

const Dad = () => d1 + a2 + d2;
const Bee = () => b1 + e2 + e2;
const banana = () => b2 + a2 + n2 + a2 + n2 + a2;

const answer1 = () => "no";
const answer2 = () => "no";
const answer3 = () => "yes";

//Basic data types--Array
//https://www.codewars.com/kata/571effabb625ed9b0600107a

function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function pushElement(arr) {
  let el = 1;
  arr.push(el);
  return arr;
}
function popElement(arr) {
  arr.pop();
  return arr;
}

//Basic data types--Object
//https://www.codewars.com/kata/571f1eb77e8954a812000837

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
