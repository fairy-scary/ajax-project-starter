//Fetch for cat pic helper function -- GET request
const catPicElement = document.querySelector("img");

const fetchKitten = () => {
    let loader = document.getElementsByClassName("loader");

    loader[0].innerHTML = "loading..."

    fetch("/kitten/image")
        .then(res => {
            return res.json();
        })
        .then(data => {
            catPicElement.setAttribute("src", data.src)
            loader[0].innerHTML = "";
        })
        //Phase 3 --
        .catch(error => {
            alert("Ooopsies!")
        })
};

const voteBase = (vote) => {
    fetch(`/kitten/${vote}`, {
        method: "PATCH",
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            let score = document.getElementsByClassName("score");
            score[0].innerHTML = data.score;
        })
        .catch(error => {
            console.log(error)
        })
}

//Phase 1 --
document.addEventListener("DOMContentLoaded", fetchKitten);

//Phase 2 --
const newKitten = document.getElementById("new-pic");

newKitten.addEventListener("click", fetchKitten);

//Phase 4--
const up = document.getElementById("upvote")
const down = document.getElementById("downvote")

up.addEventListener("click", () => { voteBase('upvote') });
down.addEventListener("click", () => { voteBase('downvote') })

//Phase 5 --
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let userComment = document.getElementById("user-comment");

    let newComment = document.createElement("div");

    let commentsDiv = document.querySelector(".comments");

    commentsDiv.appendChild(newComment);

    newComment.innerHTML = userComment.value;
})
