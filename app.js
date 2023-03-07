const menu = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("move");
  cart.classList.remove("active");
  login.classList.remove("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
  menu.classList.remove("move");
};

// change header background color and shadow on scroll
const nav = document.querySelector(".nav-subpages");
window.addEventListener("scroll", () => {
  nav.classList.toggle("shadow", window.scrollY > 0);
});

// video gallery
const listVideo = document.querySelectorAll(".video-list .vid");
const mainVideo = document.querySelector(".main-video video");
const title = document.querySelector(".main-video .title");

listVideo.forEach((video) => {
  video.onclick = () => {
    listVideo.forEach((vid) => vid.classList.remove("active"));
    video.classList.add("active");
    if (video.classList.contains("active")) {
      let src = video.children[0].getAttribute("src");
      mainVideo.src = src;
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
    }
  };
});
