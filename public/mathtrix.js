const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbols = "ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789!§$%&/()=?#+*~[]{}-_.:,;><|^°".split("");
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);

const drops = new Array(columns).fill(0);

function draw() {
    // Hintergrundfarbe / Farbverlauf
    const grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grd.addColorStop(0, randomColor());
    grd.addColorStop(1, randomColor());
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Matrix-Regen
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px Arial";
    for (let i = 0; i < drops.length; i++) {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(symbol, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

function randomColor() {
    return `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`;
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(draw, 120);
