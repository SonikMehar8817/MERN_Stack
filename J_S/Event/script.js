
// let btn1 = document.querySelector("#btn1")

// // btn1.onclick = ()=>{
// //     console.log("this is my button ");
// //     let a = 25;
// //     a++;
// //     console.log(a);
// // }

// // btn1.onclick = ()=>{
// //     console.log("this is secound click");
// // }
// let box = document.querySelector('.box')

// // box.onmouseover = (evr)=>{
// //     console.log(evr);
// //     console.log(evr.type);
// // }

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked");
    
// })

// const x = () => {
//   console.log("button was clicked 2");
// };

// btn1.addEventListener("click", x);

// btn1.addEventListener("click", () => {
//   console.log("button was clicked 3");
// });

// btn1.addEventListener("click", () => {
//   console.log("button was clicked 4");
// });

// btn1.removeEventListener("click",x)
let body = document.querySelector("body")

let modeBtn = document.querySelector("#mode")
currntMode = "light";
modeBtn.addEventListener("click",()=>{
    if(currntMode==="light"){
        currntMode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        currntMode = "light"
        body.classList.add("light")
        body.classList.remove("dark");

       
    }
    console.log(currntMode);
})