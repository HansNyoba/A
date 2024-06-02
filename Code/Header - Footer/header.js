function toTesti() {
    window.location.href = '../Testimonial/testi.html';
}

function toAbt() {
    window.location.href = '../About Us/abt.html';
}

function toOffer() {
    window.location.href = '../Our Offers/offer.html';
}

function toHome() {
    window.location.href = '../Home/home.html';
}
  
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.nav-menu');
  
  menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });
