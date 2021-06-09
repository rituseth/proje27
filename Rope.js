class Rope{
  constructor(body1, body2 , offsetX , offsetY){
    this.offsetY =offsetY
    this.offsetX =offsetX
      var options = {
          bodyA: body1,
        bodyB : body2,
        pointB :{x: this.offsetX , y: this.offsetY}

      }
      this.rope = Matter.Constraint.create(options);
   
      World.add(world, this.rope);

  }
  
  display(){
     
      var point1= this.rope.bodyA.position;
      var point2 = this.rope.bodyB.position
   
      strokeWeight(4);
      var rpe1X = point1.x
      var rpe1Y = point1.y
      var rpe2X = point2.x + this.offsetX
      var rpe2Y = point2.y + this.offsetY
   
      
      line(rpe1X, rpe1Y, rpe2X, rpe2Y);
      }
      }
  
