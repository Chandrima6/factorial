// 1.822ms
// console.time("time2")
function factorial(num) {
  if(num === 2) return num;
  else return (num * factorial(num - 1)); 
}


var output = factorial(6);
console.log(output);
// console.timeEnd("time2")


//0.474ms
// console.time("time3");
function factorial2(num) {
  var i = 2, output = 1;
  while(i >= num) {
    output = output * i;
    i ++;
  }
  return output;
}


var out = factorial(6);
console.log(out);
// console.timeEnd("time3");



 

