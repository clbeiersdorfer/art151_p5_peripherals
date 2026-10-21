let webcam;
let mic;
function setup(){
  createCanvas(400,400);
 mic = new p5.AudioIn();
   background(220);
 
  webcam = createCapture(VIDEO, {flipped:true});
  webcam.size(640,480);
 webcam.hide(); //hide default video element
}
function draw(){
  
  //image(webcam,0,0);
  //filter(GRAY);
  //width = 800;
 //height = 800;
  //let vol = mic.getLevel(); // get current volume
  //let size = map(vol,0,1,10,300) ///Map volume to size
 /// ellipse(width/2,height/2, size);
   let vol = mic.getLevel(); 
  tint(255,255*vol+50) // adjust brightness
  image(webcam,0,0);
  
}

function mousePressed(){
  mic.start();
}