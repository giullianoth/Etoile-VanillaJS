const header = document.querySelector(".j_header")

const menuNavigationContext = document.querySelector(".j_menu_navigation_context")
const menuIcon = document.querySelector(".j_menu_icon")
const hamburgerIcon = "/assets/images/hamburger.svg"
const closeIcon = "/assets/images/close.svg"

const scrollUpButton = document.querySelector(".j_scroll_up")

// FIXED HEADER
const setFixedHeader = () => window.scrollY > 0
    ? header.classList.add("scrolling")
    : header.classList.remove("scrolling")

setFixedHeader()

// MOBILE MENU
menuIcon?.addEventListener("click", () => {
    menuNavigationContext.classList.toggle("open-menu")
    menuIcon.src = menuNavigationContext.classList.contains("open-menu") ? closeIcon : hamburgerIcon
})

// SCROLL UP
const showScrollUpButton = () => window.scrollY > 0
? scrollUpButton.classList.add("visible")
: scrollUpButton.classList.remove("visible")

showScrollUpButton()

scrollUpButton.addEventListener("click", () => window.scrollTo(0, 0))

window.addEventListener("scroll", () => {
    setFixedHeader()
    showScrollUpButton()
})