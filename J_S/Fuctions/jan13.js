let arr = [1, 2, 3, 4, 5, true, false, "hello", "hiiiii"];

function getString(arr) {
  let r = [];
  for (let item of arr) {
    if (typeof item === "string") {
      r.push(item);
    }
  }
  return r;
}

// function get(arr) {
//   let res = [];
//   for (let item of arr) {
//     if (typeof item === "boolean") {
//       res.push(item);
//     }
//   }
//   return res;
// }
// console.log(get(arr));

console.log(getString(arr));
