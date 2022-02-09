
//------------mouse move event----------------------

let body = document.getElementById("body");
let btn = document.getElementById("btn");
let colorCode = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function randomColor() {
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color = color + Math.floor(Math.random(colorCode[i]) * 16).toString(16);
    } return color;
}
console.log(randomColor());

function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    body.style.backgroundColor = randomColor();
}
body.addEventListener("mousemove", myFunction)

function resizeBtn(e) {
    btn.style.padding = "100px";
}
function resiBtn(e) {
    btn.style.padding = "0px";
}

btn.addEventListener("mouseover", resizeBtn)
btn.addEventListener("mouseout", resiBtn)