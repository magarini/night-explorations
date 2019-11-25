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
//   scale(10); // Scaled to make model fit into canvas
push();
  rotateX(-90);
  rotateY(frameCount * 0.1);
  
  rotateZ(frameCount * 0.1);
//   normalMaterial(); // For effect
scale(20)

//   rotateY(0.5);
translate(0,0,0)
texture(img);

  model(teapot);
  pop();
//   directionalLight(51, 102, 126,mouseX, mouseY, 0);
//   directionalLight(51, 102, 126,mouseX, mouseY, 10);
//   directionalLight(51, 102, 126,mouseX, mouseY, 10);

  ambientLight(51, 102, 255);

  for (let i=0; i<bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
    }
  
    fill(255);
    stroke(255);
    push();
  translate(mouseX-800, mouseY-500) ;
  sphere(3);
  pop();

}

function mousePressed(){
    let r=random(1,4);
    let b=new Bubble(mouseX-700,mouseY-400,r);
    
    bubbles.push(b);
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

    // clicked(px,py){
    //     let d=dist(px,py,this.x,this.y);
    //     if(d<this.r){
    //     console.log("clicked");
    //     this.brightness=255;
    //     }
    }


// }


// function keyPressed(){  
//     let a = random(600);
//     let b = random(600);
//    let c = random(600);
//      let d = random(600);
//      let e = random(600);
     


//     if(keyCode==SHIFT){
//    // for (int c = 0; c < i; cc++) {
//       console.log(`shift`);

//       stroke(255);
//       strokeWeight(10);
//       //line(rr, ii*200, 50*rr, ii*rr);
      
//       line(a, b, c, d,b, e);
//       //curve(rr, a, rr, ii*rr,ii+300,399,ii-200,rr*12);
//      // }
//     }
//   }
// //   else {
// //     //for (int i = 0; i < 5; i++) {
// //       //for (int c = 0; c < 10; c++) {
      
// //       stroke(255);
// //       strokeWeight(10);
// //       line(a, b, c, b);
      
// //     }