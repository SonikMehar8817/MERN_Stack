// function instaImg(){
//     return new Promise((resolve,repreat)=>{
//         setTimeout(()=>{
//             console.log("select img");
//             resolve("success")
//         },2000)
//     })
// }

// function instaFilter() {
//   return new Promise((resolve, repreat) => {
//     setTimeout(() => {
//       console.log("Filter");
//       resolve("success");

//     }, 2000);
//   });
// }

// function instaCaption() {
//   return new Promise((resolve, repreat) => {
//     setTimeout(() => {
//       console.log("Caption");
//       resolve("success");
//     }, 2000);
//   });
// }

// function instaPost() {
//   return new Promise((resolve, repreat) => {
//     setTimeout(() => {
//       console.log("Post");
//       resolve("success");
//     }, 2000);
//   });
// }

// async function process(){
//     await instaImg()
//     await instaFilter()
//     await instaCaption()
//     await instaPost()
// }

// process()

function Fun1(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
    console.log("to prapaire-----1");
    resolve("success")
  }, 5000);
  })
  
}

function Fun2(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("travele------2");
      resolve("success")
    }, 3000);
  })
}

function Fun3() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("party------3");
      resolve("success")
    }, 4000);
    
  })
}


Fun1()
  .then((res)=>{
    console.log(res);
    return Fun2()
  })
  .then((res)=>{
    console.log(res);
    return Fun3()
  })
  .then((res)=>{
    console.log(res);
  })

// Fun1().then((res)=>{
//     console.log(res);
//     Fun2().then((res)=>{
//       console.log(res);
//       Fun3().then((res)=>{
//         console.log(res);
//       })
//     })
// })





// Fun1(()=>{
//   Fun2(()=>{
//     Fun3()
//   })
// })






