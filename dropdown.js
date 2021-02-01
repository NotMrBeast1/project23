class Box{
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
        this.box=Bodies.rectangle(x,y,w,h,option)
        this.thickness=w
        this.height=h
        World.add(world,this.box)

    }
    land(){
        fill("red")
        rectMode(CENTER)
        rect(this.box.position.x,this.box.position.y,this.thickness,this.height)
       
    }
}