import Carousel from "./carousel.js"
import { MobileMenu, ScrollUp, SetFixedHeader, ShowScrollUpButton } from "./header.js"
import Modal from "./modal.js"

// Header
SetFixedHeader()
MobileMenu()
ShowScrollUpButton()
ScrollUp()

// Carousel
Carousel()

// Modal
Modal()

window.addEventListener("scroll", () => {
    SetFixedHeader()
    ShowScrollUpButton()
})

window.addEventListener("resize", () => {
    Carousel()
})