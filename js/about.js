
const masters = document.querySelector(".masters")


masters.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        let tfoot = event.target.previousElementSibling.lastElementChild
        tfoot.classList.toggle("table__hidden")
       
    }
})



const faqs = document.getElementById("faqs")
const faqs_item = document.querySelectorAll(".faq")

faqs.addEventListener("click", (event) => {
    
    if (event.target.className == "faq clickable") {
        faqs_item.forEach(faq => faq.lastElementChild.classList.remove("collapse"))
        event.target.lastElementChild.classList.add("collapse")
    } else {
        faqs_item.forEach(faq => {
            let element = faq.lastElementChild
            if (element.classList.contains("collapse")) {
                element.classList.remove("collapse")
            }
        })
        event.target.closest('.faq').lastElementChild.classList.add("collapse"); // el elemento mas cercano
    }
})