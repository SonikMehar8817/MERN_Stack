let a = 0;
let marks = [90, 88, 85, 87, 94];

for (let i of marks) {
  // a = a+i;
  a += i;
}

let avg = a / marks.length;
console.log(`Average marks is = ${avg}`);
