var wrapLog = function (callback, name) {
  /* your code here */
  return function(){
    var result = callback.apply(this, arguments);
    //var result = callback(arguments);
    var args = Array.prototype.slice.apply(arguments);
    console.log(name + "(" + args.toString() + ") => " + result);
  }
  //You can access the arguments this way if you dont know how many arguments
  //are passed to the function.
  //return function(first, second){
    //var result = callback.apply(this, arguments);
    //console.log(name, "(",first,",",second,") => ", result);
  //}
};

var sum = function (a,b) { return a + b; };
var sum3 = function(a, b, c){ return a + b +c; };
var logSum = wrapLog(sum, "sum");
var logSum3 = wrapLog(sum3, "sum3");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
logSum3(3,3,3);