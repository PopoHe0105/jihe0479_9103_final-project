// Popo: Time-Based 
let blocks = []; //I need to store a lot of data, so I need blocks to save.
let lastColor = null; //avoid repeated color

// Derived from my group's basic code
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();

  drawComposition(); 
//Time-Based: 
  let ms = millis(); // 
  textAlign(LEFT, CENTER);
  textSize(20);
  text(`Startup time: ${round(ms, 2)} ms`, 10, 30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

function drawComposition() {
  let y = 0;

  while (y < height) {
    let x = 0;
    let rowHeight = Math.round(random(60, 150));

    while (x < width) {
      let w = Math.round(random(60, 150));
      let h = rowHeight;

      if (x + w > width) {
        w = width - x;
      }
      if (y + h > height) {
        h = height - y;
      }

      let colorList = [
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 0, 0],
        [255, 230, 90],
        [0, 102, 255],
        [0, 0, 0]
      ];

      let chosenColor = null;

      while (true) {
        let index = Math.floor(random(colorList.length));
        let candidate = colorList[index];

        let isWhite = candidate[0] === 255 && candidate[1] === 255 && candidate[2] === 255;

        if (lastColor == null || isWhite || !colorsEqual(candidate, lastColor)) {
          chosenColor = candidate;
          break;
        }
      }

      fill(chosenColor[0], chosenColor[1], chosenColor[2]);
      stroke(0);
      strokeWeight(8);
      rect(x, y, w, h);

      //To facilitate the management of data later
      blocks.push({
        x: x,
        y: y,
        w: w,
        h: h,
        color: chosenColor
      });

      if (!(chosenColor[0] === 255 && chosenColor[1] === 255 && chosenColor[2] === 255)) {
        lastColor = chosenColor;
      }

      x += w;
    }

    y += rowHeight;
  }
}

function updateColors() {
  for (let i = 0; i < blocks.length; i++) {
    let colorList = [
      [255, 255, 255],
      [255, 255, 255],
      [255, 255, 255],
      [255, 255, 255],
      [255, 0, 0],
      [255, 230, 90],
      [0, 102, 255],
      [0, 0, 0]
    ];

    let index = Math.floor(random(colorList.length));
    let candidate = colorList[index];

    blocks[i].color = candidate;
  }

  redrawBlocks();
}

function redrawBlocks() {
  background(255);
  for (let i = 0; i < blocks.length; i++) {
    let b = blocks[i];
    fill(b.color[0], b.color[1], b.color[2]);
    stroke(0);
    strokeWeight(8);
    rect(b.x, b.y, b.w, b.h);
  }
}

function colorsEqual(c1, c2) {
  return c1[0] === c2[0] && c1[1] === c2[1] && c1[2] === c2[2];
}
