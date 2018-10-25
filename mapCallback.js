var words = ["ground", "control", "to", "major", "tom"];

const map = function (arr, func) {
    let arry = [];
    arr.forEach(element => {
      // let value = func(element);
      // arry.push(value);
      // return arry;
      return arry.push(func(element))
      });
    console.log(arry)
}

let length = map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});



  // 1. loop over each element (`e`) in arr
  // 2. apply `func` to `e`
  // 3. push the result of `func(e)` to a new array, `result`
  // 4. return `result`


// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]