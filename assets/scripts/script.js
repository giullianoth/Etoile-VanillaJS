import Carousel from "./carousel.js"
import { MobileMenu, ScrollUp, SetFixedHeader, ShowScrollUpButton } from "./header.js"

// Header
SetFixedHeader()
MobileMenu()
ShowScrollUpButton()
ScrollUp()

// Carousel
Carousel()

window.addEventListener("scroll", () => {
    SetFixedHeader()
    ShowScrollUpButton()
})

window.addEventListener("resize", () => {
    Carousel()
})