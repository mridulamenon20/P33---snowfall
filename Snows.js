class createSnow{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1,
            isStatic:false           
        }
        this.snow = Bodies.circle(x,y,5,options)
        this.radius = 5;
        var rand=Math.round(random(1,2))
        var img;
        if(rand===1){
            img="snow4.webp";
        }
        else{
            img="snow5.webp";
        }
        this.image=loadImage(img);
        World.add(world, this.snow);
    }

    updateY(){     
        if(this.snow.position.y > height){

            Matter.Body.setPosition(this.snow, {x:random(0,800), y:random(0,800)})
        }
    }

    showDrop(){
        fill("blue")
        imageMode(CENTER);
        image(this.image,this.snow.position.x,this.snow.position.y,10,10);
    }
}