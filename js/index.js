const panel = document.getElementById("panelcontainer")
const tab = document.getElementById("tab")
let j = 0
const courses = document.getElementById("courses")
const courses_item = document.querySelectorAll(".course")

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

courses.addEventListener("click", (event) => {
    
    if (event.target.className == "course clickable") {
        courses_item.forEach(course => course.lastElementChild.classList.remove("collapse"))
        event.target.lastElementChild.classList.add("collapse")
    } else {
        courses_item.forEach(course => {
            let element = course.lastElementChild
            if (element.classList.contains("collapse")) {
                element.classList.remove("collapse")
            }
        })
        event.target.closest('.course').lastElementChild.classList.add("collapse"); // el elemento mas cercano
    }
})
