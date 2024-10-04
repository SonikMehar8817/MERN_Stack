//Q1. We are given of marks of student. Filter our of the marks of student that scored 90+.

// let arr = [40, 98, 33, 91, 99, 95];

// let out = arr.filter((num) => {
//   return num>90
// });

// console.log(out);

//Q2. Take a number n as input from user.Create an array of number from 1 to n. Use the 
// reduce method to calculate sum of all number in the array. Use the reduce method to 
// calculate product of all number in the array.


let n = 10;
let arr = [];

for(let i=1; i<=n; i++){
    
    arr.push(i)
}
console.log(arr);

let finalAns=arr.reduce((pre,curr)=>{
    return  pre + curr;
})

console.log(finalAns);