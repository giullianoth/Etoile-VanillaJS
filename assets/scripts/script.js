const header = document.querySelector(".j_header")

const menuNavigationContext = document.querySelector(".j_menu_navigation_context")
const menuIcon = document.querySelector(".j_menu_icon")
const hamburgerIcon = "/assets/images/hamburger.svg"
const closeIcon = "/assets/images/close.svg"

// FIXED HEADER
const setFixedHeader = () => window.scrollY > 0
    ? header.classList.add("scrolling")
    : header.classList.remove("scrolling")

setFixedHeader()

window.addEventListener("scroll", () => {
    setFixedHeader()
})

// MOBILE MENU
menuIcon.addEventListener("click", () => {
    menuNavigationContext.classList.toggle("open-menu")
    menuIcon.src = menuNavigationContext.classList.contains("open-menu") ? closeIcon : hamburgerIcon
})