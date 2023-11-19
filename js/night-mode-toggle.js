function nightModeToggle() {
    const elements = document.querySelectorAll("footer a, nav, .site-menu, .container_header, header, main, footer, article, main");

    //element.classList.toggle("night-mode");
    elements.forEach((element) => {
        if (!element.classList.contains("separate-block")) {
          element.classList.toggle('night-mode');
        }
      });

    if (nightMode) {
        localStorage.setItem("nightMode", false);
    }
    else if ((!nightMode) || (nightMode == null)) {
      localStorage.setItem("nightMode", true);
    }
}

var nightMode = localStorage.getItem("nightMode");

if (nightMode) {
    nightModeToggle();
}