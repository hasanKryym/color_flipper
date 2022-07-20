const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", function(){
    randomNb = getRandomNb();
    color.textContent = colors[randomNb];
    document.body.style.background = colors[randomNb];
})

function getRandomNb(){
    return Math.floor(Math.random()*colors.length);
}