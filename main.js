const canvas = document.getElementById("liquidCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let t = 0;

function draw() {
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(0, h/2);
    for (let x = 0; x <= w; x += 20) {
      const y = h/2 + Math.sin((x*0.02) + t + i) * 50;
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(${50*i+100}, ${150+i*20}, 255, 0.3)`;
    ctx.lineWidth = 4;
    ctx.stroke();
  }

  t += 0.02;
  requestAnimationFrame(draw);
}

draw();
