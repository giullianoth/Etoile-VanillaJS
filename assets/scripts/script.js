import Carousel from "./carousel.js"
import Copyright from "./copyright.js"
import { MobileMenu, ScrollUp, SetFixedHeader, ShowScrollUpButton } from "./header.js"
import Modal from "./modal.js"
import ProfileForm from "./profile/form-edit.js"

// Header
SetFixedHeader()
MobileMenu()
ShowScrollUpButton()
ScrollUp()

// Carousel
Carousel()

// Modal
Modal()

// Copyright
Copyright()

// Profile Form Features
ProfileForm()

window.addEventListener("scroll", () => {
    SetFixedHeader()
    ShowScrollUpButton()
})

window.addEventListener("resize", () => {
    Carousel()
})