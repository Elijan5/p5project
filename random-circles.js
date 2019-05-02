function setup(){
    createCanvas(400,400);
    background("#FF0000");
}

function draw(){
   
    fill("blue");
    stroke("green");   
    strokeWeight(random(10));
}
function mousePressed(){
    var size = random(100);
    ellipse(mouseX,mouseY, size, size);
}
//clear canvas if press any key
function keyPressed(){
    background("#FF0000");
}