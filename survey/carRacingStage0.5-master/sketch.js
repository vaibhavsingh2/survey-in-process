
var car1,car2,car3,car4;
var cars;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var drawing=[];
var voterAnswer=0;
var voterAnswer2=[];

var form, player, game;
var allPlayers;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  this.yes=createButton('yes');
  //this.no=
}


function draw(){
  background(220);
  console.log(voterAnswer);
  if(playerCount===1){
  game.update(1);
}

if(gameState===1){
clear();
this.yes.position(30,60);

game.play();
textSize(20);
text("Should lockdown be extended more than 3 May?",20,20);
   //t1=(20,40,10,10,ground_options);
   this.yes.mousePressed(()=>{
  
    this.yes.hide();
    voterAnswer=voterAnswer+1;
   
    game.updateYes(1);
    //voterAnswer.display();
    text(database.yes,20,50);
  })  

}


}
function hide(){
  this.yes.hide();
}
