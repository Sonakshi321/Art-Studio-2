class BaseWindow{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      // windowTime();
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}

async function windowTime()
{var response= await fetch("http://worldclockapi.com/api/json/est/now");
var responseJSON=await response.json();

var dateTime=responseJSON.currentDateTime;
var hour=dateTime.slice(11,13);

if(hour>=5 && hour<=20){
    wi="Images/w1.jpg";

}
else
{
    wi="Images/w2.png";
}
WindowTime=loadImage(wi);
console.log(WindowTime);
}
