var currentUrl = document.location.pathname;

var menuLinks = document.querySelectorAll('a');

for (var i = 0; i < menuLinks.length; i++) {
    var link = menuLinks[i];

    if (link.href === currentUrl) {

        link.classList.add('.active');
        return;
    }
}