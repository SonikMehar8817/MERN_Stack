// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("hay");
// },2000)

// console.log("three");
// console.log("four");

//call back function

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b ,sumCallback){
//      sumCallback(a,b);
// }

// calculator(1,2,sum)

// function getData(dataId ,getNextData){
//     setTimeout(() => {
//         console.log("data " + dataId);
//     if(getNextData)
//     {
//         getNextData()
//     }
//     }, 1000);
// }

// //callBack Hell _________________________________

// getData(1,()=>{
//     getData(2, ()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5)
//             })
//         })
//     })
// })

// // Promises 

// let promise = new Promise((r,s)=>{
//     console.log("I am a promise");
   
//     s("some reject")
//      r("sonik");
// })


// function getData(dataId ,getNextData){
//     return new Promise((resolve,reject)=>{
//          setTimeout(() => {
//         //    console.log("data " + dataId);
//         //    resolve("success")
//            reject("error")
//            if (getNextData) {
//              getNextData();
//            }
//          }, 1000);
//     })
  
// }

// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a prmise");
//         // resolve("success")
//         reject("error")
//     })
// }

// let promise = getPromise();
// promise.then(()=>{
//     console.log("Promise fulfild");
// })

// promise.catch((err)=>{
//     console.log("rejected",err);
// })


// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("fun1");
//             resolve("success")
//         },3000)
//     }
//     )
// }

// function getData2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("fun2");
//       resolve("success");
//     }, 3000);
//   });
// }

// console.log("Feching fun1");
// let result = getData();
// result.then((res) => {
//   console.log(res);

//   console.log("Feching fun2");

//   getData2().then((res)=>{
//     console.log(res);
//   })
// });

// console.log("Feching fun2");

// let result2 = getData2()
// result2.then((err)=>{
//     console.log(err)
// })

// function getData(dataId) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data ",dataId);
//             resolve("success")
//         },3000)
//     })
// }

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//         getData(3).then((res)=>{
//             console.log(res);
//         })
//     })
// })

// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     return getData(res);
//   });

//async-await

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("wheathe data");
//             resolve("success");
//         }, 2000);
//     })
// }

// async function getwheatherData(){
//     await api();
//     await api();
// }

function getData(dataId) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data ",dataId);
            resolve("success")
        },3000)
    })
}

// IIFE

(async function(){
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(1)
    await getData(2)
    await getData(3)
})();