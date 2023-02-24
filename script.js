window.addEventListener("scroll", function() {
  var heroSectionHeight = document.getElementById("hero-section").offsetHeight;
  if (window.pageYOffset > heroSectionHeight - 100) {
    document.getElementById("cat-section").classList.add("show");
    document.getElementById("hero-section").classList.add("hide");
  }
});
