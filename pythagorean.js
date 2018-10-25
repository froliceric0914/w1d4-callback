var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

// var result = input.map(function pythangorean(element,index){
//    let z = Math.sqrt(Math.pow(element.x,2) + Math.pow(element.y,2));
//    return z;
// });

var result = input.map(obj => {
  let z = Math.sqrt(Math.pow(obj.x,2) + Math.pow(obj.y,2));
  return z
});

function pythangorean(x,y) {
   let z = Math.sqrt(Math.pow(elment.x,2) + Math.pow(elment.y,2))
   return z;
  }


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);