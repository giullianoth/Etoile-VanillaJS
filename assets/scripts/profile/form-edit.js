import { slideDown, slideUp } from "../effects.js"

const trigger = document.querySelector(".j_profile_form_clickable input")
const collapseWrapper = document.querySelector(".j_profile_form_collapse")
const wrapperIsVisible = () => window.getComputedStyle(collapseWrapper).display !== "none"

const ProfileForm = () => {
    if (trigger && collapseWrapper) {
        trigger.addEventListener("input", () => {
            if (wrapperIsVisible() && !trigger.checked) {
                slideUp(collapseWrapper)
            } else {
                slideDown(collapseWrapper, "flex")
            }
        })
    }
}

export default ProfileForm