const handleClick = event => {
    console.log(event.target);
    
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