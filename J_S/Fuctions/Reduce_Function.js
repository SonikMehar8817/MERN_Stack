// arr = [1,2,3,4,33,4,5,4,3]

// let output = arr.reduce((pre,curr)=>{
//     return pre+curr;
// })

// console.log(output);

// let output = arr.reduce((pre, curr) => {
//   if(pre>curr){
//     pre=pre
//   }
//   else{
//     pre = curr
//   }
//   return pre

// return pre> curr? pre:curr;
// });

// console.log(output);

// array = [ 1,2,3,4,5]

// let result = array.reduce((pre, curr)=>{
//     return pre*curr;
// })

// console.log(result);

let num = 4;
res = 1;

for(i=1;i<=num;i++){
    res = res*i;
}
console.log(res);