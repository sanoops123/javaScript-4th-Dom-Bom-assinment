

function countTimer(){
let count = 40;
const timer = setInterval(function(){
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
    alert("Time's up!");
  }
},1000)
};