const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeMenu = document.getElementById("nav-close");

// Show
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Hidden
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

// Close menu when choose one
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navMenu.classList.remove('show');
}

navLink.forEach(link => link.addEventListener('click', linkAction));

// scroll section active link

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive)

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  })
}