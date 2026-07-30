const continueBtn = document.getElementById("continueBtn");

const intro = document.getElementById("intro");

const giftScreen = document.getElementById("giftScreen");

const giftBox = document.getElementById("giftBox");

const result = document.getElementById("result");

const music = document.getElementById("music");





// ПЕРВЫЙ ЭКРАН

continueBtn.addEventListener("click",()=>{


    gsap.to(intro,{

        opacity:0,

        duration:1,


        onComplete:()=>{


            intro.style.display="none";


            giftScreen.style.display="flex";


            gsap.from(giftScreen,{

                opacity:0,

                duration:1

            });



            gsap.from(".box",{

                y:-300,

                scale:0.5,

                rotation:20,

                duration:1.5,

                ease:"bounce.out"

            });


        }


    });



});






// ОТКРЫТИЕ ПОДАРКА


giftBox.addEventListener("click",()=>{


    giftBox.classList.add("open");



    gsap.to(".box",{


        scale:1.2,

        duration:0.5


    });




    setTimeout(()=>{


        giftScreen.style.display="none";


        result.style.display="flex";



        gsap.from(".message-box",{


            opacity:0,

            scale:0.3,

            duration:1,

            ease:"back.out"


        });



        music.volume=0.5;


        music.play();



        createHearts();



        stars();



        showText();



    },1200);



});








// ТЕКСТ


function showText(){


const title="Для тебя ❤️";


const message=
"Пусть каждый день приносит тебе улыбки, счастье и красивые моменты ✨";



type(

document.getElementById("title"),

title,

120

);



setTimeout(()=>{


type(

document.getElementById("text"),

message,

50

);


},1500);



}




function type(element,text,speed){


let i=0;


let timer=setInterval(()=>{


element.innerHTML+=text[i];


i++;


if(i>=text.length)

clearInterval(timer);



},speed);



}









// СЕРДЕЧКИ


function createHearts(){


for(let i=0;i<50;i++){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";


heart.style.left=Math.random()*100+"vw";


heart.style.top="100vh";


heart.style.fontSize=
(15+Math.random()*30)+"px";



document.body.appendChild(heart);



gsap.to(heart,{

    y:-window.innerHeight-200,

    x:(Math.random()-0.5)*400,

    rotation:360,

    opacity:0,

    duration:3+Math.random()*3,


    onComplete:()=>{

        heart.remove();

    }


});



}


}








// ФОН СО ЗВЕЗДАМИ


function stars(){


for(let i=0;i<100;i++){


let star=document.createElement("div");


star.style.position="fixed";

star.style.width="3px";

star.style.height="3px";

star.style.background="white";

star.style.borderRadius="50%";


star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";


document.body.appendChild(star);



gsap.to(star,{

opacity:0.2,

duration:1+Math.random()*3,

repeat:-1,

yoyo:true


});



}



}








// CANVAS ЧАСТИЦЫ


const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");


canvas.width=innerWidth;

canvas.height=innerHeight;



let particles=[];


for(let i=0;i<100;i++){


particles.push({


x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*3,

speed:Math.random()*1+0.2


});


}



function animate(){


ctx.clearRect(0,0,canvas.width,canvas.height);



particles.forEach(p=>{


ctx.beginPath();


ctx.arc(

p.x,

p.y,

p.size,

0,

Math.PI*2

);



ctx.fillStyle="white";


ctx.fill();



p.y-=p.speed;



if(p.y<0)

p.y=canvas.height;



});



requestAnimationFrame(animate);


}



animate();
