const tbtn = document.querySelectorAll('.side-nav ul li');
const tab = document.querySelectorAll('.tabs');

function show(panelIndex) {
  console.log(panelIndex)
  tab.forEach(function(node) {
    node.style.display = 'none';
    console.log(node)
  });
  tab[panelIndex].style.display = 'block';
}
show(0);

$('.side-nav ul li').click(function() {
  $(this).addClass('active').siblings().removeClass('active');
})

const bar = document.querySelector('.bars');
const navMobile = document.querySelector('.nav-mobile');

bar.addEventListener('click', () => {
  navMobile.classList.toggle('show');
})

const mobileBar = document.querySelector('.m-bar');
const aside = document.querySelector('.sidebar');
const close = document.querySelector('.close');

mobileBar.addEventListener('click', () => {
  aside.classList.add('show')
})

close.addEventListener('click', () => {
  aside.classList.remove('show')
})
