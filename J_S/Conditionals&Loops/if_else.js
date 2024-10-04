/*console.log("Hello i am sonik")

let age = 18
let grace = 18

age += grace
console.log(age);
console.log(age + grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace);

if(age==20){
    console.log("you can derive")
}
else{
    console.log("you can not derive")
}
console.log("3"===3)
let b=8,c=9;
let a = b<c? console.log(c):console.log(b);*/

// for(let a=1; a<=10; a++){
//     console.log(a);
// }

// let object={
//     name: "sonik",
//     role: "coder",
//     college: "sirt"
// }
// for (const key in object) {
//     console.log(key)
// }

// for (const c of "sonik") {
//     console.log(c)
// }

// let i=70;

// while(i<=80)
// {
//     console.log(i)
//     i++;
// }
// let i=2;
// do {
//     console.log(i)
//     i+2;
// } while (i<=20);

let arr = [
  { id: 1, user: "hello" },
  { id: 2, user: "hiii" },
];

arr.map((k)=>{console.log(k.id)})

let arrr=[1,2,3,4,5,5]
arrr.push(8)
arrr.pop()
console.log(arrr)

let obj={
    id:1,
    username:'hello'
}
add(obj)

let oobj={
    firstName:'hello',
    lastName:'hii',
    fullName:function(){
    console.log(this)
    }
}
obj.fullName()
