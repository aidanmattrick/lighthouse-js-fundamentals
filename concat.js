function concat(array1, array2){
  let newarray = [];
  for (var i = 0; i < array1.length; i++) {
    newarray.push(array1[i]);
  }
  for (var i = 0; i < array2.length; i++) {
    newarray.push(array2[i]);
  }
  return newarray;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);