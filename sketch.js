var bgimg
var gameState="wait"
var play,sound,mute,player
var playerimg
var pellets=[]
var enemies=[]
var crash=[]
var playButton
var score1=0
var enemy1,enemy2,enemy3
var enemy1img,enemy2img,enemy3img


function preload(){
bgimg=loadImage("assets/bgimg.gif")
playerimg=loadImage("assets/playerM.png")
enemy1img=loadImage("assets/enemy1.png")
enemy2img=loadImage("assets/enemy2.png")
enemy3img=loadImage("assets/enemy3.png")

pellets=loadImage("assets/pellet.png")
crash=loadAnimation("assets/crash1.png","assets/crash2.png","assets/crash3.png","assets/crash4.png")
// playButton=loadImage("assets/play_button.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)

playButton=createImg("assets/play_button.png")
playButton.position(width/2-120,height-230)
playButton.size(300,300)


player=new Player()

}

function draw(){
    if(gameState=="wait"){
background(bgimg)
}

playButton.mousePressed(()=>{
    playButton.hide()
    gameState="about"
})


if (gameState=="about"){

    popabout()
 }
 
 
 if (gameState=="level1"){
    background(bgimg)


    player.show()
player.move()
 }



drawSprites()
}


class Player{
    constructor(){
        this.x=width/2
        this.y=height-80
    }


    move(){
        if(keyIsDown(LEFT_ARROW)  && this.x>0){
            this.x -=5
        }

        if(keyIsDown(RIGHT_ARROW)  && this.x<width){
            this.x +=5
        }
    }

    show(){
        fill(0,0,255)
        rect(this.x,this.y,50,50)
    }
}

function popabout(){
    swal({
       title: "Enter the World of EGGs!! \n Aim of the Game is to Collect the GOLDEN EGG!!",
       text:"To win!! collect eggs and move a level UP!!",
       imageUrl:crash,
       imageSize:"200x200",
       confirmButtonText:"START ", 
        confirmButtonColor:"green"
    
    },
    function(){
       gameState="level1"
    })
    
    
    }