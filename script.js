let state = {
    slideIndex: 1,
}

const handleClick = event => {
    if (event.target.classList.contains("header-nav_item")) {
        let activeItem = document.querySelector(".activeItem");
        activeItem.classList.remove("activeItem");
        event.target.classList.add("activeItem");
    }
    if (event.target.classList.contains("prev")) {
        plusSlides(-1);

    }
    if (event.target.classList.contains("next")) {
        plusSlides(1);
    }
    // if (event.target.classList)
    // if (e.target.id === "increaseButton") {
    //   currentCount.innerHTML++;
    // }
    // if (e.target.id === "decreaseButton") {
    //   currentCount.innerHTML--;
    // }
};

const handleBody = () => {
    const body = document.querySelector("body");
    body.addEventListener("click", handleClick);
};

const scrollHandle = () => {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.querySelector(".header-inner").style.height = "50px";
    } else {
        document.querySelector(".header-inner").style.height = "95px";
    }
}
const plusSlides = (n) => {
    showSlides(state.slideIndex += n);
}

const currentSlide = (n) => {
    showSlides(state.slideIndex = n);
}

const showSlides = (n) => {
    let i;
    let slides = document.querySelectorAll(".mySlides");    
    if (n > slides.length) {
        state.slideIndex = 1
    }
    if (n < 1) {
        state.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[state.slideIndex - 1].style.display = "block";
}
const initialize = () => {
    handleBody();
    let slideIndex = 1;
    showSlides(slideIndex);
};
window.onload = initialize;
window.onscroll = scrollHandle;