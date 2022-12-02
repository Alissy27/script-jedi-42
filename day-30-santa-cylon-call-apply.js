// https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript

function isSantaClausable(obj) {
  return (
    typeof obj.sayHoHoHo === "function" &&
    typeof obj.distributeGifts === "function" &&
    typeof obj.goDownTheChimney === "function"
  );
}

// https://www.codewars.com/kata/cylon-evolution

class Cylon {
  constructor(model) {
    this.model = model;
  }
  attack() {
    return "Destroy all humans!";
  }
}

class HumanSkin extends Cylon {
  constructor(model) {
    super(model);
  }
  attack() {
    return super.attack();
  }
  infiltrate() {
    return "Infiltrate the colonies";
  }
}

// https://www.codewars.com/kata/52d56d9c6b02b2fa9a0006d9/train/javascript

Function.prototype.call = function (thisFn, ...args) {
  return this.apply(thisFn, args);
};
