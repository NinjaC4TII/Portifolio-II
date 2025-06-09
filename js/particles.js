
const canvas = document.getElementById('interactive-bg');
const ctx = canvas.getContext('2d');
const particles = [];
const particleCount = 300;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

// ALTERAÇÃO AQUI: escuta o mouse na janela inteira
window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

for (let i = 0; i < particleCount; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let vx = (Math.random() - 0.5) * 0.5;
  let vy = (Math.random() - 0.5) * 0.5;
  let distance = Math.sqrt((x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2);
  let color = distance < 200 ? 'rgb(0, 150, 255)' : distance > 400 ? 'rgb(255, 50, 50)' : 'rgb(255, 255, 255)';
  particles.push({ x, y, vx, vy, radius: 2, color });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let p of particles) {
    let dx = mouse.x - p.x;
    let dy = mouse.y - p.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 150) {
      p.vx -= dx * 0.0005;
      p.vy -= dy * 0.0005;
    } else {
      let originX = p.originX || (p.originX = p.x);
      let originY = p.originY || (p.originY = p.y);
      let odx = originX - p.x;
      let ody = originY - p.y;
      p.vx += odx * 0.0001;
      p.vy += ody * 0.0001;
    }

    p.vx *= 0.98;
    p.vy *= 0.98;

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) { p.x = 0; p.vx *= -1; }
    if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -1; }
    if (p.y < 0) { p.y = 0; p.vy *= -1; }
    if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -1; }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let dx = particles[i].x - particles[j].x;
      let dy = particles[i].y - particles[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255,' + (1 - dist / 100) + ')';
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}
animate();
