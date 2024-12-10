function setup() {
  createCanvas(400, 400);
}

function draw() {
  //Change the background color to whatever you want
  background("red");

  // Make a yellow circle
  noStroke();
  fill("yellow");
  ellipse(width / 2, height / 2, 50);

  //add a blue square
  square(100, 100, 100, 100);
  fill("blue");
  noStroke();

  //Animate the circles up and down
}
