import { fadeIn, fadeOut } from "./effects.js"

const modalTriggers = document.querySelectorAll(".j_modal_clickable")
const modalTriggersClose = document.querySelectorAll(".j_modal_close")
const modalElements = document.querySelectorAll(".j_modal")

const Modal = () => {
    Array.from(modalTriggers).forEach(trigger => {
        trigger.addEventListener("click", () => {
            const target = trigger.dataset.target
            const modal = Array.from(modalElements).find(element => element.id === target)

            if (modal) {
                fadeIn(modal)
            }
        })
    })

    Array.from(modalElements).forEach(modal => {
        modal.addEventListener("click", event => {
            if (event.target.classList.contains("j_modal")) {
                fadeOut(modal)
            }
        })
    })

    Array.from(modalTriggersClose).forEach(trigger => {
        trigger.addEventListener("click", () => {
            const target = trigger.dataset.target
            const modal = Array.from(modalElements).find(element => element.id === target)

            if (modal) {
                fadeOut(modal)
            }
        })
    })
}

export default Modal