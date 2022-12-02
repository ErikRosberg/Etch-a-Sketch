// const drawingBox = getElementById('drawingBox');
// const brushSize = changebrushSize();
// const brushColor = changeColor();

const brushColor = "red";
const brushSize = "12px";

// const drawingBox = document.createElement('div');   
// drawingBox.setAttribute('style', 'width: 2rem; height: 2rem; background: white; border: 2px solid black;');    
// document.getElementById("drawingArea").appendChild(drawingBox);



function createDrawingArea() {
    let i = 1;
    while(i < 307) {
        console.log('hello Drawing - Area!');
        const drawingBox = document.createElement('div');
        drawingBox.classList.add('drawing-box-:'+i);   
        drawingBox.setAttribute('style', 'width: 2rem; height: 2rem; background: white; border: 1px solid black; margin:0; padding:0;');    
        document.getElementById("drawingArea").appendChild(drawingBox);
        i++
    }
}

function changeColor(brushColor) {
    let color = brushColor;
    console.log('hello Brush - Color!');
    
    return color;
}

function changebrushSize(brushSize) {
    let size = brushSize;
    console.log('hello Brush - Size!');
    return size;
}

function clearDrawingBoard() {
        createDrawingArea();        
}