function setup() {
  createCanvas(400, 400);
}

function preload() {
  soundFormats('mp3', 'm4a');
  mySound = loadSound('final-project/rain.m4a');
  mySound = loadSound('final-project/wind.mp4');
  mySound = loadSound('final-project/thunder.mp4')
  mySound = loadSound('final-project/hail.mp4');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
}

function draw() {
  background(220);
}

function keyTyped(){
if (key == 'r');
}
