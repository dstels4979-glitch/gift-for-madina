const intro = document.getElementById("intro");
const continueBtn = document.getElementById("continueBtn");

const giftScreen = document.getElementById("giftScreen");
const giftBox = document.getElementById("giftBox");

const result = document.getElementById("result");
const giftImage = document.getElementById("giftImage");

const music = document.getElementById("music");

// Показываем коробку
continueBtn.addEventListener("click", () => {

    gsap.to(intro, {
        opacity: 0,
        duration: 1,
        onComplete: () => {

            intro.style.display = "none";
            giftScreen.style.display = "flex";

            gsap.from("#giftBox", {
                y: -500,
                duration: 1.4,
                ease: "bounce.out"
            });

        }
    });

});

// Нажатие на коробку
giftBox.addEventListener("click",()=>{


    giftBox.classList.add("open");


    gsap.to(giftBox,{
        scale:1.2,
        duration:0.5
    });


    setTimeout(()=>{


        giftScreen.style.display="none";

        result.style.display="flex";


        gsap.from(result,{
            opacity:0,
            scale:0.3,
            duration:1,
            ease:"back.out"
        });


        music.play();


        createHearts();


    },1200);



});

    music.play();

    // Тряска
    gsap.to(giftBox, {
        rotation: -6,
        duration: 0.08,
        repeat: 15,
        yoyo: true
    });

    // Свечение
    gsap.to(giftBox, {
        filter: "drop-shadow(0 0 40px gold)",
        duration: .4,
        yoyo: true,
        repeat: 3
    });

    setTimeout(() => {

        giftBox.src = "assets/gift-box-open.png";

    },1200);

    setTimeout(() => {

        giftScreen.style.display = "none";
        result.style.display = "flex";

        gsap.to(giftImage,{
            opacity:1,
            y:-20,
            duration:1
        });

        gsap.from("#message",{
            opacity:0,
            y:40,
            duration:1,
            delay:.5
        });

    },2200);

});
