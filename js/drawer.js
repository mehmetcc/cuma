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
ctx.fillStyle = "red";
ctx.font = "60px Calibri";
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
    ctx.fillText(imgText, width / 2, height - height / 4);
  };
}

function draw() {
  let imgSrc = "resources/generator/bear_logo.jpg"; // ToDo : change
  let imgText = "Hayırlı Cumalar"; // ToDo : change

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
