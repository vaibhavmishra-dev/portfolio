/* =========================
Dark Mode Toggle
========================= */

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {


document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
    darkModeBtn.innerHTML = "☀️ Light Mode";
} else {
    darkModeBtn.innerHTML = "🌙 Dark Mode";
}


});

/* =========================
Typing Effect
========================= */

const typingText = document.querySelector(".typing-text");

const words = [
"Android Developer",
"Web Developer",
"DSA Learner",
"Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){


const currentWord = words[wordIndex];

if(!isDeleting){
    typingText.textContent =
    currentWord.substring(0, charIndex + 1);

    charIndex++;

    if(charIndex === currentWord.length){
        isDeleting = true;

        setTimeout(typeEffect, 1500);
        return;
    }

} else {

    typingText.textContent =
    currentWord.substring(0, charIndex - 1);

    charIndex--;

    if(charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }
}

setTimeout(typeEffect, isDeleting ? 60 : 120);


}

typeEffect();

/* =========================
tsParticles Background
========================= */

tsParticles.load("tsparticles", {


background: {
    color: {
        value: "transparent"
    }
},

particles: {

    number: {
        value: 80
    },

    color: {
        value: "#38bdf8"
    },

    links: {
        enable: true,
        color: "#38bdf8",
        distance: 150,
        opacity: 0.3
    },

    move: {
        enable: true,
        speed: 1.5
    },

    size: {
        value: 3
    },

    opacity: {
        value: 0.5
    }
}


});

/* =========================
Scroll To Top Button
========================= */

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "⬆";

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "12px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {


if(window.scrollY > 300){
    scrollBtn.style.display = "block";
} else {
    scrollBtn.style.display = "none";
}


});

scrollBtn.addEventListener("click", () => {


window.scrollTo({
    top: 0,
    behavior: "smooth"
});


});
