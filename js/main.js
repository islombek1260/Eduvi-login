let elBtn = $(".header-nav-btn")
let siteMenu = $(".header-nav__list--nav")

elBtn.addEventListener("click", ()=> {
    siteMenu.classList.toggle("active")
})

let elBtn1 = $(".select-btn1")
let elBtn2 = $(".select-btn2")
let elBtn3 = $(".select-btn3")
let elBtn4 = $(".select-btn4")

elBtn1.addEventListener("click", ()=> {
    elBtn1.classList.add("btn-select")
    elBtn2.classList.remove("btn-select")
    elBtn3.classList.remove("btn-select")
    elBtn4.classList.remove("btn-select")
})
elBtn2.addEventListener("click", ()=> {
    elBtn2.classList.add("btn-select")
    elBtn1.classList.remove("btn-select")
    elBtn3.classList.remove("btn-select")
    elBtn4.classList.remove("btn-select")
})
elBtn3.addEventListener("click", ()=> {
    elBtn3.classList.add("btn-select")
    elBtn2.classList.remove("btn-select")
    elBtn1.classList.remove("btn-select")
    elBtn4.classList.remove("btn-select")
})
elBtn4.addEventListener("click", ()=> {
    elBtn4.classList.add("btn-select")
    elBtn1.classList.remove("btn-select")
    elBtn2.classList.remove("btn-select")
    elBtn3.classList.remove("btn-select")
})