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
        const buttonPrev = navigationButtonElement("prev")
        const buttonNext = navigationButtonElement("next")
        const carouselLength = carouselItems(carousel).length
        let carouselOrder = 1
        let itemsQt
        let itemDimension
        let clearance
        let currentDirection
        let firstItem = true
        let lastItem = false

        carouselWrapper(carousel).style.transform = ""

        if (window.innerWidth <= 576) {
            itemsQt = 1
        } else if (window.innerWidth > 576 && window.innerWidth <= 992) {
            itemsQt = 2
        } else if (window.innerWidth > 992) {
            itemsQt = parseInt(carousel.dataset.itemsqt)
        }

        clearance = 40 /*/ itemsQt*/
        const adjustedWidth = `calc(${100 / itemsQt}% - ${gap}px + (${gap}px / ${itemsQt}) - ${clearance}px)`

        Array.from(carouselItems(carousel)).forEach(item => {
            item.style.flexBasis = adjustedWidth
            item.style.minWidth = adjustedWidth
            itemDimension = carouselItemDimension(item, gap)
        })

        buttonPrev.classList.add("not-visible")
        carousel.append(buttonPrev, buttonNext)
        carouselWrapper(carousel).style.gap = `${gap}px`

        Array.from(carouselButtons(carousel)).forEach((button, i, arr) => {
            button.addEventListener("click", () => {
                arr.forEach(item => item.classList.remove("not-visible"))

                if (button.classList.contains("next")) {
                    if (currentDirection === "prev") {
                        carouselOrder++
                    }

                    if (lastItem) {
                        button.classList.add("not-visible")
                    }

                    firstItem = false

                    let wrapperOffset = carouselOrder === carouselLength - itemsQt
                        ? (itemDimension * carouselOrder) - (clearance * length)
                        : itemDimension * carouselOrder

                    carouselWrapper(carousel).style.transform = `translateX(-${wrapperOffset}px)`

                    console.log(carouselOrder);
                    
                    if (carouselOrder < carouselLength - itemsQt) {
                        carouselOrder++
                        lastItem = true
                    }

                    currentDirection = "next"
                }

                if (button.classList.contains("prev")) {
                    if (currentDirection === "next") {
                        carouselOrder--
                    }

                    if (firstItem) {
                        button.classList.add("not-visible")
                    }

                    lastItem = false

                    let wrapperOffset = carouselOrder === 1
                        ? (itemDimension * carouselOrder) - (clearance * itemsQt)
                        : -(itemDimension * carouselOrder)

                    carouselWrapper(carousel).style.transform = `translateX(-${wrapperOffset}px)`

                    if (carouselOrder >= 1) {
                        carouselOrder--
                        firstItem = true
                    }

                    currentDirection = "prev"
                }
            })
        })
    })
}

export default Carousel