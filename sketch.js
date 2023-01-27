let score1 = 0;
let rect1Y = 10;
let rect1DirectionX = 1;
let rect1DirectionY = -1;

let rect2Y = 200;
let rect2DirectionX = 1;
let rect2DirectionY = -1;

let rectSpeed = 5;

let ballX = 600;
let ballY = 300;
let ballwidth = 20;
let ballheight = 20;
let ballDirectionX = 1;
let ballDirectionY = -1;
let ballSpeed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0);
  fill("white");
  text(score1, 500, 10);

   //create rect motion
   rect1Y = rect1Y + (rect1DirectionY*rectSpeed);
   rect2Y = rect2Y + (rect2DirectionY*rectSpeed);

  rect(20, rect1Y, 10, 100);
  rect(width - 30, rect2Y, 10, 100);

  //sx rect
  if (rect1Y < 0) { //off the top of the screen
    rect1DirectionY = rect1DirectionY*-1;
  } 
  
  if (rect1Y > height - 100) { //off the bottom of the screen
    rect1DirectionY = rect1DirectionY*-1;
  }
  
    //dx rect
  if (rect2Y < 0) { //off the top of the screen
    rect2DirectionY = rect2DirectionY*-1;
  } 
  
  if (rect2Y > height - 100) { //off the bottom of the screen
    rect2DirectionY = rect2DirectionY*-1;
  } 


 //create ball motion
 ballX = ballX + (ballDirectionX*ballSpeed);
 ballY = ballY + (ballDirectionY*ballSpeed);

 //make ball
 ellipse(ballX, ballY, ballwidth, ballheight);

 //create ball boundaries

 if (ballX < 0) { //off the left of the screen
    ballDirectionX = ballDirectionX*-1;
    //devo mettere che se va qui fa punto una squadra
 } 

 if (ballX > width) { //off the right of the screen
  ballDirectionX = ballDirectionX*-1;
  //devo mettere che se va qui punto all'altra squadra
}

if (ballY < 0) { //off the top of the screen
  ballDirectionY = ballDirectionY*-1;
} 

if (ballY > height) { //off the bottom of the screen
  ballDirectionY = ballDirectionY*-1;
} 

}
