const panel = document.getElementById("panelcontainer")
const tab = document.getElementById("tab")
let j = 0

tab.addEventListener("click", (event) => {

if (event.target.tagName === "BUTTON") {
    tab.children[j].classList.remove("clicked")
    event.target.classList.add("clicked")

    panel.children[j].classList.remove("active")
    let i = Array.from(tab.children).indexOf(event.target)
    panel.children[i].classList.add("active")
    
    j = i
}
    
})