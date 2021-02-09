var hr,mn,sc;
var hrangle,mnangle,scangle;

function setup(){
  createCanvas(800,800);
  angleMode(DEGREES);  
}

function draw(){
  
  background(0);
  translate(200,200);
  rotate(30);
  
  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(10);  
  noFill();

  stroke("green");
  scangle = map(sc,0,60,0,360);
  arc(0,0,500,500,0, scangle);

  stroke("red");
  mnangle = map(mn,0,60,0,360);
  arc(0,0,480,480,0, mnangle);

  stroke("blue");
  hrangle = map(hr %12,0,12,0,360);
  arc(0,0,460,460,0, hrangle);

 push();
 rotate(scangle);
 stroke('green');
 strokeWeight(7);
 line(0,0,100,0);
 pop();
 push();
 rotate(mnangle);
 stroke('red');
 strokeWeight(7);
 line(0,0,75,0);
 pop();
 push();
 rotate(hrangle);
 stroke('blue');
 strokeWeight(7);
 line(0,0,50,0);
 pop();



}