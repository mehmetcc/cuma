/**
 * DEFINITIONS
 */

let canvas = document.querySelector(".cuma-generated-message");
// set height and width
const width = (canvas.width = window.innerWidth / 2);
const height = (canvas.height = window.innerHeight / 2);
// get canvas context
const ctx = canvas.getContext("2d");
// text settings for the context
ctx.textAlign = "center";
/** TODO : add randomness */
let fontSize = 60;
let fontName = "px Calibri";
ctx.font = fontSize + fontName;

ctx.fillStyle = "red";
ctx.shadowBlur = 10;
ctx.shadowColor = "green";

/**
 * Some auxiliary functions
 */

function drawImg(imgSrc, imgText) {
  // first and foremost, clear
  clearCanvas();
  // open image
  let image = new Image();
  image.src = imgSrc;
  // draw image
  image.onload = function () {
    /** DRAW IMAGE FIRST */
    var wrh = image.width / image.height;
    var newWidth = canvas.width;
    var newHeight = newWidth / wrh;
    if (newHeight > canvas.height) {
      newHeight = canvas.height;
      newWidth = newHeight * wrh;
    }
    var xOffset = newWidth < canvas.width ? (canvas.width - newWidth) / 2 : 0;
    var yOffset =
      newHeight < canvas.height ? (canvas.height - newHeight) / 2 : 0;

    ctx.drawImage(image, xOffset, yOffset, newWidth, newHeight);
    /** RESIZED IMAGE IS DRAWN!!!!!! */

    /** GENERATE TEXT */
    //ctx.fillText(imgText, width / 2, height - height / 4);
    fillTextMultiLine(ctx, imgText, width / 2, height - height / 4);
    //wrapText(ctx, imgText, imgText, (canvas.width - 400) / 2, 60, 25);
  };
}
function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(" ");
  var line = "";

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + " ";
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}

function fillTextMultiLine(ctx, text, x, y) {
  let lineHeight = ctx.measureText("M").width * 1.2;
  let words = text.split(" ");
  let line = "";

  for (let i = 0; i < words.length; ++i) {
    let curr = line + words[i] + " ";
    let currWidth = ctx.measureText(curr).width;

    if (currWidth > width && i > 0) {
      ctx.fillText(line, x, y);
      console.log(line);
      line = words[i] + " ";
      y += lineHeight;
    } else {
      line = curr;
    }
  }
}

function draw() {
  let imgSrc = "generator/img/bear_logo.jpg"; // ToDo : change
  let imgText =
    "Bazı müminler cennete hasret yaşar. Bazı müminler de vardır ki cennet onları hasretle bekler. Cennetin hasretle beklediği müminlerden olmak duasıyla, hayırlı cumalar.";

  drawImg(imgSrc, imgText);
}

function drawLanding() {
  let imgSrc = "resources/canvas_landing.jpg";
  // open image
  let image = new Image();
  image.src = imgSrc;
  // draw image
  image.onload = function () {
    /** DRAW IMAGE FIRST */
    var wrh = image.width / image.height;
    var newWidth = canvas.width;
    var newHeight = newWidth / wrh;
    if (newHeight > canvas.height) {
      newHeight = canvas.height;
      newWidth = newHeight * wrh;
    }
    var xOffset = newWidth < canvas.width ? (canvas.width - newWidth) / 2 : 0;
    var yOffset =
      newHeight < canvas.height ? (canvas.height - newHeight) / 2 : 0;

    ctx.drawImage(image, xOffset, yOffset, newWidth, newHeight);
    /** RESIZED IMAGE IS DRAWN!!!!!! */
  };
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveImg() {
  let download = document.getElementById("download");
  let image = document
    .querySelector(".cuma-generated-message")
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
  download.setAttribute("download", "archive.png");
}

/**
 * This is basically the scripting part
 */

drawLanding();
