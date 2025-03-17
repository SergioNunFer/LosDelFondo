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
const menuBtn = document.getElementById("menu-btn");
const body = document.body;

menuBtn.addEventListener("click", () => {
    body.classList.toggle("menu-open");
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('menu-open');
    });
});


