const logo = document.querySelector(".brand-logo");
logo.addEventListener("click", () => {
  window.location.replace(
    "https://www.morestudios.in/corporate-video-production-company/"
  );
});
(function () {
  var youtube = document.querySelectorAll(".youtube");

  for (var i = 0; i < youtube.length; i++) {
    var source =
      "https://img.youtube.com/vi/" +
      youtube[i].dataset.embed +
      "/sddefault.jpg";

    var image = new Image();
    image.src = source;
    image.addEventListener(
      "load",
      (function () {
        youtube[i].appendChild(image);
      })(i)
    );

    youtube[i].addEventListener("click", function () {
      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/" +
          this.dataset.embed +
          "?rel=0&showinfo=0&autoplay=1"
      );

      this.innerHTML = "";
      this.appendChild(iframe);
    });
  }
})();

//Here is the Icon object
const icons = {
  plus_icon:
    '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M26.0417 1.04167C26.0417 0.46875 25.5729 0 25 0C24.4271 0 23.9583 0.46875 23.9583 1.04167V23.9583H1.04167C0.46875 23.9583 0 24.4271 0 25C0 25.5729 0.46875 26.0417 1.04167 26.0417H23.9583V48.9583C23.9583 49.5312 24.4271 50 25 50C25.5729 50 26.0417 49.5312 26.0417 48.9583V26.0417H48.9583C49.5312 26.0417 50 25.5729 50 25C50 24.4271 49.5312 23.9583 48.9583 23.9583H26.0417V1.04167Z" fill="white"/> </svg>',
  facebook_icon:
    '<svg width="50" height="115" viewBox="0 0 50 115" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3567 114.286H33.1758V56.671H48.3973L49.9995 37.3999H33.1286V26.4233C33.1286 21.8539 33.9769 20.0658 38.1711 20.0658H49.9995V0H34.8723C18.6612 0 11.3567 7.54951 11.3567 21.9532V37.3502H-0.000488281V56.8697H11.3567V114.236V114.286Z" fill="black"/></svg>',
  twitter_icon:
    '<svg width="50" height="41" viewBox="0 0 50 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 36.003C4.53425 38.9108 9.931 40.6111 15.722 40.6111C34.7462 40.6111 45.515 24.5441 44.8743 10.1035C46.8704 8.64958 48.62 6.85067 50 4.80532C48.1518 5.61853 46.1804 6.16067 44.1104 6.4071C46.2297 5.15032 47.8561 3.12962 48.62 0.73928C46.6486 1.92213 44.4554 2.75998 42.1143 3.22819C40.2415 1.23213 37.5801 0 34.623 0C27.9941 0 23.1395 6.18531 24.6427 12.5924C16.1163 12.1735 8.57565 8.0828 3.5239 1.87284C0.837851 6.48102 2.11927 12.5185 6.70281 15.5742C5.02711 15.5249 3.44998 15.0567 2.04534 14.2928C1.94677 19.0488 5.34746 23.4845 10.276 24.4702C8.82208 24.8645 7.24495 24.963 5.64317 24.6427C6.94924 28.7087 10.7442 31.6905 15.2292 31.7644C10.9167 35.1405 5.49532 36.6437 0.0492854 36.003H0Z" fill="black"/></svg>',
  instagram_icon:
    '<svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.9875 4.50839C31.6782 4.50839 32.4695 4.53237 35.1074 4.65228C37.5535 4.77218 38.8724 5.17986 39.7597 5.51559C40.9348 5.97122 41.7501 6.52278 42.6374 7.38609C43.5247 8.27338 44.0523 9.08873 44.5079 10.2638C44.8436 11.1511 45.2513 12.47 45.3712 14.9161C45.4911 17.554 45.5151 18.3453 45.5151 25.036C45.5151 31.7266 45.4911 32.518 45.3712 35.1559C45.2513 37.6019 44.8436 38.9209 44.5079 39.8082C44.0523 40.9832 43.5007 41.7986 42.6374 42.6858C41.7741 43.5492 40.9348 44.1007 39.7597 44.5564C38.8724 44.8921 37.5535 45.2998 35.1074 45.4197C32.4695 45.5396 31.6782 45.5635 24.9875 45.5635C18.2969 45.5635 17.5055 45.5396 14.8676 45.4197C12.4216 45.2998 11.1026 44.8921 10.2153 44.5564C9.04028 44.1007 8.22493 43.5492 7.33764 42.6858C6.47433 41.7986 5.92277 40.9832 5.46714 39.8082C5.13141 38.9209 4.72373 37.6019 4.60383 35.1559C4.48392 32.518 4.45994 31.7266 4.45994 25.036C4.45994 18.3453 4.48392 17.554 4.60383 14.9161C4.72373 12.47 5.13141 11.1511 5.46714 10.2638C5.92277 9.08873 6.47433 8.27338 7.33764 7.38609C8.22493 6.4988 9.04028 5.97122 10.2153 5.51559C11.1026 5.17986 12.4216 4.77218 14.8676 4.65228C17.5055 4.53237 18.2969 4.50839 24.9875 4.50839ZM24.9875 0C18.201 0 17.3376 0.0239808 14.6758 0.143885C12.0139 0.263789 10.1914 0.695444 8.60862 1.31894C6.95395 1.96643 5.56306 2.80576 4.17217 4.19664C2.78129 5.58753 1.91798 6.97842 1.29448 8.63309C0.670975 10.2158 0.263301 12.0384 0.143397 14.7002C0.0234925 17.3621 -0.000488281 18.2254 -0.000488281 25.012C-0.000488281 31.7986 0.0234925 32.6619 0.143397 35.3237C0.263301 37.9856 0.694955 39.8082 1.29448 41.3909C1.94196 43.0456 2.78129 44.4364 4.17217 45.8273C5.56306 47.2182 6.95395 48.0815 8.60862 48.705C10.1914 49.3285 12.0139 49.7362 14.6758 49.8801C17.3376 50 18.201 50.024 24.9875 50.024C31.7741 50.024 32.6374 50 35.2993 49.8801C37.9611 49.7602 39.7837 49.3285 41.3664 48.705C43.0211 48.0575 44.412 47.2182 45.8029 45.8273C47.1938 44.4364 48.0571 43.0456 48.6806 41.3909C49.3041 39.8082 49.7117 37.9856 49.8556 35.3237C49.9755 32.6619 49.9995 31.7986 49.9995 25.012C49.9995 18.2254 49.9755 17.3621 49.8556 14.7002C49.7357 12.0384 49.3041 10.2158 48.6806 8.63309C48.0331 6.97842 47.1938 5.58753 45.8029 4.19664C44.412 2.80576 43.0211 1.94245 41.3664 1.31894C39.7837 0.695444 37.9611 0.28777 35.2993 0.143885C32.6374 0.0239808 31.7741 0 24.9875 0Z" fill="black"/><path d="M24.9846 12.1826C17.8863 12.1826 12.1309 17.938 12.1309 25.0363C12.1309 32.1347 17.8863 37.89 24.9846 37.89C32.0829 37.89 37.8383 32.1347 37.8383 25.0363C37.8383 17.938 32.0829 12.1826 24.9846 12.1826ZM24.9846 33.3817C20.3803 33.3817 16.6393 29.6406 16.6393 25.0363C16.6393 20.432 20.3803 16.691 24.9846 16.691C29.5889 16.691 33.3299 20.432 33.3299 25.0363C33.3299 29.6406 29.5889 33.3817 24.9846 33.3817Z" fill="black"/><path d="M41.3736 11.6514C41.3736 13.3069 40.03 14.6504 38.3745 14.6504C36.7191 14.6504 35.3755 13.3069 35.3755 11.6514C35.3755 9.99591 36.7191 8.65234 38.3745 8.65234C40.03 8.65234 41.3736 9.99591 41.3736 11.6514Z" fill="black"/></svg>',
  linkedin_icon:
    '<svg width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3283 15.709H0.998535V47.1287H11.3283V15.709Z" fill="black"/><path d="M6.10648 11.6052C9.48732 11.6052 12.213 9.01256 12.213 5.8026C12.213 2.59265 9.48732 0 6.10648 0C2.72564 0 0 2.59265 0 5.8026C0 9.01256 2.72564 11.6052 6.10648 11.6052Z" fill="black"/><path d="M27.819 30.6536C27.819 26.2321 29.9689 23.6138 34.1113 23.6138C37.9129 23.6138 39.7219 26.1333 39.7219 30.6536V47.1539H49.9992V27.2448C49.9992 18.8218 44.9392 14.7461 37.8604 14.7461C30.7816 14.7461 27.819 19.9333 27.819 19.9333V15.7094H17.9087V47.1292H27.819V30.6289V30.6536Z" fill="black"/></svg>',
};

