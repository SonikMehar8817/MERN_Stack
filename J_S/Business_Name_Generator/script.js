let rand = Math.random()
let first,secound,third
if(rand<0.33){
    first = "Crazy"
}
else if (rand<0.66 && rand>=0.33) {
    first = "Amazing"
}
else if (rand < 1 && rand >= 0.66) {
    first = "Fire"
}

rand = Math.random();

if(rand<0.33){
    secound = "Engine"
}
else if (rand<0.66 && rand>=0.33) {
    secound = "Food"
}
else if (rand < 1 && rand >= 0.66) {
    secound = "Garments"
}

rand = Math.random();


if(rand<0.33){
    third = "Bros"
}
else if (rand<0.66 && rand>=0.33) {
    third = "Limited"
}
else if (rand < 1 && rand >= 0.66) {
    third = "Hub"
}

console.log(`${first} ${secound} ${third}`);