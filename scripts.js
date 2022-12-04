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