// Plus icon here And FAQ Section logic Building Here
let insertIcon = document.querySelectorAll(".faq-ask span");
insertIcon.forEach((element) => {
  element.innerHTML = icons.plus_icon;
});

function Expand() {}
const faq = document.querySelectorAll(".faq");
faq.forEach((element, index) => {
  let faqTrack = element.querySelector(".faq-ask");
  let faqAnswer = element.querySelector(".faq-answer");

  faqTrack.addEventListener("click", () => {
    let openFaq = faqAnswer.scrollHeight;
    element.classList.toggle("active");

    if (element.classList.contains("active")) {
      faqAnswer.style.height = `${openFaq}px`;
    } else {
      faqAnswer.style.height = 0;
    }
    collapse(index);
  });
});

const collapse = (index) => {
  faq.forEach((collapseElement, collapseIndex) => {
    let collapseFaqAnswer = collapseElement.querySelector(".faq-answer");
    if (collapseIndex != index) {
      collapseElement.classList.remove("active");
      collapseFaqAnswer.style.height = 0;
    }
  });
};

//Footer Data Here
const copyright = document.querySelector(".copyright");
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const linkedin = document.querySelector(".linkedin");
const instagram = document.querySelector(".instagram");

const currentDate = new Date();
let currentYear = currentDate.getFullYear();

