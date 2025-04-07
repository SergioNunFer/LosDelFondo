const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const links = document.querySelectorAll('.nav-links li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });

    navLinks.classList.remove('show');
    });
});
