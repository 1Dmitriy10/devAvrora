export function circleSlider() {
    let btn = document.querySelectorAll(".slider__btn");
    let slides = document.querySelectorAll(".slider__item");
    let wrap = document.querySelector(".slider__wrap");
    let countWrap = 0;
    let countItem = 0;
    let countSlide = 3;

    slides[countSlide].classList.add("active");

    btn.forEach(el => {
        el.addEventListener("click", function (ev) {
            let name = ev.target.id
            if (name == "slider__next") {
                moveNext()
            } else {
                movePrev()
            }
        })
    });

    function moveNext() {
        countWrap += 90;
        countItem -= 90;
        if (countSlide == 0) {
            countSlide = 3;
        } else {
            countSlide -= 1;
        }
        slides.forEach(el => {
            el.style.cssText = `
            transition: 0.5s;
            transform: rotate(${countItem}deg);
            `
        })
        wrap.style.cssText = `
        transition: 0.5s;
        transform: rotate(${countWrap}deg);
        `
        slides.forEach(el => {
            el.classList.remove("active");
        })
        slides[countSlide].classList.add("active");
    }

    function movePrev() {
        countItem += 90;
        countWrap -= 90;
        if (countSlide == 3) {
            countSlide = 0;
        } else {
            countSlide += 1;
        }
        slides.forEach(el => {
            el.style.cssText = `
            transition: 0.5s;
            transform: rotate(${countItem}deg);
            `
        })
        wrap.style.cssText = `
        transition: 0.5s;
        transform: rotate(${countWrap}deg);
        `
        slides.forEach(el => {
            el.classList.remove("active");
        })
        slides[countSlide].classList.add("active");
    }
}
circleSlider()