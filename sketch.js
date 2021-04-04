var canvas;
var music;
var ball;
var box1,box2,box3,box4;
var ball2;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    
    canvas = createCanvas(800,600);
    edges = createEdgeSprites();
    ball = createSprite(random(05,800),300,50,50);
    box1 = createSprite(100,600,200,50);
    box2 = createSprite(300,600,200,50);
    box3 = createSprite(500,600,200,50);
    box4 = createSprite(700,600,200,50);
    ball2 = createSprite(400,300,20,20);

    ball.shapeColor = "white";
    box1.shapeColor = "blue";
    box2.shapeColor = "green";
    box3.shapeColor = "yellow";
    box4.shapeColor = "red";
    ball2.shapeColor = "white";

    ball.velocityX = 6;
    ball.velocityY = 10;
}

function draw() {
    background(0);
    ball.bounceOff(edges);
    if(ball.isTouching(box1)) {
        ball.shapeColor = "blue";
        music.play();
    }
    if(ball.isTouching(box2)) {
        ball.shapeColor = "green";
        music.play();
    }
    if(ball.isTouching(box3)) {
        ball.shapeColor = "yellow";
        music.play();
    }
    if(ball.isTouching(box4)) {
        ball.shapeColor = "red";
        music.play();
    }
    if(ball.isTouching(ball2)) {
        ball.shapeColor = "white";
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
 
    drawSprites();
}
