/* var a = 1;
var b = 2;
var c = 3;
if(a == b){
 console.log("Please change the value of b");
}
else if(a == c || b == c){
  console.log("Please change the value of c");
}
else{
  console.log("a=",a);
  console.log("b=",b);
  console.log("c=",c);   
}
 */

// Have to show up largest one!!

var a = 5;
var b = 4;
var c = 3;
var L = null;

if(a>b){
  L = a;
}
else{
  L = b;
}
if(c>L){
  console.log(`${c} is the largest number`)
}
else{
  console.log(`${L} is the largest number`)
}