var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var nameSort = students.sort(function(a,b) {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  if (nameA = nameB) {
    if (a.agel > b.age) {
      return b.age - a.age;
    } else {
      return 1;
    }
  } else if (nameA > nameB) {
    return 1;
  }
  else {
    return -1;
  }

})

console.log(nameSort)

// var items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Zeros', value: 37 }
// ];

// sort by value
// var sort = items.sort(function (a, b) {
//   return a.value - b.value;
// });

// console.log(sort)
