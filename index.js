ScrollReveal().reveal(".header", {
  delay: 500,
  duration: 1500,
  origin: "top",
  distance: "20px"
});
ScrollReveal().reveal(".header__text-title", {
  delay: 500,
  duration: 1500,
  origin: "left",
  distance: "200px"
});
ScrollReveal().reveal(".header__text-btn", {
  delay: 500,
  duration: 1500,
  origin: "right",
  distance: "200px",
  opacity: 0
});
ScrollReveal().reveal(".header__form", {
  delay: 500,
  duration: 1500,
  origin: "bottom",
  distance: "100px"
});
ScrollReveal().reveal(".popular__title", {
  delay: 500,
  duration: 1500,
  origin: "left",
  distance: "50px"
});
const cards = document.querySelectorAll(".popular__content-card");

ScrollReveal().reveal(cards, {
  interval: 200, // Інтервал між запуском анімацій карток
  duration: 600,
  beforeReveal: function (el, index) {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 200); // Затримка для кожної картки: 200 мс для першої, 400 мс для другої і т.д.
  }
});
const hotelCards = document.querySelectorAll(".hotel__card");

ScrollReveal().reveal(hotelCards, {
  interval: 200, // Інтервал між запуском анімацій карток
  duration: 600,
  beforeReveal: function (el, index) {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 200); // Затримка для кожної картки: 200 мс для першої, 400 мс для другої і т.д.
  }
});
