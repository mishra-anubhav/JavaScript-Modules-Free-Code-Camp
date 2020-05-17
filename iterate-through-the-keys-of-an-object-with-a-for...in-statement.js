function countOnline(usersObj) {
  // Only change code below this line
var i=0;
for(let user in usersObj){
  if(usersObj[user].online === true){
    i=i+1;
  }
}
return i;
  // Only change code above this line
}
