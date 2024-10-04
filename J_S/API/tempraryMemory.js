let inp = document.querySelector('input')
let btn = document.querySelector('button')
let remove = document.querySelector('.remove')

if (localStorage.getItem('data')) {
    inp.value = localStorage.getItem('data')
}

btn.addEventListener('click',()=>{
    let text = inp.value
    localStorage.setItem('data',text)
})

remove.addEventListener('click',()=>{
    if(localStorage.getItem('data')){
        localStorage.clear('data')
        inp.value = ''
    }
    else{
        alert('data hi nahi hai')
    }
})


//api.tvmaze.com/search/shows?q=${searchText}`
// let searchText = 'don'


//   let inp = document.querySelector("input")
//   let btn = document.querySelector("button")
//   let div = document.querySelector("div")

//   btn.addEventListener('click',()=>{
//     let searchText = inp.value;
//     fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
//   .then((data) => {
//     return data.json();
//   })
//   .then((res) => {
//     show(res)
    
//   });
//   })


//   function show(data) {

    
//     data.map((data)=>{
//         localStorage.setItem("data", data.show.image.original);
//         let img = document.createElement("img");
//         img.style.height = "500px";
//       let imgLink=  localStorage.getItem('data')
//         img.setAttribute("src", imgLink);
//         div.append(img);
//     })

//   }
