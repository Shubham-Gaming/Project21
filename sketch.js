var canvas;
var music, music1, music2, music3;
var disc1;
var disc2;
var disc3;
var disc4;
var box;

function preload(){

    music = loadSound("music.mp3");
    music1 = loadSound("music1.mp3")
    music2 = loadSound("music2.mp3")
    music3 = loadSound("music3.mp3")
}


function setup(){

    canvas = createCanvas(800,600);
    //create 4 different surfaces

    disc1 = createSprite(100,580,180,20);
    disc1.shapeColor = "blue";

    disc2 = createSprite(300,580,180,20);
    disc2.shapeColor = "orange";

    disc3 = createSprite(500,580,180,20);
    disc3.shapeColor = "red"

    disc4 = createSprite(700,580,180,20);
    disc4.shapeColor = "green";

    box = createSprite(Math.round(random(100,700)),50,50,50);
    box.velocityX = Math.round(random(-8,6));
    box.velocityY = Math.round(random(2,8));

}

function draw() {
    background(rgb(169,169,169));    
    if(box.x > 775 || box.x < 25) {
        box.velocityX = box.velocityX * (-1);
    }


    if(disc1.y - box.y <= 35 && box.x < 190) {
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = disc1.shapeColor;
        music.play();
    }

    if(disc2.y - box.y <= 35 && box.x < 390 && box.x > 210) {
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = disc2.shapeColor;
        music1.play();
    }

    if(disc3.y - box.y <= 35 && box.x > 410 && box.x < 590) {
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = disc3.shapeColor;
        music2.play();
    }

    if(disc4.y - box.y <= 35 && box.x > 610 && box.x < 790) {
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = disc4.shapeColor;
        music3.play();
    }


    //add condition to check if box touching surface and make it box
    text(mouseX+','+mouseY,200,50);
    drawSprites();
}
