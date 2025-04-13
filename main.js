const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle menu on button click
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Changer l'icône du menu
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});

// Fermer le menu quand on clique sur un lien
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.className = "ri-menu-line";
  }
});


const scrollRevealOption = {
  origin: "bottom",
  distance: "100px",
  duration: 1000,
};

/*ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});*/
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});



ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});
//function openGoogleForm() {
 // window.open("https://docs.google.com/forms/d/e/1FAIpQLScQ9mfvgbdUmYAQU9KCCgyN8c7q2je8e5uCTelZ-1WCR4b4vQ/viewform", "_blank");
//}
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.slider__track');
  const slides = document.querySelectorAll('.slider__track img');
  let currentSlide = 0;
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  setInterval(nextSlide, 3000); // Change toutes les 3 secondes
});
