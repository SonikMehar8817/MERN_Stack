// function str(b){
//    let a = 0
//    for(let i of b){
//      if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//        a++
//      }

//    }
//    return a
// }

// console.log(res);

const vovelCount=(str)=>{
  let a = 0;
     for(let i of str){
       if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
         a++;
       }

     }
     return a
}

let result = vovelCount("goyal")

console.log(result);


