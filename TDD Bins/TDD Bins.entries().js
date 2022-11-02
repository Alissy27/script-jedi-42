// http://tddbin.com/#?kata=es6/language/array-api/entries

// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`[].entries()` returns an iterator object with all entries', function() {
  it('returns key+value for each element', function() {
    const arr = ['a', 'b', 'c'];
    const entriesAsArray = Array.from(arr.entries());
    assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]);
  });
  it('empty elements contain the value `undefined`', function() {
    const arr = ['one'];
    arr[2] = 'three';
    const secondValue = [...arr.entries()][1];
    assert.deepEqual(secondValue, [1, void 0]);
  });
  
  // other var
  
  function entries(){
    const arr = ['one'];
    arr[2] = 'three';
    const secondValue = Array.from(arr.entries())[1] // тут спробуй 0,1,2 і все зрозумієш
    console.log(secondValue)

}
entries()
  
  // without solution
  describe('returns an iterable', function() {
    it('has `next()` to iterate', function() {
      const arr = ['one'];
      const value = Array.from(arr).next();
      assert.deepEqual(value, [0, 'one']);
    });
  });
});
