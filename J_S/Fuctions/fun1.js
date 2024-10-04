
function nice(name) {
  console.log("hy " + name + " your are nice");
  console.log("hy " + name + " your are nice");
  console.log("hy " + name + " your are nice");
  console.log("hy " + name + " your are nice");
  console.log("hy " + name + " your are nice");
}
nice("sonik");


function sum(a,b,c=2){
   return a+b+c;
}

r=sum(1,6);
r1=sum(14,4);
r2=sum(10,4,1);
console.log(r,r1,r2);

//arrow function

const func1 = (x)=>{
    console.log("I am a arrow function",x);
}
func1(4);
func1(8);
func1(9);
