function nightModeToggle() {
    const elements = document.querySelectorAll("footer a, nav, .site-menu, .container_header, header, main, footer, article");
    console.log(elements)
    //element.classList.toggle("night-mode");
    elements.forEach((element) => {
        if (!element.classList.contains("separate-block")) {
          element.classList.toggle('night-mode');
        }
      });
}