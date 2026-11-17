var canvas;
let lastX = 0;
let lastY = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background("black");
  stroke("white");
}

function draw() {
  for (let i = 0; i < 100; i++) {
    drawPoint();
    nextPoint();
  }
}

function drawPoint() {
  let mapX = map(lastX, -2.182, 2.6558, windowWidth, 0);
  let mapY = map(lastY, 0, 9.9983, windowWidth, 0);
  point(mapX, mapY);
}

function nextPoint() {
  let nextX;
  let nextY;
  let r = random(1);

  if (r < 0.01) {
    nextX = 0;
    nextY = 0.16 * lastY;
  } else if (r < 0.86) {
    nextX = 0.85 * lastX + 0.04 * lastY;
    nextY = -0.04 * lastX + 0.85 * lastY + 1.6;
  } else if (r < 0.93) {
    nextX = 0.2 * lastX - 0.26 * lastY;
    nextY = 0.23 * lastX + 0.22 * lastY + 1.6;
  } else {
    nextX = -0.15 * lastX + 0.28 * lastY;
    nextY = 0.26 * lastX + 0.24 * lastY + 0.44;
  }

  lastX = nextX;
  lastY = nextY;
}