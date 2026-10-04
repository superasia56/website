document.addEventListener("DOMContentLoaded", function () {

    const surpriseButton = document.getElementById("surpriseButton");
    const surpriseReveal = document.getElementById("surpriseReveal");
    const envelope = document.getElementById("envelope");
    const revealMessage = document.querySelector(".reveal-message");

    const letterPage = document.getElementById("letterPage");
    const personalLetter = document.getElementById("personalLetter");
    const letterCover = document.getElementById("letterCover");
    const letterContent = document.getElementById("letterContent");
    const closeLetterButton = document.getElementById("closeLetter");

    const prayerPage = document.getElementById("prayerPage");
    const appreciationPage = document.getElementById("appreciationPage");
    const quizPage = document.getElementById("quizPage");

    const toPrayer = document.getElementById("toPrayer");
    const backToLetter = document.getElementById("backToLetter");

    const toAppreciation = document.getElementById("toAppreciation");
    const backToPrayer = document.getElementById("backToPrayer");

    const toQuiz = document.getElementById("toQuiz");
    const backToAppreciation = document.getElementById("backToAppreciation");
    const toAward = document.getElementById("toAward")
    const awardPage = document.getElementById("awardPage");
    toAward.addEventListener("click", () => {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    awardPage.classList.add("active");
});
    const toGift = document.getElementById("toGift");
const giftPage = document.getElementById("giftPage");

toGift.addEventListener("click", () => {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    giftPage.classList.add("active");
});
    /* =========================
       INITIAL PAGE SETTINGS
    ========================= */

    letterPage.style.display = "none";
    prayerPage.style.display = "none";
    appreciationPage.style.display = "none";
    quizPage.style.display = "none";

    surpriseReveal.style.display = "none";


    /* =========================
       FIRST SURPRISE BUTTON
    ========================= */

    surpriseButton.addEventListener("click", function () {

        surpriseReveal.style.display = "flex";

        envelope.style.display = "block";
        revealMessage.style.display = "none";

        setTimeout(function () {
            envelope.classList.add("open");
        }, 700);

        setTimeout(function () {
            envelope.style.display = "none";
            revealMessage.style.display = "block";
        }, 1800);

        setTimeout(function () {

            surpriseReveal.style.display = "none";

            document.querySelector(".welcome-page").style.display = "none";

            letterPage.style.display = "flex";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 4000);

    });


    /* =========================
       OPEN LETTER
    ========================= */

    letterCover.addEventListener("click", function (event) {

        event.stopPropagation();

        personalLetter.classList.add("open");

        letterCover.style.pointerEvents = "none";

    });


    /* =========================
       CLOSE LETTER
    ========================= */

    closeLetterButton.addEventListener("click", function (event) {

        event.stopPropagation();

        personalLetter.classList.remove("open");

        setTimeout(function () {
            letterCover.style.pointerEvents = "auto";
        }, 500);

    });


    /* =========================
       MOVE TO PRAYER
    ========================= */

    toPrayer.addEventListener("click", function () {

        letterPage.style.display = "none";
        prayerPage.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       BACK TO LETTER
    ========================= */

    backToLetter.addEventListener("click", function () {

        prayerPage.style.display = "none";
        letterPage.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       MOVE TO APPRECIATION
    ========================= */

    toAppreciation.addEventListener("click", function () {

        prayerPage.style.display = "none";
        appreciationPage.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       BACK TO PRAYER
    ========================= */

    backToPrayer.addEventListener("click", function () {

        appreciationPage.style.display = "none";
        prayerPage.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       MOVE TO QUIZ
    ========================= */

    toQuiz.addEventListener("click", function () {

        appreciationPage.style.display = "none";
        quizPage.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       BACK TO APPRECIATION
    ========================= */

    backToAppreciation.addEventListener("click", function () {

        quizPage.style.display = "none";
        appreciationPage.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


/* =========================
   APPRECIATION CARDS
========================= */

function toggleCard(card) {

    card.classList.toggle("active");

}


/* =========================
   FUNNY QUIZ
========================= */

function showAnswer(button, message) {

    const question = button.parentElement;

    const oldReaction = question.querySelector(".quiz-reaction");

    if (oldReaction) {
        oldReaction.remove();
    }

    const reaction = document.createElement("p");

    reaction.className = "quiz-reaction";

    reaction.innerHTML = message;

    question.appendChild(reaction);

    button.style.transform = "scale(1.03)";

    setTimeout(function () {
        button.style.transform = "scale(1)";
    }, 200);

}
/* =========================================
   PAGE 5 - GIFT BOX
========================================= */

const giftPage = document.getElementById("giftPage");
const giftBox = document.getElementById("giftBox");
const giftOpenBtn = document.getElementById("giftOpenBtn");

function openGiftBox() {

    giftPage.classList.add("opened");

}

giftBox.addEventListener("click", openGiftBox);

giftOpenBtn.addEventListener("click", openGiftBox);