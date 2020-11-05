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
};
//

//Phase 1
document.addEventListener("DOMContentLoaded", fetchKitten);

//Phase 2 --
const newKitten = document.getElementById("new-pic");

newKitten.addEventListener("click", fetchKitten);
