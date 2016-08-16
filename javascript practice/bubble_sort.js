var start = new Date().getTime();
var intput =[1,4,5,2,3, 5,1,4,54,5435,655,6,5,45423];

for(var i = 1; i < 14; i = i+1)
   for(var j = 1; j < 14; j= j+1)
     if(intput[j] < intput[j-1]){
       var temp = intput[j];
       intput[j] = intput[j-1];
       intput[j-1]=temp;
     }


var text;
for(var i = 0; i < 14; i = i+1)
   document.getElementById("demo").innerHTML = intput[i]+'</br>' + document.getElementById("demo").innerHTML;

var end = new Date().getTime();
var time = end - start;
document.getElementById("time").innerHTML = time;