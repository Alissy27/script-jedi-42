//  https://www.codewars.com/kata/singleton-pattern/train/javascript

let theOneObject;
class Singleton {
  constructor() {
    if (!theOneObject) theOneObject = this;
    return theOneObject;
  }
}

// https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript

class Router {
  constructor() {
    this.router = {};
  }

  bind(url, method, action) {
    this.router[`${method} ${url}`] = action;
  }

  runRequest(url, method) {
    const action = this.router[`${method} ${url}`];
    return action ? action() : "Error 404: Not Found";
  }
}
