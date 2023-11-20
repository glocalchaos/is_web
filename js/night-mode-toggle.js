function nightModeToggle() {
    const elements = document.querySelectorAll("footer a, nav, .site-menu, .container_header, header, main, footer, article, main");

    //element.classList.toggle("night-mode");
    elements.forEach((element) => {
        if (!element.classList.contains("separate-block")) {
          element.classList.toggle('night-mode');
        }
      });

    if (getState() == "true") {
        saveState("false");
    }
    else if ((getState == "false") || (getState() == null)) {
      saveState("true");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (getState() == "true") {
        nightModeToggle();
    }
})

function saveState(isOn) {
    var data = {
      isOn: isOn 
    };

    localStorage.setItem("nightMode", JSON.stringify(data));
}

function getState() {
    return JSON.parse(localStorage.getItem("nightMode"))["isOn"]
}