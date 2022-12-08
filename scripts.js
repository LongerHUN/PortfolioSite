//Scroll line function
window.onscroll = function () {
  pageLoadBar();
};

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

//Responsive setting

function checkMediaWidth() {
  if (window.innerWidth < 875) {
    document.getElementById("littleAlex").innerHTML = "Alex";
  } else if (window.innerWidth < 768) {
    document.getElementById("littleAlex").innerHTML = "Alex Asztalos";
  } else {
    document.getElementById("littleAlex").innerHTML = "Alex Asztalos";
  }
}
window.addEventListener("resize", checkMediaWidth);
