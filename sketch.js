function preload(){
soundFormats('mp4' , 'm4a');
mySound = loadSound('final-project/rain.m4a');
}

function setup(){
  background(220);
  createCanvas(400, 400);
  soundFormats('mp3', 'm4a');
  setVolume(0.5);
  }

function keyTyped(){
if (key == 'r');
}
