class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }
display() {

    push();
    rect(x,y,width,height);
    rectMode(CENTER);
    pop();
}
}