// ===========================
// SELECT ELEMENTS
// ===========================

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const typing = document.getElementById("typing");
const scrollBtn = document.getElementById("scrollTopBtn");
const links = document.querySelectorAll(".nav-links a");

// ===========================
// DARK MODE
// ===========================

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

});

// Load saved theme

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

}

// ===========================
// MOBILE MENU
// ===========================

menuBtn.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});

// Close menu after clicking a link

links.forEach(function(link){

    link.addEventListener("click", function(){

        navLinks.classList.remove("active");

    });

});

// ===========================
// TYPING EFFECT
// ===========================

const words = [

"Frontend Developer",

"Software Engineering Student",

"Future Full Stack Developer"

];

let wordIndex = 0;

let letterIndex = 0;

let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,letterIndex);

        letterIndex++;

        if(letterIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typing.textContent = currentWord.substring(0,letterIndex);

        letterIndex--;

        if(letterIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,100);

}

typeEffect();

// ===========================
// SCROLL TO TOP BUTTON
// ===========================

window.addEventListener("scroll",function(){

    if(window.scrollY > 300){

        scrollBtn.style.display="block";

    }else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.addEventListener("click",function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ========================
// CONTACT FORM
// ========================

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    successMessage.textContent =
    "✅ Thank you! Your message has been received.";

    contactForm.reset();

});