
  let clearinterva = setInterval(fun, 2000);

  function fun() {
    console.log("sonik");
  }

  let btn1 = document.getElementById("btn");

  btn1.addEventListener("click", () => {
    clearInterval(clearinterva);
  });



