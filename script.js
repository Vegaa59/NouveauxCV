// responsive navbar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav__links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
// navbar fixed on top
window.onscroll = function () {
  myFunction();
};

let navigation = document.querySelector(".fix");

let fixNavigation = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= fixNavigation) {
    navigation.classList.add("fixNavigation");
  } else {
    navigation.classList.remove("fixNavigation");
  }
}
//smooth scroll navbar

let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1500,
});

// scroll to the top function

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// scroll reveal
const sr = ScrollReveal();

//mon profil

sr.reveal(".about", {
  origin: "left",
  duration: 2000,
  distance: "600px",
  opacity: 0,
});

sr.reveal(".imageperso", {
  origin: "right",
  delay: 500,
  duration: 2500,
  distance: "1000px",
  opacity: 0,
});

sr.reveal(
  ".presentation",
  {
    duration: 1000,
    distance: "50px",
  },
  100
);
sr.reveal(
  ".soustitre",
  {
    duration: 1500,
    distance: "70px",
  },
  150
);

sr.reveal(
  ".texteapropos",
  {
    opacity: 0,
    duration: 2000,
    distance: "200px",
  },
  100
);

//maformation

sr.reveal(".carte", {
  origin: "right",
  distance: "400px",
  delay: 300,
  duration: 1000,
  interval: 500,
});
sr.reveal(".arrow", {
  origin: "right",
  distance: "400px",
  delay: 300,
  duration: 1000,
  interval: 500,
});
sr.reveal(".competence", {
  origin: "bottom",
  distance: "50px",
  delay: 800,
  duration: 1000,
  interval: 500,
});

//blog-card experiences

sr.reveal(".pair", {
  origin: "left",
  distance: "500px",
  duration: 1000,
  delay: 200,
});
sr.reveal(".impair", {
  origin: "right",
  distance: "500px",
  duration: 1000,
  delay: 200,
});

// tiny-slider ----------------

var slider = tns({
  responsive: {
    1200: {
      items: 2,
    },
    1800: {
      items: 3,
    },
  },
  container: "#slider",
  items: 1,
  mouseDrag: true,
  slideBy: "page",
  swipeAngle: false,
  speed: 400,
  autoplay: true,
  autoplayButtonOutput: false,
  controls: false,
  nav: false,
});
