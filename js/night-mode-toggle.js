function nightModeToggle() {
    const elements = document.querySelectorAll("footer a, nav, .site-menu, .container_header, header, main, footer, article, main");

    //element.classList.toggle("night-mode");
    elements.forEach((element) => {
        if (!element.classList.contains("separate-block")) {
          element.classList.toggle('night-mode');
        }
      });

    if (localStorage.getItem("nightMode") == "true") {
        localStorage.setItem("nightMode", "false");
    }
    else if ((localStorage.getItem("nightMode") == "false") || (localStorage.getItem("nightMode") == null)) {
      localStorage.setItem("nightMode", "true");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var nightMode = localStorage.getItem("nightMode");
    if (nightMode == "true") {
        nightModeToggle();
    }
})