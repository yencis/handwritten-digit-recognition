const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let mouseX, mouseY;
let mouseClicked = false;

canvas.addEventListener('mousedown', mouseDown, false);
canvas.addEventListener('mousemove', mouseMove, false);
window.addEventListener('mouseup', mouseUp, false);
ctx.width  = 28;
ctx.height = 28;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawPixel(ctx, x, y) {
    let pixel = ctx.getImageData(x, y, 28, 28);
    pixel.data[0] = 255;
    pixel.data[1] = 255;
    pixel.data[2] = 255;
    pixel.data[3] = 255;
    ctx.putImageData(pixel, x, y);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function getMousePos(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
}

function mouseDown() {
    mouseClicked = true;
    drawPixel(ctx, mouseX, mouseY);
}

function mouseUp() {
    mouseClicked = false;
}

function mouseMove(e) {
    getMousePos(e);
    if (mouseClicked) drawPixel(ctx, mouseX, mouseY);
}

function exportData() {
    let data = ctx.getImageData(0,0,28,28);
    console.log(data)
    return data
}
