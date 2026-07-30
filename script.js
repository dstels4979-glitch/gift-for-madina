const continueBtn = document.getElementById("continueBtn");
const intro = document.getElementById("intro");
const giftScreen = document.getElementById("giftScreen");
const giftBox = document.getElementById("giftBox");
const result = document.getElementById("result");
const music = document.getElementById("music");


// музыка
music.loop = true;
music.volume = 0.5;



// кнопка продолжить

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

                scale:0.4,

                rotation:20,

                duration:1.5,

                ease:"bounce.out"

            });


        }

    });



});





// открытие подарка

giftBox.addEventListener("click",()=>{


    // запускаем музыку после действия пользователя

    music.play().catch(()=>{});



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



        createHearts();

        createStars();

        showText();



    },1200);



});







// печатающийся текст


function showText(){


    let title =
    "Для тебя ❤️";


    let message =
    "Пусть каждый день твоей жизни будет наполнен счастьем, улыбками и красивыми моментами ✨";



    typeText(

        document.getElementById("title"),

        title,

        120

    );



    setTimeout(()=>{


        typeText(

            document.getElementById("text"),

            message,

            50

        );


    },1500);



}



function typeText(element,text,speed){


    let i=0;


    let timer=setInterval(()=>{


        element.innerHTML += text[i];


        i++;


        if(i>=text.length){

            clearInterval(timer);

        }


    },speed);



}







// сердечки


function createHearts(){


    for(let i=0;i<60;i++){


        let heart=document.createElement("div");


        heart.innerHTML="❤️";


        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="100vh";

        heart.style.fontSize=
        (15+Math.random()*35)+"px";

        heart.style.zIndex="10";



        document.body.appendChild(heart);



        gsap.to(heart,{


            y:-window.innerHeight-200,


            x:(Math.random()-0.5)*500,


            rotation:360,


            opacity:0,


            duration:3+Math.random()*3,



            onComplete:()=>{

                heart.remove();

            }


        });



    }


}








// звёзды


function createStars(){


    for(let i=0;i<120;i++){


        let star=document.createElement("div");


        star.className="star";


        star.style.position="fixed";

        star.style.width="3px";

        star.style.height="3px";

        star.style.background="white";

        star.style.borderRadius="50%";


        star.style.left=
        Math.random()*100+"vw";


        star.style.top=
        Math.random()*100+"vh";


        document.body.appendChild(star);



        gsap.to(star,{


            opacity:0.2,


            duration:
            1+Math.random()*3,


            repeat:-1,


            yoyo:true


        });


    }


}








// частицы canvas


const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;



let particles=[];



for(let i=0;i<150;i++){


    particles.push({


        x:Math.random()*canvas.width,


        y:Math.random()*canvas.height,


        size:Math.random()*3,


        speed:Math.random()+0.2


    });



}




function animateParticles(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



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



        if(p.y<0){

            p.y=canvas.height;

        }


    });



    requestAnimationFrame(animateParticles);


}



animateParticles();






// адаптация размера окна


window.addEventListener("resize",()=>{


    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;


});
