const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const links = document.querySelectorAll('.nav-links li a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const targetId = link.getAttribute('href').slice(1); // Obtiene el ID de la sección destino
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });

    // Cierra el menú al hacer clic en un enlace
    navLinks.classList.remove('show');
  });
});
