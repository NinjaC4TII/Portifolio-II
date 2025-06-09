// Galáxia de Partículas Interativas com Zoom, Cliques, Estrelas Piscando, Movimento de Fundo e Efeito Blur
const canvas = document.getElementById('atom-background');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

let zoom = 1;
const particles = [];
const stars = [];
const numParticles = 800;
const numStars = 100;
const center = { x: width / 2, y: height / 2 };

for (let i = 0; i < numParticles; i++) {
  const angle = Math.random() * 2 * Math.PI;
  const radius = Math.random() * Math.min(width, height) / 2.5;
  const speed = 0.002 + Math.random() * 0.002;
  particles.push({ angle, radius, speed, size: Math.random() * 1.5 + 0.5 });
}

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5 + 0.5,
    alpha: Math.random(),
    fade: Math.random() * 0.02 + 0.01
  });
}

const mouse = { x: center.x, y: center.y };
canvas.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

canvas.addEventListener('wheel', e => {
  e.preventDefault();
  zoom += e.deltaY * -0.001;
  zoom = Math.min(Math.max(zoom, 0.5), 3);
});

canvas.addEventListener('click', e => {
  for (let i = 0; i < 30; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 50;
    const speed = 0.01 + Math.random() * 0.01;
    particles.push({ angle, radius, speed, size: Math.random() * 1.5 + 0.5 });
  }
});

function drawStars() {
  for (let s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
    ctx.fill();
    s.alpha += s.fade;
    if (s.alpha > 1 || s.alpha < 0.1) s.fade = -s.fade;
  }
}

function animate() {
  // Adiciona efeito de blur ao fundo
  ctx.fillStyle = 'rgba(0, 0, 10, 0.2)';
  ctx.fillRect(0, 0, width, height);

  drawStars();

  ctx.save();
  ctx.filter = document.getElementById('main')?.classList.contains('blurred') ? 'blur(8px)' : 'none';

  for (let p of particles) {
    p.angle += p.speed;

    const influenceX = (mouse.x - center.x) * 0.0005;
    const influenceY = (mouse.y - center.y) * 0.0005;
    const spiralX = Math.cos(p.angle) * p.radius * zoom + influenceX * p.radius;
    const spiralY = Math.sin(p.angle) * p.radius * zoom + influenceY * p.radius;

    const x = center.x + spiralX;
    const y = center.y + spiralY;

    ctx.beginPath();
    ctx.fillStyle = `hsl(${p.angle * 57 % 360}, 80%, 70%)`;
    ctx.arc(x, y, p.size, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();

  requestAnimationFrame(animate);
}

animate();

