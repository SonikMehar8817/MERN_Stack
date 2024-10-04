// fetch("https://dummyjson.com/products/1")
// .then((data)=>{
//    return data.json() //javaScript object notation 
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((data)=>{
//     console.log(data);
// })

//  async function call(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(data);
// }

// call()


async function call(){
    let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(x);
}

call()
//mohobbat ki ghadi hai aaj 14 febrary hai mere jese koi mere samne khadi hai