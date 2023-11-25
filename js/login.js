const forms = document.querySelector(".forms")
const signin = document.getElementById("signin")
const signinbtn = document.getElementById("signin__btn")
const circle = document.getElementById("circle")
const login = document.getElementById("login")
const loginbtn = document.getElementById("login__btn")

/* button effect */
const clickUp = (pointer) => forms.addEventListener("mouseup", () => {
    pointer.classList.remove("clicked")
})

forms.addEventListener("mousedown", (event) => {
    let pointer = event.target
    if (pointer.tagName === "BUTTON" || pointer.tagName === "A") {
        pointer.classList.add("clicked")
        clickUp(pointer)

    } else if (pointer.tagName === "I") {
        pointer.parentElement.classList.add("clicked")
        clickUp(pointer.parentElement)
    }
})

/* slider effect */

const showSignin = () => {
    circle.classList.add("slider-circle")
    signin.classList.add("slider-signin")
    login.classList.add("slider-login")
    
    setTimeout(()=> {
        forms.children[0].classList.add("hide")
        forms.children[1].classList.add("show")
    }, 900)
}

const showLogin = () => {
    circle.classList.remove("slider-circle")
    signin.classList.remove("slider-signin")
    login.classList.remove("slider-login")
    
    setTimeout(()=> {
        forms.children[0].classList.remove("hide")
        forms.children[1].classList.remove("show")
    }, 900)
}


signinbtn.addEventListener("click", showSignin)

loginbtn.addEventListener("click", showLogin)


/* request from other page*/

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash == "#tosignin") showSignin()
})
            