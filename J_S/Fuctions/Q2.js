//For a given array of number, print the square of each value using the forEach loop.

arr = [19,27,33,47,58];

// arr.forEach((sqr)=>{
//     // console.log(sqr * sqr);
//     console.log(sqr**2)
// }
let getSqr = (sqr) =>{
    console.log(sqr**2);
}

arr.forEach(getSqr)