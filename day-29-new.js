// https://www.codewars.com/kata/how-new-works

const myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.constructor = MyObject;
MyObject.call(myObj);

// https://www.codewars.com/kata/558cb3df5f511f40d500001d/train/javascript

function nouveau(Constructor, ...args) {
  return Reflect.construct(Constructor, args);
}
