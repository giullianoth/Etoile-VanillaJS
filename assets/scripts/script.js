const header = document.querySelector(".j_header")

const menuNavigationContext = document.querySelector(".j_menu_navigation_context")
const menuOverlay = document.querySelector(".j_menu_overlay")
const menuIcon = document.querySelector(".j_menu_icon")
const hamburgerIcon = "<i class=\"ph ph-list\"></i>"
const closeIcon = "<i class=\"ph ph-x\"></i>"

const scrollUpButton = document.querySelector(".j_scroll_up")

// FIXED HEADER
const setFixedHeader = () => window.scrollY > 100
    ? header.classList.add("scrolling")
    : header.classList.remove("scrolling")

setFixedHeader()

// MOBILE MENU
menuIcon?.addEventListener("click", () => {
    menuNavigationContext.classList.toggle("open-menu")
    menuIcon.innerHTML = menuNavigationContext.classList.contains("open-menu") ? closeIcon : hamburgerIcon
})

menuOverlay.addEventListener("click", event => {
    if (event.target.classList.contains("j_menu_overlay")) {
        menuNavigationContext.classList.remove("open-menu")
        menuIcon.innerHTML = hamburgerIcon
    }
})

// SCROLL UP
const showScrollUpButton = () => window.scrollY > 100
    ? scrollUpButton.classList.add("visible")
    : scrollUpButton.classList.remove("visible")

showScrollUpButton()

scrollUpButton.addEventListener("click", () => window.scrollTo(0, 0))

window.addEventListener("scroll", () => {
    setFixedHeader()
    showScrollUpButton()
})