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
    shopItem.appendChild(button)
}

function revealComments() {
    document.querySelector(".pop-up-window_comments").classList.toggle('active');
    
    loadComments();
}

function hideComments() {
    document.querySelector(".pop-up-window_comments").classList.toggle('active');
    hidePreloader();
    hideErrorMessage();
    cleanComments();
}

function loadComments() {
    showPreloader();
    fetch('https://jsonplaceholder.typicode.com/comments').then((response) => response.json())
            .then(data => {
                hidePreloader();
                var randomComments = (data.sort(() => 0.5 - Math.random()).slice(0, 15));
                for (i in randomComments) {
                    renderComment(randomComments[i]);
                }
    }).catch(error => {showErrorMessage(); console.log(error);})
}




function showErrorMessage() {
    hidePreloader();

    commentArea = document.querySelector(".pop-up-window_comments")
    errorMessage = document.createElement('p')
    errorMessage.id="error"
    errorMessage.textContent = "⚠️ ERROR"
    commentArea.appendChild(errorMessage);
    
}

function hideErrorMessage() {
    errorMessage = document.querySelector("#error");
    errorMessage?.remove();
}




function showPreloader() {
    preloader = document.querySelector(".preloader");
    if (!preloader.classList.contains("active")) {
        preloader.classList.add('active')
    }
}

function hidePreloader() {
    preloader = document.querySelector(".preloader");
    if (preloader.classList.contains("active")) {
        preloader.classList.remove('active');
    }
}

function renderComment(comment) {
    commentArea = document.querySelector(".pop-up-window_comments");
    
    commentElement = document.createElement('div');
    commentElement.classList.add("comment-element");
    commenterName = document.createElement('span');
    commenterName.classList.add("commenter-name");
    commenterName.textContent = comment.name;
    commentElement.appendChild(commenterName);
    commenterMail = document.createElement('span');
    commenterMail.classList.add("commenter-mail");
    commenterMail.textContent = comment.email;
    commentElement.appendChild(commenterMail);
    commentBody = document.createElement('span');
    commentBody.classList.add("comment-text");
    commentBody.textContent = comment.body;
    commentElement.appendChild(commentBody);

    commentArea.appendChild(commentElement);
}

function cleanComments() {
    var comments = document.querySelectorAll('.comment-element')
    for (i in comments) {
        if (comments[i] instanceof Node) {
            comments[i].remove();
        }
    }
}