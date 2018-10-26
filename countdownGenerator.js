var countdownGenerator = function (x, password) {
  let counter = x;

  let adminPassword = password;

  return function slogan(attemptedPassword){
    if (attemptedPassword === adminPassword) {
      if (x >= 1) {
        console.log( `T-minus ${x}`)
      }
      else if (x < 0){
        console.log('Rockets already gone, bub!');
      }
      else { //the order of putting the conditions
        console.log('Blast Off!')
      }
      x -= 1;
    }
  }
};

var countdown = countdownGenerator(3, 'ADMIN');
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!