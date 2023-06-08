const btn = document.querySelector("button.more-button");
const blankArea = document.querySelector("div.blankArea");
const menu = document.querySelector(".more-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

blankArea.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

const aboutLink = document.querySelector('#aboutLink');
const aboutLinkMobile = document.querySelector('#aboutLinkMobile');
const about = document.querySelector('#about');

aboutLink.addEventListener("click", ()=>{
    about.scrollIntoView({ behavior: "smooth"});
}, false);

aboutLinkMobile.addEventListener("click", ()=>{
    about.scrollIntoView({ behavior: "smooth"});
    menu.classList.toggle("hidden");
}, false);

const upLink = document.querySelector('#upLink');
const upLinkMobile = document.querySelector('#upLinkMobile');
const up = document.querySelector('#up');
const upMobile = document.querySelector('#upMobile');    

upLink.addEventListener("click", ()=>{
    up.scrollIntoView({ behavior: "smooth"});
}, false);

upLinkMobile.addEventListener("click", ()=>{
    upMobile.scrollIntoView({ behavior: "smooth"});
    menu.classList.toggle("hidden");
}, false);

const faqLink = document.querySelector('#faqLink');
const faqLinkMobile = document.querySelector('#faqLinkMobile');
const faq = document.querySelector('#faq');

faqLink.addEventListener("click", ()=>{
    faq.scrollIntoView({ behavior: "smooth"});
}, false);

faqLinkMobile.addEventListener("click", ()=>{
    faq.scrollIntoView({ behavior: "smooth"});
    menu.classList.toggle("hidden");
}, false);

const startButton = document.querySelectorAll("#startButton");
startButton[0].addEventListener("click", ()=>{
    up.scrollIntoView({ behavior: "smooth"});
}, false);
startButton[1].addEventListener("click", ()=>{
    up.scrollIntoView({ behavior: "smooth"});
}, false);

const startButtonMobile = document.querySelector("#startButtonMobile");
startButtonMobile.addEventListener("click", ()=>{
    upMobile.scrollIntoView({ behavior: "smooth"});
}, false);

const home = document.querySelector("#home");
home.addEventListener("click", ()=>{
    document.body.scrollIntoView({ behavior: "smooth"});
}, false);

let times = 0;
let currentText = '';
const randomCards = [
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span>",
    "<span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-red-500 text-5xl font-bold'>莊</span><span class='text-blue-500 text-5xl font-bold'>閒</span>",
];

function player() {
    times++;
    currentText += '閒';
    document.getElementById("currentTextArea").insertAdjacentHTML("beforeend", "<span class='text-blue-500 text-5xl font-bold'>閒</span>");
    if (times == 5) {
        shuffle();
    }
}

function tie() {
    times++;
    currentText += '和';
    document.getElementById("currentTextArea").insertAdjacentHTML("beforeend", "<span class='text-green-500 text-5xl font-bold'>和</span>");
    if (times == 5) {
        shuffle();
    }
}

function banker() {
    times++;
    currentText += '莊';
    document.getElementById("currentTextArea").insertAdjacentHTML("beforeend", "<span class='text-red-500 text-5xl font-bold'>莊</span>");
    if (times == 5) {
        shuffle();
    }
}

function shuffle() {
    times = 0;
    let randomNumber = Math.floor(Math.random() * 32);
    document.getElementById("currentTextArea").innerHTML = '';
    document.getElementById("result").innerHTML = randomCards[randomNumber];
}