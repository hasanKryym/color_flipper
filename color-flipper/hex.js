const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.getElementById("color");
let randomNb;
btn.addEventListener("click", function(){
    let colorValue = "#";
    for(let i = 0; i < 6; i++){
        randomNb = getRandomNb();
        colorValue += hex[randomNb];
    }
    color.textContent = colorValue;
    document.body.style.background = colorValue;
})


function getRandomNb(){
    return Math.floor(Math.random()*hex.length);
}