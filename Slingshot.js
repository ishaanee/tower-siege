class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //image(this.img1,220,20);
        //image(this.img2,190,20);
        //image(this.img3,220,20);


        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //strokeWeight(6);
stroke(84,15,15);
if (pointA.x<225){
    strokeWeight(6);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.img3,pointA.x-30,pointA.y-10,20,30);
}
else{
    strokeWeight(3);

    line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
    line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
    image(this.img3,pointA.x+25,pointA.y-10,20,30);

}

            
        }
    }
    
}