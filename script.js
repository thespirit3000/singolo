let state = {
    slideIndex: 1,
}

const handleClick = event => {
    if (event.target.classList.contains("header-nav_item")) {
        let activeItem = document.querySelector(".activeItem");
        activeItem.classList.remove("activeItem");
        event.target.classList.add("activeItem");
    };
    if (event.target.classList.contains("prev")) {
        plusSlides(-1);
    };
    if (event.target.classList.contains("next")) {
        plusSlides(1);
    };
    if (event.target.classList.contains("vertical_phone")) {
        changeDisplay('.screen_vertical');
    };
    if (event.target.classList.contains("horizontal_phone")) {
        changeDisplay('.screen_horizontal');
    };
    if (event.target.classList.contains("portfolio_selector__item")) {
        shuffleDom(".portfolio_block");
        let activeItem = document.querySelector(".selected");
        activeItem.classList.remove("selected");
        event.target.classList.add("selected");
    };

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

const changeDisplay = (selector) => {
    let screen = document.querySelector(selector);
    if (screen.style.opacity == '1') {
        screen.style.opacity = '0';
    } else {
        screen.style.opacity = '1';
    };
}

const domArray = (domSelector) => {
    return document.querySelectorAll(domSelector)
};

const shuffleDom = (parentSelector) => {
    let list = document.querySelector(parentSelector);
        for (i = list.children.length; i >= 0; i--) {
            list.appendChild(list.children[Math.random() * i | 0]);
        }
}

const initialize = () => {
    handleBody();
    let slideIndex = 1;
    showSlides(slideIndex);
};

document.addEventListener("DOMContentLoaded", initialize())
// window.onload = initialize;
window.onscroll = scrollHandle;