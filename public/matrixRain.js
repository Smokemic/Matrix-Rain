const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

let fontSize = 14;
let columns = 0;
let drops = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = -Math.floor(Math.random() * canvas.height);
  }
}

function draw() {
  // Draw the background
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the characters
  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px arial';
  for (let i = 0; i < columns; i++) {
    const text = String.fromCharCode(Math.floor(Math.random() * 128));
    const x = i * fontSize;
    const y = drops[i];
    ctx.fillText(text, x, y);
    if (y >= canvas.height && Math.random() > 0.95) {
      drops[i] = -fontSize;
    } else {
      drops[i] += fontSize;
    }
  }

  requestAnimationFrame(draw);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
draw();

