let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let circle = document.querySelector(".circle");


img1.addEventListener('click', () => {
    console.log("img1")
    circle.classList.add("circle-vert");
    circle.classList.remove("circle-violet");
    circle.classList.remove("circle-rose");
});

img2.addEventListener('click', () => {
    console.log("img2")
    circle.classList.add("circle-rose");
    circle.classList.remove("circle-vert");
    circle.classList.remove("circle-violet");
});

img3.addEventListener('click', () => {
    console.log("img3")
    circle.classList.add("circle-violet");
    circle.classList.remove("circle-vert");
    circle.classList.remove("circle-rose");
});