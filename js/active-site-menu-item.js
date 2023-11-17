document.addEventListener("DOMContentLoaded", function() {
    let currentUrl = document.location.pathname;
    if (currentUrl.slice(-1) === "/") {
        currentUrl = currentUrl.slice(0, -1);
    }

    let menuLinks = Array.from(
        document.querySelectorAll('.site-menu-item')
    );

    // console.log("чё смотришь " + document.location.pathname + " " + menuLinks.length)
    
    menuLinks.forEach(link => {
        let linkHref = link.getAttribute("href").split("/").reverse()[0];

                    // console.log(link);

                    
        if (document.location.href.indexOf(linkHref) > -1) {
            // console.log("gotcha!" + document.location.href + " === " + linkHref);
            link.classList.add('active');
        }
    });
  });