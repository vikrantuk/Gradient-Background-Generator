let css = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");
// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

function setGradient(){
    body.style.background = "linear-gradient(to right, "+color1.value+" , "+color2.value+")";
    css.textContent = body.style.background + ";";
}
setGradient();

function setColor(){
    let col1 = ((Math.floor(Math.random() * 16777216)).toString(16)).padStart(6,"8");
    color1.value = "#"+col1;
    let col2 = ((Math.floor(Math.random() * 16777216)).toString(16)).padStart(6,"8");
    color2.value = "#"+col2;
    setGradient();
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click",setColor);