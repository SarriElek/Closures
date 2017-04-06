var countdownGenerator = function (x) {
  /* your code here */
  var countdownIndex = x;
  var msg = "T-minus";
  return function(){
    if(countdownIndex < 0){
      console.log("Rockets already gone, bub!");
    }
    if(countdownIndex > 0){
      console.log(msg, countdownIndex);
    }
    if(countdownIndex === 0){
      console.log("Blast off!!");
    }
    countdownIndex --;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!