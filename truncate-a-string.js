function truncateString(str, num) {
  var str1="";
  if(str.length>num){
    for(var i=0;i<num;i++){
      str1=str1+str[i]
    }
    str1=str1+"..."
  }
  else{
    str1=str;
  }
  return str1;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
