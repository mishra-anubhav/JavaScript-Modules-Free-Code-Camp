function repeatStringNumTimes(str, num) {
  var str1="";
  if(num>0){
  for(var i=0;i<num;i++){
    str1=str1+str;
  }}
else{
  str1=""
}
  return str1
}

repeatStringNumTimes("abc", 3);
