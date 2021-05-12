var dog, dogimg, happyDog, database, foodS, foodStock;
var lastFed,milkImg,food1,f1,h1,beach;



function preload() {
  
  dogimg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
  milkImg=loadImage("images/Milk.png")
  beach = loadImage("beach.png")

}

function setup() {
  createCanvas(1000, 500);
  food1 = new food();
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value", food1.readStock);
  dog = createSprite(750, 350, 50, 50)
 dog.addImage(dogimg)
 dog.scale=0.3;
 f1= new form()
  lastFed = hour()
}


function draw() {
  background(beach)

  drawSprites();
      

  f1.display();
  food1.display();
  //fill("black")
  //text("Food Remaining: "+foodS,230,100)

  textSize(20)
  textFont("jokerman")
  fill("black")
 if (lastFed>12){

  text("Last Fed : "+ lastFed%12 + "PM",250,25 )
}
  else if (lastFed == 0) {
    
text("Last Fed : 12 AM",350,25);

 } else{

text("Last Fed : " + lastFed +" AM",350,25)

 }

  console.log(foodS)
}

function readStock(data){

foodS=data.val();



}








