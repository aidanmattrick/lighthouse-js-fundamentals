function calculateRectangleArea (length, width){
  if(length > 0 && width > 0){
    let area = length * width;
    return area;
  }
  else{
    return undefined;
  }
}
function calculateTriangleArea (base, height){
  if(base > 0 && height > 0){
    let area = base * height / 2;
    return area;
  }
  else{
    return undefined;
  }
}
function calculateCircleArea (radius){
  if(radius > 0){
    let area = (radius * radius) * Math.PI;
    return area;
  }
  else{
    return undefined;
  }
}
console.log(calculateCircleArea(20));

