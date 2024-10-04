let item = [250,645,300,900,50];
// 
a=0
// for(let i of item){
//     let x = i/10;
//     item[a]=i-x;
//     a++
// }
// console.log(item);
for (let i = 0; i<item.length; i++){
    let offer = item[i]/10;
    item[i] -= offer;
    console.log(`Prize after offer ${item[i]}`);
}