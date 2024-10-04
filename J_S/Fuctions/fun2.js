// var a = 8

// {
//     var a = 4
//     console.log(a);
// }

// let a = 3
// {
//     let a = 8
    
// }
// console.log(a);

// function outer(b){
//     console.log("outer")
//     b()
// }
// function inner(){
//     console.log("inner");
// }

// outer(inner)

function outer(){
    console.log("outer")
    function inner(){
        console.log("inner")
    }
    return inner
}

// let a = outer()
// a()

outer()()


let arr=[1,2,3,4,'hello','hi',true,false]