
(function(){

module('extend-array');

test('sort', function(){

  var array;

  // test case 1
  var keyNum = 0;
  array = [];
  for(var k in array){
    keyNum++;
  }
  equal(keyNum, 0, 'for(var k in []) loop number is {0}.');

  // test case 3
  array = [2, 3, 1];
  array.sort();
  equal(array[0], 1, 'array.sort() without compare function.');

  // test case 3
  array = [{id: 2}, {id: 3}, {id: 1}];
  array.sort(function(a, b){
    return a.id > b.id;
  });
  equal(array[0].id, 1, 'array.sort( compare ).');
});

})();