function preload(){
soundFormats('mp3' , 'm4a');
setVolume(0.5);
mySound = loadSoundFile('final-project/rain.m4a');
}

function setup(){
  background(220);
  createCanvas(400, 400);
}

function keyTyped(){
if (key == 't'){
playSoundFile('final-project/thunder.mp3');
}
else if (key == 'r') {
playSoundFile('final-project/rain.m4a')
}
}
