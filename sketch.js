
var pancake, pancakeImg

function Preload(){
pancakeImg = loadImage('bg.png');
}


function setup(){
    createCanvas(800,800);

}

function draw() {
    background(rgb(169,169,169));
    textSize(40)
    fill("black")
    text("Pancakes", 320,50)
    textSize(20)
    fill("white")
    text("Step 1: Take a bowl", 10,100)
    text("Step 2: Add 1 egg and 2 tablespoons sugar", 10,130)
    text("Step 3: Mix well", 10,160)
    text("Step 4: Add 3/4 milk",10,190)
    text("Step 5: Mix well again",10,220)
    text("Step 6: Add 1 cup flour",10,250)
    text("Step 7: Add 3/4 teaspoon baking soda",10,280)
    text("Step 8: Add 1/4 teaspoon salt", 10,310)
    text("Step 9: Mix well for the third time",10,340)
    text("Step 10: Add 2 tablespoon cooking oil",10,370)
    text("Step 11: Mix well for the last time",10,400)
    text("Step 12: Heat a pan",10,430)
    text("Step 13: Pour batter to the pan",10,460)
    text("Step 14: Flip it when the edges look dry",10,490)
    text("Step 15: Cook until it looks light brown",10,520)
    textSize(40)
    fill("black")
    text("Eat with maple syrup",220,600)
    
    drawSprites();

}