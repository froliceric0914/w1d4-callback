var numbers = [23,34,45.2,45,234,6,12]
var evens = numbers.filter(function(num){
  return (num%2 ==0)
});

console.log("the even numbers are: ", evens);