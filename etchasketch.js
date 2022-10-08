const grid = document.querySelector("#grid");

for (let i = 1; i <= 16*16; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.id = `${i}`;
    grid.appendChild(pixel);
}

const pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => 
    pixel.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
    })   
);