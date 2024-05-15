/* 
var studentname = "Sho";
var score = 20;

if(score>=80){
  console.log(studentname + " => Grade A");
}
else if(score>=60){
  console.log(studentname + " => Grade B");
}
else if(score>=40){
  console.log(studentname + " => Grade C");
}
else{
  console.log(studentname + " => No Grade");
}

 */

/* we can use array for judgement value

var grade = [80, 60, 40]
 ->grade[0],[1],[2]

*/

var studentname = "Sho";
var score = 21;
var scoregrade = [80,60,40];

if(score>=scoregrade[0]){
  console.log(studentname + " => Grade A");
}
else if(score>=scoregrade[1]){
  console.log(studentname + " => Grade B");
}
else if(score>=scoregrade[2]){
  console.log(studentname + " => Grade C");
}
else{
  console.log(studentname + " => No Grade");
}