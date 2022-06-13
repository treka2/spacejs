let moon = document.querySelector(".moon");
let boat = document.querySelector(".boat");
let sun = document.querySelector(".landing .sun");
let centerH = document.querySelector(".landing h2");
let lastMountain = document.querySelector(".landing .last-mount");
let links = [...document.querySelectorAll("header li a")];
let product = document.querySelector(".products");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
// ##########
links[0].onclick = () => {
  moon.style.opacity = 1;
};
// ##########

onscroll = () => {
  if (scrollY > 30) {
    moon.style.top = `${scrollY * 4}px`;
    moon.style.opacity = 100 / scrollY;
    boat.style.left = `${scrollY}px`;
    centerH.style.fontSize = `${scrollY}px`;
    centerH.style.opacity = "1";
    sun.style.top = `${-scrollY + 150}px`;
  } else {
    moon.style.display = "block";
    moon.style.top = `100px`;
    boat.style.left = `-150px`;
    document.body.style.background = "linear-gradient(#200016, #10001f)";
    sun.style.top = `100%`;
    centerH.style.fontSize = "10px";
    centerH.style.opacity = "0";
  }
  if (scrollY > 70) {
    document.body.style.background = "linear-gradient(#6d96be, #10001f)";
    lastMountain.style.bottom = `-${scrollY - 350}px`;
    centerH.style.fontSize = `70px`;
  } else {
    lastMountain.style.bottom = `0px`;
    centerH.style.fontSize = `10px`;
  }

  if (scrollY > product.offsetTop - product.clientHeight + 300) {
    links.forEach((l) => {
      l.classList.remove("active");
    });
    links[1].classList.add("active");
  } else {
    links.forEach((l) => {
      l.classList.remove("active");
    });
    links[0].classList.add("active");
  }
  if (scrollY > about.offsetTop - about.clientHeight + 150) {
    links.forEach((l) => {
      l.classList.remove("active");
    });
    links[2].classList.add("active");
  }
  if (scrollY > contact.offsetTop - contact.clientHeight + 150) {
    links.forEach((l) => {
      l.classList.remove("active");
    });
    links[3].classList.add("active");
  }
};
// ##########

// #####################
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//QQQQQQQQQQQQQQQQQQQQQQq
//QQQQQQQQQQQQQQQQQQQQQQq
let normBtn = document.querySelector(".btn-norm");
let dBtn = document.querySelector(".btn-3d");
let circles = document.querySelector(".circles");
let solarSun = document.querySelector(".system-sun");
normBtn.onclick = () => {
  circles.style.transform = "rotateZ(0deg) rotateY(0deg)";
  solarSun.style.transform = " translateY(-50%) translateX(-50%) rotateY(5deg)";
};
dBtn.onclick = () => {
  circles.style.transform = "rotateZ(85deg) rotateY(-65deg)";
  solarSun.style.transform =
    " translateY(-30%) translateX(-45%) rotateY(25deg)";
};
// ***********contact
document.forms[0].onsubmit = (e) => {
  e.preventDefault();
};

setInterval(() => {
  document.querySelector(".day").textContent = `${new Date().getDate()}`;
  document.querySelector(".month").textContent = `/${new Date().getMonth()}`;
  document.querySelector(".year").textContent = `${new Date().getFullYear()},`;
  let secs = new Date().getSeconds();
  if (secs < 10) {
    secs = "0" + secs;
  }
  let mins = new Date().getMinutes();
  if (mins < 10) {
    mins = "0" + mins;
  }
  let hours = new Date().getHours();
  if (hours > 12) {
    hours = `0${hours - 12}`;
  }
  document.querySelector(".clock").textContent = `${hours}:${mins}:${secs}`;
}, 1000);
