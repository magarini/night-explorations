let teapot;
let bubbles=[];
let bubble
let lights=[];

var canvas;

function preload() {
  // Load model with normalise parameter set to true
  teapot = loadModel('data/Tree.obj', true);
  img = loadImage('data/DB2X2_L01.png');
}

function setup() {
  let canvas=createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  angleMode(DEGREES);
push();
  rotateX(-90);
  rotateY(frameCount * 0.1);
  
  rotateZ(frameCount * 0.1);
scale(20)

translate(0,0,0)
texture(img);

  model(teapot);
  pop();


  ambientLight(51, 102, 255);

  for (let i=0; i<bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
    }
  
    fill(255);
    stroke(255);
    push();
  translate(mouseX-width/2,mouseY-height/2) ;
  sphere(3);
  pop();

}

function mousePressed(){
  if (windowWidth>600){
    let r=random(1,4);
    let b=new Bubble(mouseX-width/2,mouseY-height/2,r);
    
    bubbles.push(b);
  }
}

function touchEnded(){
    if (windowWidth<600){

  let r=random(1,4);
  let b=new Bubble(mouseX - width/2, mouseY - height/2,r);
  
  bubbles.push(b);
    }
}

class Bubble{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
        
    }

    move(){
        this.x=this.x+random(-2,2);
        this.y=this.y+random(-2,2);
    }

    show(){
      
  fill(255);      
  stroke(255);
  push();
  translate(this.x, this.y) ;
  sphere(this.r*2);
  directionalLight(6, 76, 104,this.x, this.y, 0);
  pop();
    }

   
    }


