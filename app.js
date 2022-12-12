let printArea = document.getElementById("drawingGrid")
let paintColor = "black"
let click = true;

function createGrid(size) {
    let squares = printArea.querySelectorAll('div');
    squares.forEach(div=> div.remove());

    printArea.style.setProperty('--grid-rows', size);
    printArea.style.setProperty('--grid-cols', size);  

    for(i = 0; i < (size*size); i++) {
        let cell = document.createElement('div')
        cell.addEventListener('mouseover', squareColor);
        cell.style.setProperty('--drawing-color', paintColor)
        printArea.appendChild(cell).className = "grid-item";
    }
}

function squareColor() {
    if(click) {
        if((paintColor === "random")){
            this.style.backgroundColor = `hsl(${Math.random() * 360 }, 100%, 50%)`;

        } else {
            this.style.backgroundColor = paintColor;
        }
    }
}

function changeColor(selectedColor) {
    paintColor = selectedColor;
}

function changeGridSize(sizeInput) {
    if(sizeInput >= 2 || sizeInput <= 100 ) {
        createGrid(sizeInput)
    } else {
        console.log('too many squares')
    }
}

document.onload = createGrid( 16, "black");
document.querySelector("body").addEventListener('click', (e) =>{
    if(e.target.tagName != 'button') {
        click = !click
    }
});
