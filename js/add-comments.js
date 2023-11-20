document.addEventListener("DOMContentLoaded", function() {
    shopItemsList = document.querySelectorAll(".separate-block_item");

    for (i in shopItemsList) {
        addCommentsButton(shopItemsList[i]);
    }

    buttons = document.querySelectorAll(".comment-button");
    for (i in buttons) {
        if (buttons[i] instanceof Node) {
            buttons[i].addEventListener("click", revealComments);
        }
    }

    document.querySelector("#comments-close-button").addEventListener("click", hideComments);
})


function addCommentsButton(shopItem) {
    if (!(shopItem instanceof Node)) {
        return;
    }
    button = document.createElement("a")
    button.classList.add("comment-button");
    button.textContent = "Комментарии"
    console.log(shopItem + "shopItem");
    shopItem.appendChild(button)
}

function revealComments() {
    document.querySelector(".pop-up-window_comments").classList.toggle('active');
    
    loadComments();
}

function hideComments() {
    document.querySelector(".pop-up-window_comments").classList.toggle('active');
}

function loadComments() {
    let randomComments;
    fetch('https://jsonplaceholder.typicode.com/comments').then((response) => response.json())
    .then(data => {
        randomComments = data.sort(() => 0.5 - Math.random()).slice(0, 15)
    }).catch(error => console.error(error));
    randomComments.forEach(comment => {
            console.log(comment);
    });
}