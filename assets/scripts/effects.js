const transitionDuration = 300
const transitionGap = 10

const transitionProps = (property = "all", duration = `${transitionDuration / 1000}s`, timingFunction = "ease", delay = "0s") =>
    `${property} ${duration} ${timingFunction} ${delay}`

export function fadeIn(element, displayElement = "block") {
    element.style.transition = transitionProps()
    element.style.opacity = 0
    element.style.display = displayElement

    setTimeout(() => {
        element.style.opacity = ""

        setTimeout(() => {
            element.style.transition = ""
        }, transitionDuration - transitionGap)
    }, transitionGap)
}

export function fadeOut(element, removeElement = false) {
    element.style.transition = transitionProps()
    element.style.opacity = 0

    setTimeout(() => {
        element.style.display = "none"
        element.style.opacity = ""
        element.style.transition = ""
        removeElement && element.remove()
    }, transitionDuration)
}

export function slideDown(element, displayElement = "block") {
    element.style.transition = "unset"
    element.style.display = displayElement

    let maxHeight = element.offsetHeight

    element.style.overflow = "hidden"
    element.style.maxHeight = 0
    element.style.marginTop = 0
    element.style.marginBottom = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.borderTopWidth = 0
    element.style.borderBottomWidth = 0

    setTimeout(() => {
        element.style.transition = transitionProps()
        element.style.maxHeight = `${maxHeight}px`
        element.style.marginTop = ""
        element.style.marginBottom = ""
        element.style.paddingTop = ""
        element.style.paddingBottom = ""
        element.style.borderTopWidth = ""
        element.style.borderBottomWidth = ""

        setTimeout(() => {
            element.style.overflow = ""
            element.style.transition = ""
            element.style.maxHeight = ""
        }, transitionDuration - transitionGap)
    }, transitionGap)
}

export function slideUp(element, removeElement = false) {
    element.style.maxHeight = `${element.offsetHeight}px`

    setTimeout(() => {
        element.style.transition = transitionProps()
        element.style.overflow = "hidden"
        element.style.maxHeight = 0
        element.style.marginTop = 0
        element.style.marginBottom = 0
        element.style.paddingTop = 0
        element.style.paddingBottom = 0
        element.style.borderTopWidth = 0
        element.style.borderBottomWidth = 0

        setTimeout(() => {
            element.style.display = "none"
            element.style.maxHeight = ""
            element.style.marginTop = ""
            element.style.marginBottom = ""
            element.style.paddingTop = ""
            element.style.paddingBottom = ""
            element.style.borderTopWidth = ""
            element.style.borderBottomWidth = ""
            element.style.overflow = ""
            element.style.transition = ""
            removeElement && element.remove()
        }, transitionDuration - transitionGap)
    }, transitionGap)
}