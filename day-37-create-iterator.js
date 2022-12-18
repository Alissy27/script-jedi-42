// https://www.codewars.com/kata/5c743cec901022438549964a/train/javascript

const createIterator = (array) => {
  return {
    next: function () {
      if (array.length <= this.index) {
        return {
          value: undefined,
          done: true,
        };
      }
      let output = {
        value: array[this.index],
        done: false,
      };
      this.index += 1;
      return output;
    },
    index: 0,
  };
};
