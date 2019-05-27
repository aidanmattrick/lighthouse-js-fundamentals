function lastIndexOf (array, num){
  if (array.length === 0) {
    return -1;
  }
  for (var i = array.length - 1; i >= 0; i--) {
    if (num === array[i]) {
      return i;
    }
  }
  for (i = array.length - 1; i >= 0; i--) {
    if (num !== array[i] && i === 0) {
      return -1;
    }
  }
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 5));

