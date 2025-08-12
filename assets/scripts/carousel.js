const carousels = document.querySelectorAll(".j_carousel")
const carouselWrapper = carousel => carousel.querySelector(".j_carousel_wrapper")
const carouselItems = carousel => carousel.querySelectorAll(".j_carousel_item")
const carouselItemDimension = (carouselItem, gap) => carouselItem.offsetWidth + gap
const carouselButtons = carousel => carousel.querySelectorAll(".j_navigation")

const navigationButtonElement = direction => {
    if (direction !== "prev" && direction !== "next") {
        return undefined
    }

    const element = document.createElement("button")
    element.className = `etl-button primary etl-carousel__navigation ${direction} j_navigation`
    element.innerHTML = `<i class="ph ph-caret-${direction === "prev" ? "left" : "right"}"></i>`

    return element
}

const Carousel = () => {
    Array.from(carousels).forEach(carousel => {
        const gap = parseInt(carousel.dataset.gap)
        const carouselLength = carouselItems(carousel).length
        let carouselOrder = 1
        let firstItem = true
        let lastItem = false
        let itemsQt
        let itemDimension
        let clearance
        let currentDirection

        carouselWrapper(carousel).style.transform = ""

        if (window.innerWidth <= 576) {
            itemsQt = 1
        } else if (window.innerWidth > 576 && window.innerWidth <= 992) {
            itemsQt = 2
        } else if (window.innerWidth > 992) {
            itemsQt = parseInt(carousel.dataset.itemsqt)
        }

        clearance = 40 / itemsQt
        const adjustedWidth = `calc(${100 / itemsQt}% - ${gap}px + (${gap}px / ${itemsQt}) - ${clearance}px)`

        Array.from(carouselItems(carousel)).forEach(item => {
            item.style.flexBasis = adjustedWidth
            item.style.minWidth = adjustedWidth
            itemDimension = carouselItemDimension(item, gap)
        })

        carouselWrapper(carousel).style.gap = `${gap}px`

        if (!carouselButtons(carousel) || !carouselButtons(carousel).length) {
            const buttonPrev = navigationButtonElement("prev")
            const buttonNext = navigationButtonElement("next")
            carousel.append(buttonPrev, buttonNext)
        }

        Array.from(carouselButtons(carousel)).forEach((button, i, arr) => {
            if (button.classList.contains("prev")) {
                button.classList.add("not-visible")
            }

            if (button.classList.contains("next")) {
                button.classList.remove("not-visible")
            }

            button.addEventListener("click", () => {
                arr.forEach(item => item.classList.remove("not-visible"))

                if (button.classList.contains("next")) {
                    if (currentDirection === "prev") {
                        carouselOrder++

                        if (!firstItem) {
                            carouselOrder++
                        }
                    }

                    firstItem = false

                    const wrapperOffset = carouselOrder === carouselLength - itemsQt
                        ? (itemDimension * carouselOrder) - clearance - gap - (gap / itemsQt)
                        : itemDimension * carouselOrder

                    carouselWrapper(carousel).style.transform = `translateX(-${wrapperOffset}px)`

                    if (carouselOrder < carouselLength - itemsQt) {
                        carouselOrder++
                    } else {
                        lastItem = true
                        button.classList.add("not-visible")
                    }

                    currentDirection = "next"
                }

                if (button.classList.contains("prev")) {
                    if (currentDirection === "next") {
                        carouselOrder--

                        if (!lastItem) {
                            carouselOrder--
                        }
                    }

                    lastItem = false

                    const wrapperOffset = carouselOrder < 1
                        ? itemDimension * carouselOrder
                        : (itemDimension * carouselOrder) - clearance - gap - (gap / itemsQt)

                    carouselWrapper(carousel).style.transform = `translateX(-${wrapperOffset}px)`

                    if (carouselOrder >= 1) {
                        carouselOrder--
                    } else {
                        firstItem = true
                        button.classList.add("not-visible")
                    }

                    currentDirection = "prev"
                }
            })
        })
    })
}

export default Carousel