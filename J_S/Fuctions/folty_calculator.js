let random = math.random()

console.log("sonik");
let a = prompt("Enter a first number :");
let b = prompt("Enter a secound number :");
let c = prompt("Enter operation number :");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random > 0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
   
}