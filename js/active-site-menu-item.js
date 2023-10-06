/* let currentUrl = document.location.pathname;

let menuLinks = Array.from(
    document.getElementsByClassName('.site-menu-item')
);

/* ############ 
console.log("чё смотришь " + document.location.pathname + " " + menuLinks.length)
for (var i = 0; i < menuLinks.length; i++) {
    console.log(i + " " + menuLinks[i].href)
    let link = menuLinks[i];

    if (link.href === currentUrl) {

        link.classList.add('.active');
        break;
    }
} #############*/

/* console.log("чё смотришь " + document.location.pathname + " " + menuLinks.length)
menuLinks.forEach(menuLink => {
    if (menuLink.href === currentUrl) {
        menuLink.classList.add(active);
    }
}) */

document.addEventListener("DOMContentLoaded", function() {
    let currentUrl = document.location.pathname;
    if (currentUrl.slice(-1) === "/") {
        currentUrl = currentUrl.slice(0, -1);
    }

    let menuLinks = Array.from(
        document.querySelectorAll('.site-menu-item')
    );

    console.log("чё смотришь " + document.location.pathname + " " + menuLinks.length)
    
    menuLinks.forEach(link => {
        let linkHref = link.getAttribute("href").split("/").reverse()[0];

                    console.log(link);

                    
        if (document.location.href.indexOf(linkHref) > -1) {
            console.log("gotcha!" + document.location.href + " === " + linkHref);
            link.classList.add('active');
        }
    });
  });