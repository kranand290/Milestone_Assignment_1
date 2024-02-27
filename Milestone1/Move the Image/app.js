const image = document.querySelector("#movingImage");

let xPosition = 50;
let yPosition = 50;
const stepSize = 10;

function handleKeyPress(event) {
  switch (event.key) {
    case "ArrowUp":
      yPosition -= stepSize;
      break;
    case "ArrowDown":
      yPosition += stepSize;
      break;
    case "ArrowLeft":
      xPosition -= stepSize;
      break;
    case "ArrowRight":
      xPosition += stepSize;
      break;
  }
  image.style.top = yPosition + "px";
  image.style.left = xPosition + "px";
}

document.addEventListener("keydown", handleKeyPress);
