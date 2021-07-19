$(function () {
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5500,
    arrows: false,
  });
  // $('.accordeon-item__title').click(function () {
  //   $(this).next('.accordeon-item__content').slideToggle(200);
  // });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordeon-item__title').forEach((item) => {
    item.addEventListener('click', () => {
      const parent = item.parentNode;
      if (parent.classList.contains('accordeon-item--active')) {
        parent.classList.remove('accordeon-item--active');
      } else {
        parent.classList.toggle('accordeon-item--active');
        document
          .querySelectorAll('.accrdeon-item')
          .forEach((child) => child.classList.remove('accordeon-item--active'));
      }
    });
  });
  document.querySelectorAll('.info-img').forEach((img) => {
    img.addEventListener('click', () => {
      img.classList.toggle('active');
    });
  });
});

$(window).ready(function () {
  $('.loader').fadeOut();
});
