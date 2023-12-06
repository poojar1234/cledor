/* TOP Menu Stick*/
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 100) {
    $(".header-sticker").removeClass("stick");
  } else {
    $(".header-sticker").addClass("stick");
  }
});





/* Back to top button */
let backtotop = $('.back-to-top');

// Check if the backtotop element exists
if (backtotop.length) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.addClass('active');
    } else {
      backtotop.removeClass('active');
    }
  };

  // Run the toggleBacktotop function when the page loads
  $(document).ready(function () {
    toggleBacktotop();
  });

  // Add a scroll event listener to toggle the button
  $(window).scroll(function () {
    toggleBacktotop();
  });

  // Add a click event listener to scroll to the top when the button is clicked
  backtotop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
}

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $('.navbar-toggler span').toggleClass('bx-bar-chart bx-x');
    $('#mobile-nav-overlay').toggleClass('active');

  });
  $('.navbar-nav a').on('click', function () {
    $('.navbar-collapse').collapse('hide'); // This will hide the navbar-collapse.
    $('.navbar-toggler span').toggleClass('bx-bar-chart bx-x');
    $('#mobile-nav-overlay').toggleClass('active');
  });
});


/* for video */
// var videoContainers = document.querySelectorAll(".hero-slider .main-video");

// function playVideoLoop(videoContainer) {
//   var video = videoContainer;
//   video.currentTime = 10;
//   video.play();
//   setTimeout(function() {
//     pauseVideo(videoContainer);
//   }, 8000);
// }

// function pauseVideo(videoContainer) {
//   var video = videoContainer;
//   video.pause();
//   playVideoLoop(videoContainer);
// }

// videoContainers.forEach(function(container) {
//   playVideoLoop(container);
// });

(function($) {
  $('.difference-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    autoplayHoverPause: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>",
    ],
    responsive: {
        0: {
            items: 1,
        },
        414: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 1,
        },
        1200: {
            items: 1,
        },
    },
});
  // Testimonials Slider JS
  $('.testimonials-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    autoplayHoverPause: true,
    navText: [
        "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>",
        "<i class='fa fa-long-arrow-right' aria-hidden='true'></i>",
    ],
});
$('.villas-slider').owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  nav: true,
  dots: true,
  autoplay: true,
  autoPlaySpeed: 5000,
  autoplayHoverPause: true,
  navText: [
      "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>",
      "<i class='fa fa-long-arrow-right' aria-hidden='true'></i>",
  ],
});
})(jQuery);

//counter on scroll
// $(document).ready(function() {
//   var counters = [
//     { viewed: false, start: 0, targetElement: $('#counter1'), finalValue: 3298 },
//     { viewed: false, start: 0, targetElement: $('#counter2'), finalValue: 2181 },
//     { viewed: false, start: 0, targetElement: $('#counter3'), finalValue: 9316 },
//     { viewed: false, start: 0, targetElement: $('#counter4'), finalValue: 7191 }
//   ];

//   $(window).scroll(function() {
//     counters.forEach(function(counter) {
//       if (!counter.viewed && isElementInView(counter.targetElement, true)) {
//         counter.viewed = true;
//         $({ countNum: counter.start }).animate({ countNum: counter.finalValue }, {
//           duration: 2000,
//           easing: 'linear',
//           step: function() {
//             counter.targetElement.text(Math.floor(this.countNum));
//           },
//           complete: function() {
//             counter.targetElement.text(counter.finalValue); // Change final value
//           }
//         });
//       }
//     });
//   });

//   // Function to check if element is in view
//   function isElementInView(element, fullyInView) {
//     var pageTop = $(window).scrollTop();
//     var pageBottom = pageTop + $(window).height();
//     var elementTop = $(element).offset().top;
//     var elementBottom = elementTop + $(element).height();

//     if (fullyInView === true) {
//       return ((pageTop < elementTop) && (pageBottom > elementBottom));
//     } else {
//       return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
//     }
//   }
// });

























