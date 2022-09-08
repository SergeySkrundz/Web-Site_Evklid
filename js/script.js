/* slider */

const swiper = new Swiper('.swiper-container', {

  slidesPerView: 1,
  loop: true,
  autoplay: true,
  autoplaySpeed: 2000,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* tabs */

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-work-link').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function (e) {
        e.classList.remove('tab-content--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
      });
    });

    e.addEventListener('click', function (e) {
      const tabDefault = e.currentTarget.dataset.active;
      document.querySelectorAll('.nav-work-link').forEach(function (e) {
        e.classList.remove('tabs-nav-btn-active')
        document.querySelector(`[data-path='${tabDefault}']`).classList.add('tabs-nav-btn-active');
      })
    })
  });
});

/* accordion */

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    active: false,
    animate: 1000,
  });
});

/* burger */

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

/* search */

document.querySelector('.search').addEventListener('click', function () {
  document.querySelector('.nav-search').classList.add('nav-search_show')
})

document.querySelector('.nav-search-btn_close').addEventListener('click', function () {
  document.querySelector('.nav-search').classList.remove('nav-search_show')
})


