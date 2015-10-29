/*
var fffff = 1111111111111;
var foo = {
  //null: (global.assert = require('assert')), 
  null: (a = 2), (b = 3), 
  test: (a)
  //test1: assert.ok(1 == 1, 'test1') 
}
*/

var bar = (
  {
    attr: function () {return {1:'3', 3:4}},
    blah: [1, 2, 4, 5]
    
  } 
)
console.log(bar.attr())
var me = {1:'3', 3:4};
bar.attrs = function(any) {return any}
/*
var bar = ([2, 3, 4],{
  attr: 1,
  two: 2

})
*/


var bar = {
  0: ['href', 'http://example.com'],
  twi: ['style', 'this:that']

}

console.log(bar)
