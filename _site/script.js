//
// ENGINE EXHAUST TURBULENCE
//
const elTurbulence = document.querySelector(`#turbulence`);

gsap.to(elTurbulence, {
  duration: 4,
  repeat: -1,
  ease: `none`,
  onUpdate: function () {
    const baseFrequencyX = this.progress() * 0.004 + 0.02,
      baseFrequencyY = this.progress() * 0.04 + 0.01;

    elTurbulence.setAttribute(
      `baseFrequency`,
      `${baseFrequencyX} ${baseFrequencyY}`
    );
  },
});



//
// STARS
//
const canvas = document.getElementById(`canvas`),
      scale = window.devicePixelRatio,
      ctx = canvas.getContext(`2d`),
      ctxWidth = canvas.scrollWidth * scale,
      ctxHeight = canvas.scrollHeight * scale;

canvas.width = ctxWidth;
canvas.height = ctxHeight;

ctx.scale(scale, scale);

function createTile(x, y, size, fill) {
  let time = gsap.utils.random(15, 200) * scale;

  let tile = {
    x: x,
    y: ctxHeight,
    fill: fill,
    render: function (ctx) {
      ctx.fillStyle = this.fill;
      ctx.fillRect(this.x, this.y, size, size);
    },
  };

  tile.tl = gsap
    .timeline({
      repeat: -1,
    })
    .to(tile, {
      y: ctxHeight * -1,
      ease: `none`,
      duration: time,
    })
    .progress(Math.random());

  return tile;
}

let tiles = [];

for (let i = 0; i < ctxWidth * 1 * scale; i++) {
  let size = Math.random() > 0.9 ? 1 : gsap.utils.random(0.2, 0.7, 0.1);
  let color = Math.random() > 0.8 ? `cyan` : `white`;
  let tile = createTile(gsap.utils.random(0, ctxWidth), 0, size, color);
  tiles.push(tile);
}

gsap.ticker.add(render);

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < tiles.length; i++) {
    let tile = tiles[i];
    tile.render(ctx);
  }
}