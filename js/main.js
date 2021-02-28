$(document).ready(function () {

   let nav = $("#nav"),
      navToggle = $("#navToggle"),
      burgerItem = $(".burger__item"),
      body = $("body")
   //==================================

   // Smooth scroll
   $("[data-scroll]").on("click", function () {
      event.preventDefault();
      let elementID = $(this).data("scroll"),
         elementOffset = $(elementID).offset().top;

      nav.removeClass("show");
      burgerItem.removeClass("active");
      body.removeClass("lock");

      $("html, body").animate({
         scrollTop: elementOffset - 70
      }, 1000);
   });
   //==================================

   // Nav Toggle
   navToggle.on("click", function (event) {
      event.preventDefault();
      nav.toggleClass("show");
      burgerItem.toggleClass("active");

      body.toggleClass("lock");
   })
   //==================================

   // wow animation
   new WOW().init();
   //==================================

   // before/after
   $("#before-after-1").twentytwenty();
   $("#before-after-2").twentytwenty();
   //==================================

   // Slik slider
   $("#slider").slick({
      adaptiveHeight: true,
      // autoplay: true,
      dots: true,
      fade: true
   });
   //==================================

   // Accordion
   $(".accordion__title").click(function () {
      $(this).closest(".accordion__item").siblings().removeClass("opened").find(".accordion__text").slideUp(400);
      $(this).closest(".accordion__item").toggleClass("opened").find(".accordion__text").slideToggle(400);
      return false;
   })
   //==================================

   // let header = $("#header"),
   //    intro = $("#intro"),
   //    introH = intro.innerHeight(),
   //    scrollPos = $(window).scrollTop();
   // header.addClass("fixed");

});
//==================================



// window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

// var
//    canvas = document.getElementById("c"),
//    ctx = canvas.getContext("2d"),
//    w = canvas.width = window.innerWidth,
//    h = canvas.height = window.innerHeight,
//    logoParticles = [],
//    particleIndex = 0,
//    logo = new Image(),
//    hue = 0;


// function Particle(x, y) {
//    this.origX = this.x = x;
//    this.origY = this.y = y;
//    this.color = "white";
//    this.maxLife = this.random(20);
//    this.life = 0;
//    this.vx = this.random(-1, 1);
//    this.vy = this.random(-1, 1);
//    this.grav = .04;
//    this.index = particleIndex;
//    logoParticles[particleIndex] = this;
//    particleIndex++;
// }

// Particle.prototype = {

//    constructor: Particle,

//    draw: function () {
//       ctx.fillStyle = this.color;
//       ctx.fillRect(this.x, this.y, 2, 2);
//       this.update();
//    },

//    update: function () {
//       if (this.life >= this.maxLife) {
//          logoParticles[this.index].reset();
//       }
//       this.x += this.vx;
//       this.y += this.vy;
//       this.vy += this.grav;
//       this.life++;
//    },

//    reset: function () {
//       this.x = this.origX;
//       this.y = this.origY;
//       this.life = 0;
//       this.color = "hsl(" + hue + ", 100%, 50%)";
//       this.vx = this.random(-1, 1);
//       this.vy = this.random(-1, 1);
//    },

//    random: function () {
//       var
//          min = arguments.length == 1 ? 0 : arguments[0],
//          max = arguments.length == 1 ? arguments[0] : arguments[1];
//       return Math.random() * (max - min) + min;
//    }

// };