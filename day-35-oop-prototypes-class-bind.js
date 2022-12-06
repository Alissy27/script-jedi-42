// https://www.codewars.com/kata/js-prototypes-module-number-1-object-prototypes

Object.prototype.description = "TODO: GIVE ME A DESCRIPTION" 


// https://www.codewars.com/kata/javascript-class-like-objects

class Animal {
  constructor(name, type) {
    (this.name = name), (this.type = type);
  }
  toString() {
    return this.name + " is a " + this.type;
  }
}


// https://www.codewars.com/kata/power-bind

Function.prototype.bind = function (ctx) {
  const func = this;
  return function (...args) {
    const rightCtx = this === global ? ctx : this;
    return func.apply(rightCtx, args);
  };
};
