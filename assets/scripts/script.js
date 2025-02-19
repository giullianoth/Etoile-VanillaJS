const menuNavigationContext = document.querySelector(".j_menu_navigation_context")
const menuIcon = document.querySelector(".j_menu_icon")
const hamburgerIcon = "/assets/images/hamburger.svg"
const closeIcon = "/assets/images/close.svg"

menuIcon.addEventListener("click", () => {
    menuNavigationContext.classList.toggle("open-menu")
    menuIcon.src = menuNavigationContext.classList.contains("open-menu") ? closeIcon : hamburgerIcon
})