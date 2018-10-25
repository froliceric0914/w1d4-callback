function findWaldo(arr, cb, name) {

  //console.log(cb)
  arr.forEach(function (element,index) {
    if( element === name ) {
      // let i = index;
      // console.log("Found " + name + " at index " + i +" !");
      cb(element, index);
    }
  });
}



function actionWhenFound(name,i) {
  // console.log("Found " + name + " at index " + i +" !");
  console.log(`Found ${name} at index ${i} `);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound, "Waldo");


/* forEach(function callback(value, index){})

the value, index is default set to the callback function in the forEach */