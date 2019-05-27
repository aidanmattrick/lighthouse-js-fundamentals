function range (start, end, step){
  let array = [];
  if(start > end){
    return [];
  }
  if(step < 0){
     return [];
   }
  if(start === undefined || end === undefined || step === undefined){
    return [];
  }
  for (var i = start; i <= end; i += step) {
    array.push(i);
  }
  return array;
}
console.log(range(-9, 3, 3));