let second = document.getElementById("second")
let first = document.getElementById("first")

second.addEventListener("click", () => {
    first.classList.add("next-first")
    second.classList.add("next-second")
})