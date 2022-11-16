//  https://www.codewars.com/kata/sort-with-arrow-functions

const OrderPeople = function(people){
  return people.sort( (b, a) => (b.age - a.age)); 
}


// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
  const arrWithoutZeroes = [];
  const arrZeroes = [];
  arr.forEach((elem) => {
    elem !== 0 ? arrWithoutZeroes.push(elem) : arrZeroes.push(elem);
  });

  return [...arrWithoutZeroes, ...arrZeroes];
}
