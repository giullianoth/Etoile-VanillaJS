import { mobileMenu, scrollUp, setFixedHeader, showScrollUpButton } from "./header.js"

setFixedHeader()
mobileMenu()
showScrollUpButton()
scrollUp()

window.addEventListener("scroll", () => {
    setFixedHeader()
    showScrollUpButton()
})