class Chain{
constructor(pointA, bodyB){
var options={
length:150,
stiffness:0.3,
pointA: pointA,
bodyB:bodyB

}

this.chain = Matter.Constraint.create(options)
World.add(world,this.chain);


}

display(){
stroke("black")
strokeWeight(0.1)
line(this.chain.pointA.x, this.chain.pointA.y,this.chain.bodyB.position.x, this.chain.bodyB.position.y)
}


}