// let h1 = document.querySelector("h1")
// let box = document.querySelector("div");

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((data) => {
//     return data.json(); //javaScript object notation
//   })
//   .then((data) => {
//     console.log(data);
//     fun1(data);
//   });

//  async function call(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(data);
// }

// call()

// function fun1(a) {
//   // h1.innerText = a.title
//   a.map((data) => {
//     let h1 = document.createElement("h1");
//     h1.innerText = data.id;
//     box.append(h1);
//   });
// }

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// f7e05c78958bc2446fc1c379c89bbaf2;

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// let a = 'bhopal'
// let city = '9f6290d6cda9a36a63755fadee71f83d';
// fetch(
//   `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${city}`
// ).then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data+"not foung");
// })


// let key = "9f6290d6cda9a36a63755fadee71f83d";
// let city = "Delhi";
// //  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
//   .then((data) => {
//     return data.json();
//   })
//   .then((res) => {
//     console.log(res);
//   });


let key = "9f6290d6cda9a36a63755fadee71f83d";
let city = "Delhi";
  let btn = document.querySelector("button");
  let input = document.querySelector("input")
  let div = document.querySelector("div")



  btn.addEventListener("click",()=>{

      city = input.value;

      
      //  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      )
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          getData(res)
        });
})

function getData(data){
    console.log(data);
    let h1 = document.createElement('h1')
    let p= document.createElement('p')
    h1.innerText = data.name;
    p.innerText = data.main.temp_max

    div.append(h1,p)
}
       
