const firstScreen = document.querySelector(".screen1")
const secondScreen = document.querySelector(".screen2")
const closedCookie = document.querySelector(".cookie-01")
const btnOpenCookie = document.querySelector(".buttonOpen")

closedCookie.addEventListener("click", function() {
    firstScreen.classList.add("hide")
    secondScreen.classList.remove("hide")
})

btnOpenCookie.addEventListener("click", function() {
    secondScreen.classList.add("hide")
    firstScreen.classList.remove("hide")
})