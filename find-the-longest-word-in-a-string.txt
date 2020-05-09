function findLongestWordLength(str) {
var words=str.split(" ");
var count=0, longest=0;
for(var i=0; i < words.length; i++){
count=words[i].length;
if(count > longest ){
  longest=count;
}
}
return longest
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
