const intro = document.getElementById("intro");
const giftScreen = document.getElementById("giftScreen");
const result = document.getElementById("result");

const continueBtn = document.getElementById("continueBtn");
const giftBox = document.getElementById("giftBox");

const music = document.getElementById("music");

continueBtn.onclick = () => {

    intro.style.display = "none";
    giftScreen.style.display = "flex";

}

giftBox.onclick = () => {

    music.play();

    giftBox.style.animation = "shake .5s infinite";
    
    createConfetti();

    setTimeout(() => {

        giftScreen.style.display = "none";
        result.style.display = "flex";

        document.getElementById("giftImage").style.opacity = "1";
        document.getElementById("giftImage").style.transform = "translateY(0)";

    },2500);

}
// --------------------
// Конфетти
// --------------------

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

const confetti = [];

function createConfetti() {

    for (let i = 0; i < 250; i++) {

        confetti.push({

            x: canvas.width / 2,
            y: canvas.height / 2,

            vx: (Math.random() - 0.5) * 12,
            vy: Math.random() * -12 - 4,

            size: Math.random() * 8 + 4,

            color: `hsl(${Math.random()*360},100%,60%)`,

            life: 200

        });

    }

}

function drawConfetti(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach((c,index)=>{

        c.x+=c.vx;
        c.y+=c.vy;

        c.vy+=0.15;

        c.life--;

        ctx.fillStyle=c.color;

        ctx.fillRect(c.x,c.y,c.size,c.size);

        if(c.life<=0){

            confetti.splice(index,1);

        }

    });

    requestAnimationFrame(drawConfetti);

}

drawConfetti();
