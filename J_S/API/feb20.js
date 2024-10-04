//api.tvmaze.com/search/shows?q=${searchText}`
// let searchText = 'don'


  let inp = document.querySelector("input")
  let btn = document.querySelector("button")
  let div = document.querySelector("div")

  btn.addEventListener('click',()=>{
    let searchText = inp.value;
    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    show(res)
  });
  })


  function show(data) {
    data.map((data)=>{
        console.log(data.show.image.original);
        let img = document.createElement("img");
        img.style.height = "500px";
        img.innerText=img.setAttribute("src", data.show.image.original);
        div.append(img);
    })

  }
