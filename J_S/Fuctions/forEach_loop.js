let arr = ["sonik","mehar"];
let arr2 = [1,2,3,4,5,6,7,8,9]
// arr.forEach((printVal ,ind ,arr)=>{
//      console.log(printVal.toUpperCase() ,ind ,arr);
// })

arr.forEach((val,idx,arr)=>{
     console.log(val.toUpperCase(),idx,arr);
})

arr2.forEach(function printVal(a){
     console.log(a);
})

//square using foreachLoop
let fun = (val) => {
  // console.log(val*val);
  console.log(val ** 2);
};
arr2.forEach(fun)