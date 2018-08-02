var countdownGenerator = function (x) {
    var times = x;
    return function (){
     if (times > 0) {
      console.log("T-minus", times , "...");
     }
     else if (times < 0){
       console.log("Rockets already gone, bub!");
     }
     else console.log("Blast Off!");
     times--
    };
   };
   
   var countdown = countdownGenerator(5);
   countdown(); // T-minus 3...
   countdown(); // T-minus 2...
   countdown(); // T-minus 1...
   countdown(); // Blast Off!
   countdown(); // Rockets already gone, bub!
   countdown(); // Rockets already gone, bub!
   countdown(); // T-minus 3...
   countdown(); // T-minus 2...
   countdown(); // T-minus 1...
   countdown(); // Blast Off!
   countdown(); // Rockets already gone, bub!