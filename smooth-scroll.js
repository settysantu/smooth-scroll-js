(function() {
  function smoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        var target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, null, " ");
      });
    });
  }

  window.SmoothScroll = smoothScroll;
})();
