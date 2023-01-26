"use strict";

//ProgressBar
window.onscroll = function () {
  pageLoadBar();
};
var scrolled = 0;
function pageLoadBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  var all = document.getElementsByClassName("page-progress-bar");
  for (var i = 0; i < all.length; i++) {
    all[i].style.width = scrolled + "%";
  }
}

//Scroll to top

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

//Theme change
function myChangeWH() {
  document.getElementById("themeSW").href = "themes/WhiteTheme.css";
}
function myChangeBl() {
  document.getElementById("themeSW").href = "themes/blackTheme.css";
}

//Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));
