let y = 100;
let speed = 5

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //Change the background color to whatever you want
  background("red");

  // Make a yellow circle
  noStroke();
  fill("yellow");
  ellipse(200, y, 50);

  //add a blue square
  
  fill("blue");
  noStroke();
  rect(100, y, 100, 100);

  //Animate the circles up and down
  y+= speed; 

  if (y > height || y ==0){
    speed = -speed;
  }

  // make multiple squares and circles move 
  
}
