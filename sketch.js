var Te;
var Pr;
var Hu;
var Ro;
var Pi;
var Ya;
var MagX;
var MagY;
var MagZ;
var ho;
var mi;
var se;
let curwenfont;

function preload(){
   curwenfont = loadFont('http://www.welbeckdigitalgarden.co.uk/ATMOS/CURWENFONT.ttf');
}

function setup(){
  createCanvas(windowWidth, windowHeight); 
}

function draw(){

  loadJSON('http://www.welbeckdigitalgarden.co.uk:3000/JSON', drawvalues);

  background(0);
  textSize(50);
  textFont(curwenfont);
  fill(220,220,220);
  ho = hour();
  mi = minute();
  se = second();

  text("Temperature: " +Te, 40, 60);
  text("Pressure: " +Pr, 40, 120);
  text("Humidity: "+Hu, 40, 180);
  text("Roll: " +Ro, 40, 240);
  text("Pitch: " +Pi, 40, 300);
  text("Yaw: " +Ya, 40, 360);
  text("X: " +MagX, 40, 420);
  text("Y: " +MagY, 40, 480);
  text( "Z: " +MagZ, 40, 540);

  textSize(40);
  text("Welbeck Digital Garden", 40, 610);
  
  if (ho < 10){
  text("0"+ho, 40, 660);}
  else  {
  text(ho, 40, 660);}

  if (mi < 10){
  text("0"+mi, 90, 660);}
  else  {
  text(mi, 90, 660);}

  if (se < 10){
  text("0"+se, 140, 660);}
  else  {
  text(se, 140, 660);}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawvalues(AtmosJSON){
  Te = AtmosJSON.Temperature;
  Pr = AtmosJSON.Pressure;
  Hu = AtmosJSON.Humidity;
  Ro = AtmosJSON.Roll;
  Pi = AtmosJSON.Pitch;
  Ya = AtmosJSON.Yaw;
  MagX = AtmosJSON.MagX;
  MagY = AtmosJSON.MagY;
  MagZ = AtmosJSON.MagZ;
   }
