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

    setTimeout(() => {

        giftScreen.style.display = "none";
        result.style.display = "flex";

        document.getElementById("giftImage").style.opacity = "1";
        document.getElementById("giftImage").style.transform = "translateY(0)";

    },2500);

}
