jQuery(document).ready(function ($) {

  // main Banner
  $('#main-banner').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 30000,
      autoplayHoverPause: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 1
          }
      }
  });


  // product banner
  $('#product-banner').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 4
          }
      }
  });


  // menu slider
  $('#menu-slider').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 1
          }
      }
  });

  // testimonials slider
  $('#testimonials-slider').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 1
          }
      }
  });

});


// sticky menu
window.onscroll = function () {
  myFunction()
};

var navbar = document.getElementById("header");
var stickeyAdded = navbar.offsetTop + 150;
var sticky = stickeyAdded;

function myFunction() {
  if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
  } else {
      navbar.classList.remove("sticky");
  }
}



$(".nav-link").click(function () {
  $("#navbarSupportedContent").removeClass("show");
});

window.onload = function () {
  document.querySelector(".pre-loader").style.display = "none";
  document.querySelector(".main-body-wrapper").style.display = "block";
  // document.querySelector(".content-sec").style.display="block";
}