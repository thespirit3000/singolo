const handleClick = event => {
    if (event.target.classList.contains("header-nav_item")) {
        console.log(true);
        let activeItem = document.querySelector(".activeItem");
        activeItem.classList.remove("activeItem");
        event.target.classList.add("activeItem");
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

const initialize = () => {
    handleBody();
};
window.onload = initialize;