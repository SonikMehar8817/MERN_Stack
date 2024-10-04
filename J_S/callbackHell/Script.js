function step1(fn){
    setTimeout(() => {
      console.log("select image");
       fn();
    },5000);
   
}

function step2(fn){
    setTimeout(() => {
      console.log("Aply filter");
      fn()
    }, 3000);
}

function step3(fn){
    setTimeout(() => {
      console.log("caption");
      fn()
    }, 2000);
}

function step4(){
    setTimeout(() => {
      console.log("post");
    }, 1000);
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            step4()
        })
    })
})


