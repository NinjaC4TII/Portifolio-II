// js/tentacle.js — Tentáculos orgânicos reagindo ao mouse
const canvas = document.getElementById("tentacle-bg");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const tentacles = [];
const numTentacles = 40;
const pointsPerTentacle = 30;
let mouse = { x: width / 2, y: height / 2 };

class Tentacle {
  constructor(x, y, length) {
    this.baseX = x;
    this.baseY = y;
    this.length = length;
    this.points = [];

    for (let i = 0; i < pointsPerTentacle; i++) {
      this.points.push({
        x: x,
        y: y + i * (length / pointsPerTentacle),
        vx: 0,
        vy: 0,
      });
    }
  }

  update() {
    const damping = 0.1;
    const tension = 0.15;

    for (let i = 1; i < this.points.length; i++) {
      const prev = this.points[i - 1];
      const point = this.points[i];

      const dx = point.x - prev.x;
      const dy = point.y - prev.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const diff = (dist - this.length / pointsPerTentacle);

      const offsetX = (dx / dist) * diff;
      const offsetY = (dy / dist) * diff;

      if (i === 1) {
        point.x = prev.x + offsetX;
        point.y = prev.y + offsetY;
      } else {
        point.vx += -offsetX * tension;
        point.vy += -offsetY * tension;
        point.vx *= 1 - damping;
        point.vy *= 1 - damping;
        point.x += point.vx;
        point.y += point.vy;
      }
    }

    // primeira ponta segue mouse se perto
    const head = this.points[0];
    const dx = mouse.x - head.x;
    const dy = mouse.y - head.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 200) {
      head.x += dx * 0.05;
      head.y += dy * 0.05;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);
    for (let i = 1; i < this.points.length; i++) {
      ctx.lineTo(this.points[i].x, this.points[i].y);
    }
    ctx.strokeStyle = "rgba(0, 224, 255, 0.6)";
    ctx.lineWidth = 1.4;
    ctx.stroke();
  }
}

function init() {
  tentacles.length = 0;
  for (let i = 0; i < numTentacles; i++) {
    const x = Math.random() * width * 0.4;
    const y = height - Math.random() * 120;
    const length = 100 + Math.random() * 60;
    tentacles.push(new Tentacle(x, y, length));
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  tentacles.forEach(t => {
    t.update();
    t.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  init();
});

init();
animate();

