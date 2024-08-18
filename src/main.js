const hamburger= document.getElementById("hamburger")

const closes = document.getElementById("close")

const lists = document.getElementById("lists")

hamburger.addEventListener("click", () => {
hamburger.classList.add("hidden");
closes.classList.remove("hidden");
lists.classList.remove("hidden")
})

closes.addEventListener("click", () => {
closes.classList.add("hidden");
hamburger.classList.remove("hidden");
lists.classList.add("hidden")

})

lists.addEventListener("click", () => {
    lists.classList.add("hidden")
})