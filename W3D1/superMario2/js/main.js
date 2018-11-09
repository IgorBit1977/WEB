var $mario = document.querySelector(".mario");
var $body = document.querySelector(".body");

var backgroundPositionStart = 0;
var interval;
var audio = new Audio("./audio/SuperMarioBros.mp3");

document.addEventListener("keydown", marioGo);
document.addEventListener("keyup", marioStop);
document.addEventListener("keydown", marioGoLeft);
document.addEventListener("keyup", marioStopLeft);

function moveBackground() {
  backgroundPositionStart += 50;
  $body.style.backgroundPosition = backgroundPositionStart + "px";
}

function moveBackgroundReverse() {
  backgroundPositionStart -= 50;
  $body.style.backgroundPosition = backgroundPositionStart + "px";
}

function marioGo(event) {
  if (event.keyCode == 39) {
    if (!interval) {
      $mario.src = "./images/mario_running.gif";
      $mario.height = 250;

      interval = setInterval(moveBackground, 50);
      audio.muted = false;
      audio.play();
    }
  }
}
function marioStop() {
  if (event.keyCode == 39) {
    if (interval) {
      clearInterval(interval);
      $mario.src = "./images/mario.png";
      interval = null;
      audio.muted = true;
    }
  }
}

function marioGoLeft(event) {
  if (event.keyCode == 37) {
    if (!interval) {
      $mario.src = "./images/mario_running.gif";
      $mario.classList.toggle("rotate");
      $mario.height = 250;
      interval = setInterval(moveBackgroundReverse, 50);
      audio.muted = false;
      audio.play();
    }
  }
}
function marioStopLeft() {
  if (event.keyCode == 37) {
    if (interval) {
      clearInterval(interval);
      $mario.classList.toggle("rotate");
      $mario.src = "./images/mario.png";
      interval = null;
      audio.muted = true;
    }
  }
}
