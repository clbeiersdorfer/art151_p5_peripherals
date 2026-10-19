let webcam;

function setup(){
  createCanvas(800,800);
 
  webcam = createCapture(VIDEO, {flipped:true});
  webcam.size(640,480);
  webcam.hide(); //hide default video element
}
function draw(){
   background(220);
  image(webcam,0,0);
  filter(BLUR, 2);
}
 