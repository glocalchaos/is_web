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
    
    
}

function hideComments() {
    document.querySelector(".pop-up-window_comments").classList.toggle('active');
}