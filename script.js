let currentSection = 0;
const sections = document.querySelectorAll(".section");
let isScrolling = false;

window.addEventListener("wheel", (event) => {
    if (isScrolling) return;

    isScrolling = true; 

    if (event.deltaY > 0) {
        currentSection = Math.min(currentSection + 1, sections.length - 1);
    } else {
        currentSection = Math.max(currentSection - 1, 0);
    }
    
    sections[currentSection].scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
        isScrolling = false;
    }, 800);
});


let navigation = document.querySelector(".navigation");
let close = document.querySelector(".close");
let main = document.querySelector(".main");
let bodyBlur = document.createElement("div"); 
bodyBlur.classList.add("body-blur");
document.body.appendChild(bodyBlur);

navigation.onclick = function () {
    if (!main.classList.contains("active")) { 
        main.classList.add("active");
        navigation.classList.add("active");
        bodyBlur.classList.add("active");
    }
};

close.onclick = function () {
    if (main.classList.contains("active")) {
        main.classList.remove("active");
        navigation.classList.remove("active");
        bodyBlur.classList.remove("active");
    }
};