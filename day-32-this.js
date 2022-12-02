// https://www.codewars.com/kata/this-is-a-problem

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = first + " " + last;
}

// https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript

class NamedOne {
  constructor(first, last) {
    Object.defineProperties(this, {
      firstName: {
        value: first,
        writable: true,
      },

      lastName: {
        value: last,
        writable: true,
      },
    });
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(value) {
    if (/\w+ \w+/.test(value)) {
      return ([this.firstName, this.lastName] = value.split(" "));
    }
  }
}
