//  https://www.codewars.com/kata/sort-with-arrow-functions

const OrderPeople = function(people){
  return people.sort( (b, a) => (b.age - a.age)); 
}
