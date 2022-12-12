let printArea = document.getElementById("drawingGrid")

function createGrid(size, color) {
    let squares = printArea.querySelectorAll('div');
    squares.forEach(div=> div.remove());

    printArea.style.setProperty('--grid-rows', size);
    printArea.style.setProperty('--grid-cols', size);  

    for(i = 0; i < (size*size); i++) {
        let cell = document.createElement('div')
        cell.style.setProperty('--drawing-color', color)
        printArea.appendChild(cell).className = "grid-item";
    }
}


function changeGridSize(sizeInput, colorInput) {

    createGrid(sizeInput, colorInput)
}

document.onload = createGrid( 16, "black");

