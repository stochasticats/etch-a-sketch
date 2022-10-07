const grid = document.querySelector("#grid");

for (let i = 1; i <= 16*16; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.id = `${i}`;
    cell.textContent = `${i}`;
    grid.appendChild(cell);
} 