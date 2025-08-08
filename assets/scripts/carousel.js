const carousels = document.querySelectorAll(".j_carousel")
const carouselWrapper = carousel => carousel.querySelector(".j_carousel_wrapper")
const carouselWrapperDimension = wrapper => wrapper.offsetWidth
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
        let itemsQt
        let itemDimension
        let clearance

        if (window.innerWidth <= 576) {
            itemsQt = 1
        } else if (window.innerWidth > 576 && window.innerWidth <= 992) {
            itemsQt = 2
        } else if (window.innerWidth > 992) {
            itemsQt = parseInt(carousel.dataset.itemsqt)
        }

        carousel.append(buttonPrev, buttonNext)
        carouselWrapper(carousel).style.gap = `${gap}px`

        Array.from(carouselItems(carousel)).forEach(item => {
            clearance = 40 / itemsQt
            const adjustedWidth = `calc(${100 / itemsQt}% - ${gap}px + (${gap}px / ${itemsQt}) - ${clearance}px)`
            item.style.flexBasis = adjustedWidth
            item.style.minWidth = adjustedWidth
            itemDimension = carouselItemDimension(item, gap)
        })

        Array.from(carouselButtons(carousel)).forEach(button => {
            button.addEventListener("click", () => {
                console.log(itemDimension, carouselWrapperDimension(carouselWrapper(carousel)));
                
            })
        })
    })
}

export default Carousel