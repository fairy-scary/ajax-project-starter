//Phase 1
document.addEventListener("DOMContentLoaded", () => {

    const catPicElement = document.querySelector("img")

    fetch("/kitten/image")
        .then(res => {
            return res.json();
        })
        .then(data => {
            catPicElement.setAttribute("src", data.src)
        })

});
