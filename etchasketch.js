const grid = document.querySelector("#grid");

let mode = "black";

for (let i = 1; i <= 16*16; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.id = `${i}`;
    grid.appendChild(pixel);
}

const pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => 
    pixel.addEventListener("mouseover", (event) => {
        if (mode === "black") {
            event.target.style.backgroundColor = "black";
        } else if (mode === "eraser") {
            event.target.style.backgroundColor = "#F8F0E3";
        } else if (mode === "rainbow") {
            event.target.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
        }
    })   
);

const black = document.getElementById("black")
black.addEventListener("click", () => {
    mode = "black";
});

const rainbow = document.getElementById("rainbow")
rainbow.addEventListener("click", () => {
    mode = "rainbow";
});

const eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => {
    mode = "eraser";
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    pixels.forEach(pixel =>
        pixel.style.backgroundColor = "#F8F0E3");
        mode = "black";
});