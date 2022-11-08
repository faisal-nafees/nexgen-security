function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Hero section slider
// $(function() {
//   var TIMER = 0;
//   console.log(TIMER);
//   var pic_index = 0;
//   console.log('pic_index=' + pic_index);
//   $('.slider ul li').eq(pic_index).css({
//     top: 0
//   });
//   $('.menu ul li').eq(pic_index).addClass('active');
//   TimerStart();
//   // 設定輪播 setInterval

//   function TimerStart() {
//     if(TIMER>0) {return;}
//     TIMER = setInterval(function() {
//       $('.slider ul li').eq(pic_index).stop(true, false).animate({
//         top: '-450px'
//       });
//       if (pic_index < $('.slider ul li').length - 1) {
//         pic_index++;
//         console.log('pic_index=' + pic_index);
//       } else {
//         pic_index = 0;
//       }
//       $('.slider ul li').eq(pic_index).css({
//         top: '280px'
//       });
//       $('.slider ul li').eq(pic_index).stop(true, false).animate({
//         top: "0px"
//       });

//       $('.menu ul li').removeClass('active');
//       $('.menu ul li').eq(pic_index).addClass('active');

//     }, 4000);
//     console.log(TIMER);
//   };

//   function TimerStop() {
//     clearInterval(TIMER);
//     TIMER = 0;
//     console.log(TIMER);
//   }

//   $('.menu').hover(function() {
//     TimerStop();
//   }, function() {
//     TimerStart();
//   });
//   //prev function

//   $('.prev').click(function() {
//     $('.slider ul li').eq(pic_index).stop(true, false).animate({
//       top: '280px'
//     })

//     if (pic_index > 0) {
//       pic_index--;
//     } else {
//       pic_index = $('.slider ul li').last().index();
//     }
//     $('.slider ul li').eq(pic_index).css({
//       top: '-280px'
//     });
//     $('.slider ul li').eq(pic_index).stop(true, false).animate({
//       top: "0px"
//     });
//     console.log('pic_index=' + pic_index);
//     $('.menu ul li').removeClass('active');
//     $('.menu ul li').eq(pic_index).addClass('active');
// TimerStop();
//     setTimeout(TimerStart, 5000);
//     return false;
//   })

//   //next function

//   $('.next').click(function(event) {

//     $('.slider ul li').eq(pic_index).stop(true, false).animate({
//       top: '-280px'
//     });
//     if (pic_index < $('.slider ul li').length - 1) {
//       pic_index++;
//     } else {
//       pic_index = 0;
//     }
//     $('.slider ul li').eq(pic_index).css({
//       top: '280px'
//     });
//     $('.slider ul li').eq(pic_index).stop(true, false).animate({
//       top: "0px"
//     });
//     console.log('pic_index=' + pic_index);
//     $('.menu ul li').removeClass('active');
//     $('.menu ul li').eq(pic_index).addClass('active');
// TimerStop();
//     setTimeout(TimerStart, 5000);
//     return false;
//   });

//   //menu function

//   $('.menu ul li').click(function(event) {
   
//     if (pic_index != $(this).index()) {
//       $('.slider ul li').eq(pic_index).stop(true, false).animate({
//         top: "-280px"
//       });
//       console.log('pic_index=' + pic_index);
//       pic_index = $(this).index();
//       $('.menu ul li').removeClass('active');
//       $(this).addClass('active');

//       $('.slider ul li').eq(pic_index).css({
//         top: '280px'
//       });

//       $('.slider ul li').eq(pic_index).stop(true,        false).animate({ top: 0});
//      TimerStop();
//     setTimeout(TimerStart, 5000);
//     return false;
//     }

//   });
// })
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  // direction: "vertical",
  centeredSlides: 'true',
  fade: "true",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Swiper Testimonial
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// Navbar Toggle
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("header").addClass("black");
  } else {
    $("header").removeClass("black");
  }
});

// Form

tailwind.config = {
  plugins: [require("@tailwindcss/forms")],
};
// Faq's
