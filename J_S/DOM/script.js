// console.log("sonik");
// console.dir(document.body);

// let a = document.getElementById("heading")
// console.dir(a)

// let b = document.getElementsByClassName("same")
// console.dir(b)

// let c = document.getElementsByTagName("p")
// console.dir(c)
// console.log(c);

// let elements = document.querySelector("#heading")
// console.dir(elements)

// let element = document.querySelectorAll(".same")
// console.dir(element )

// let element = document.querySelector("div");
// console.dir(element);

// let heading = document.querySelector("h1");

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from apna college students";

// console.dir(h2.innerText)

// let box = document.querySelectorAll(".box");
// box[0].innerText = "new value 1";
// box[1].innerText = "new value 2";
// box[2].innerText = "new value 3";
// idx = 0
// for (const div of box) {
//     div.innerText = `new unique value ${idx}`
//     idx++
// }

// let a = document.querySelector("h1")

// setTimeout (() =>{
//     console.log("sonik");
// },2000)

// setInterval( () =>{
//     console.log("mehar")
// },3000)



// setInterval(()=>{
//     for(i=1;i<=4;i++){
//         a = `img${i}`
//         console.dir(a)
//     }
// },2000)

// const imageEl = document.querySelector('img')
// const arr = ["photos/photo1.jpg",
//            'photos/photo2.jpg',
//            'photos/photo3.avif',
//            'photos/photo4.jpg'
// ];

// let num = 0 ;

// setInterval(function() {
//     imageEl.setAttribute('src',arr[num]);
//     num = (num+1) % arr.length;


// let a = document.getElementById('heading');
// console.log(a);


// let a = document.getElementsByClassName("same");
// console.log(a);

// let a = document.querySelectorAll(".same");
// console.log(a);

// a[0].inner = 'sonik';

// let div = document.querySelector("div");
// console.log(div);

// div.style.backgroundColor = "green";

// div.style.fontSize = "20px";

// div.innerText = "hello";



// newBtn = document.createElement("button")

// console.log(newBtn);

// document.querySelector(".para").innerHTML = "hyyy"
let a = document.querySelector(".para");
// console.log(a);
// a.innerHTML = "this is secound para"



a.addEventListener("click",()=>{
    a.style.color = "red";
    a.style.backgroundColor = "black";
    a.innerHTML = "me hu sonik"

})

let b = document.querySelector(".bulb")
let c = document.querySelector("button")

let count = 0;

c.addEventListener("click",()=>{
    if (count == 0) {
        b.style.backgroundColor = "yellow";
        count++;
    }
    else{
        b.style.backgroundColor = "transparent"
        count--;
    }
    
})






  













