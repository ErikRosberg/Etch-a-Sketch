const printArea = document.getElementById("drawingGrid")


function createGrid(rows, cols) {
    printArea.style.setProperty('--grid-rows', rows);
    printArea.style.setProperty('--grid-cols', cols);  

    for(i = 0; i < (rows*cols); i++) {
        let cell = document.createElement('div')
        printArea.appendChild(cell).className = "grid-item";

    }
}

document.onload = createGrid(16, 16);