copyright.textContent = `Morestudios © ${currentYear}`;
facebook.innerHTML = icons.facebook_icon;
twitter.innerHTML = icons.twitter_icon;
linkedin.innerHTML = icons.linkedin_icon;
instagram.innerHTML = icons.instagram_icon;

//Infinite Carousel Swiper Code Here
const testimonial = new Swiper(".testimonial-section > .swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  simulateTouch: true,
  centeredSlides: true,
  breakpoints: {
    986: {
      slidesPerView: 4,
    },
    786: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    enabled: true,
    delay: 0,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  centerInsufficientSlides: true,
  speed: 3000,
});

const creativeHub = new Swiper(".creative-section > .swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  simulateTouch: true,
  centeredSlides: true,
  breakpoints: {
    986: {
      slidesPerView: 4,
    },
    786: {
      slidesPerView: 2,
    },
    586: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    enabled: true,
    delay: 0,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  centerInsufficientSlides: true,
  speed: 4500,
});

/* const showcase = new Swiper(".showcase-section > .swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  simulateTouch: true,
  centeredSlides: true,
  breakpoints: {
    986: {
      slidesPerView: 3,
    },
    786: {
      slidesPerView: 2,
    },
    586: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    enabled: true,
    delay: 0,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  centerInsufficientSlides: true,
  speed: 3000,
});

const showcaseVideos = new Swiper(".showcase-section > .swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    986: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
}); */

const logoCarousel = new Swiper(".clients-logo-section .swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  simulateTouch: false,
  centeredSlides: true,
  breakpoints: {
    986: {
      slidesPerView: 7,
    },
    786: {
      slidesPerView: 4,
    },
    586: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    enabled: true,
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
  centerInsufficientSlides: true,
  speed: 3000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
