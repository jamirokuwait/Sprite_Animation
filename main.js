let playerState = "idle";
const dropdown = document.getElementById("animations");
    dropdown.addEventListener("change", function (event) {
    playerState = event.target.value;
})


const canvas = document.getElementById("testcanvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600 ;
const CANVAS_HEIGHT = canvas.height = 600 ;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
 //In questo caso prendo la grandezza della singola sprite 
    // dividendo la griglia per i suoi elementi
    // 6878/12 = 575 (lunghezza)
    // e 5230 /10 = 523 (altezza)


let gameFrame = 0;
const staggerFrames = 5;

const spriteAnimations = [];
const animationStates = [
    {
        name : "idle",
        frames : 7,
    },
    {
        name : "jump",
        frames : 7,
    },
    {
        name : "fall",
        frames : 7,
    },
    {
        name : "run",
        frames : 9,
    },
    {
        name : "dizzy",
        frames : 11,
    },
    {
        name : "sit",
        frames : 5,
    },
    {
        name : "roll",
        frames : 7,
    },
    {
        name : "bite",
        frames : 7,
    },
    {
        name : "ko",
        frames : 12,
    },
    {
        name : "getHit",
        frames : 4,
    }
];

animationStates.forEach((state,index) => {
    let frames = {
        loc : [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x : positionX, y : positionY});
    }
    spriteAnimations[state.name] = frames;
});

 function animate(){
    ctx.clearRect (0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    // ctx.drawImage(image,sx,sy,sw lunghezza ritaglio,sh altezza ritaglio,dx,dy,dw,dh); FORMULA GENRALE    
    ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
   
    // if (gameFrame % staggerFrames == 0) {
    //     if (frameX < 8) {
    //     frameX++;
    // } else {
    //     frameX = 0;
    // }
    // }
    
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();


    
