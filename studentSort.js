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


