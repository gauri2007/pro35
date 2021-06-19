//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
	//load images here
  dogimg = loadImage("images/dogImg.png");
  happyDogimg = loadImage("images/dogImg1.png");
}

function setup() {
   database = firebase.database();
   createCanvas(500, 500);
   
	
  dog = createSprite(250,250,10,10);
  dog.addImage(dogimg);
  dog.scale=0.2;

  foodStock=database.ref('Food');
   foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
  drawSprites();
  
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogimg)

  }
  fill("white")
  text("Note:Press Up_ARROW Key To Feed Drago Milk!",135,50);
  text("Food Remaining:"+foodS,200,150);
  
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x

  })
  
}


