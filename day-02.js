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
var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";
function Dad() {
  return d1 + a2 + d2;
}
function Bee() {
  return b1 + e2 + e2;
}
function banana() {
  return b2 + a2 + n2 + a2 + n2 + a2;
}

function answer1() {
  return "no";
}
function answer2() {
  return "no";
}
function answer3() {
  return "yes";
}


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
