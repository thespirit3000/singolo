import MobileMenu from './modules/MobileMenu.js';

class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalBtnOk = '';
    this.overlay = '';
  }

  buildModal(content) {
    this.overlay = this.createDomNode(this.overlay, 'div', 'overlay');
    this.modal = this.createDomNode(this.modal, 'div', 'modal');
    this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal_content');
    this.modalBtnOk = this.createDomNode(this.modalBtnOk, 'button', 'btn', 'modal_ok');
    this.modalBtnOk.innerHTML = 'OK';
    this.setContent(content);
    this.constructModal();


    this.openModal();
    this.bindHandlers();
  }


  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }
  setContent(content) {
    if (typeof content == 'string') {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.appendChild(content);
    }
  }

  constructModal() {
    this.modal.appendChild(this.modalContent);
    this.modal.appendChild(this.modalBtnOk);
    this.overlay.appendChild(this.modal);
  }
  openModal() {
    document.body.append(this.overlay);
  }

  bindHandlers() {
    this.overlay.addEventListener('click', this.closeModal);
  }

  closeModal() {
    if (event.target.classList.contains('overlay')) {
      document.querySelector('.overlay').remove();
    }
    if (event.target.classList.contains('modal_close')) {
      document.querySelector('.overlay').remove();
    }
    if (event.target.classList.contains('modal_ok')) {
      document.querySelector('.overlay').remove();
    }
  }
}

let state = {
  maxSigns: 240,
};

const generateContactModal = () => {
  let data = getFormData("quote", "subject", "description");
  const template = `<h3>The letter was sent</h3>${data}`;
  renderModalWindow(template);
};

const renderModalWindow = content => {
  let modal = new Modal("contact");
  modal.buildModal(content);
};

const handleBody = () => {
  const body = document.querySelector("body");
  body.addEventListener("click", handleClick);
};

const handleForm = () => {
  const form = document.querySelector(".form");
  form.addEventListener("submit", handleSubmit);
};

const handleSubmit = () => {
  event.preventDefault();
  generateContactModal();
};

const getFormData = (formName, ...formData) => {
  let template = "";
  formData.forEach(element => {
    let value = document.forms[formName][element].value;
    if (value == "") {
      template += `<div>Without ${element}</div>`;
    } else {
      template += `<div><h4 class="modal_string-name">${element}: </h4>${value}</div>`;
    }
  });
  return template;
};

const headerShrink = () => {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    document.querySelector(".header-inner").style.height = "50px";
  } else {
    document.querySelector(".header-inner").style.height = "95px";
  }
}

const headerChangeActive = () => {
  let anchorList = domArray('.anchor');  
  anchorList.forEach(element => {
    if (element.getBoundingClientRect().top < 300) {
      let activeItem = document.querySelector(`#link_${element.id}`);
      changeActive('activeItem', '.header-nav_item', activeItem);
    }
  })
}

let slides = document.querySelectorAll('.mySlides');
let currentSlide = 0;
let isEnabled = true;

const changeCurrentSlider = (n) => {
  currentSlide = (n + slides.length) % slides.length;
}

const hideSlider = (direction) => {
  isEnabled =false;
  slides[currentSlide].classList.add(direction);
  slides[currentSlide].addEventListener('animationend', function(){
    this.classList.remove('active_slide', direction);
    
  })
}

const showSlider = (direction) => {
  slides[currentSlide].classList.add('next_slide', direction);
  slides[currentSlide].addEventListener('animationend', function(){
    this.classList.remove('next_slide', direction);
    this.classList.add('active_slide');
    isEnabled =true;
  })
}

const previousSlider = (n) => {
  hideSlider('to-right');
  changeCurrentSlider(n - 1);
  showSlider('from-left');
}

const nextSlider = (n) => {
  hideSlider('to-left');
  changeCurrentSlider(n + 1);
  showSlider('from-right');
}


const changeDisplay = selector => {
  let screen = document.querySelector(selector);
  if (screen.style.opacity == "1") {
    screen.style.opacity = "0";
  } else {
    screen.style.opacity = "1";
  }
};

const changeActive = (activeClassSelector, domSelector, eventTarget) => {
  let domItems = domArray(domSelector);
  for (let i = 0; i < domItems.length; i++) {
    domItems[i].className = domItems[i].className.replace(
      ` ${activeClassSelector}`,
      ""
    );
  }
  eventTarget.classList.add(activeClassSelector);
};

const domArray = domSelector => {
  return document.querySelectorAll(domSelector);
};

const shuffleDom = parentSelector => {
  let list = document.querySelector(parentSelector);
  for (let i = list.children.length; i >= 0; i--) {
    list.appendChild(list.children[(Math.random() * i) | 0]);
  }
};

const setMaxSigns = (elementSelector, maxSigns) => {
  const element = document.querySelector(elementSelector);
  element.setAttribute('maxlength', `${maxSigns}`);
}

const setMaxSignsTextArea = () => {
  setMaxSigns('.quote_textarea', state.maxSigns);
}

// -------------------------------------------------------------------------------

const scrollHandle = () => {
  headerShrink();
};

const addShrinkMenuOnMediaQuery = (x) => {
    if (x.matches) { // If media query matches
      window.onscroll = scrollHandle;
    }
}



// переписать функции открытия и закрытия меню 
// const menu = (options) => {
//   let mobileMenu = createMenu(options);
//   return {
//       open() {
//         mobileMenu = document.querySelector('.mobile_menu');
//         menu.classList.add('open')
//       },
//       close() {
//           mobileMenu = document.querySelector('.mobile_menu');
//           mobileMenu.classList.remove('open')
//       },
//       destroy() {
//         mobileMenu = document.querySelector('.mobile_menu');
//         document.body.removeChild(mobileMenu);
//       }
//   }
// }

const mobileMenu = new MobileMenu();

const handleClick = event => {
  if (event.target.classList.contains("header-nav_item")) {
    changeActive("activeItem", ".header-nav_item", event.target);
  }

  if (event.target.classList.contains("prev")) {
    if (isEnabled) {
      previousSlider(currentSlide)
    }
  }

  if (event.target.classList.contains("next")) {
    if (isEnabled) {
      nextSlider(currentSlide)
    }
  }

  if (event.target.classList.contains("vertical_phone")) {
    changeDisplay(".screen_vertical");
  }

  if (event.target.classList.contains("horizontal_phone")) {
    changeDisplay(".screen_horizontal");
  }

  if (event.target.classList.contains("portfolio_selector__item")) {
    shuffleDom(".portfolio_block");
    changeActive("selected", ".portfolio_selector__item", event.target);
  }

  if (event.target.classList.contains("portfolio_block__item")) {
    changeActive("active_portfolio", ".portfolio_block__item", event.target);
  }

  if (event.target.classList.contains("open")) {
    mobileMenu.open();
  }
  if (event.target.classList.contains("close")) {
    mobileMenu.close();
    mobileMenu.destroy();
  }
};

const initialize = () => {
  handleBody();
  handleForm();
  setMaxSignsTextArea();
};

window.onload = initialize;
//window.onscroll = scrollHandle;
window.onwheel = headerChangeActive;
let x = window.matchMedia("(min-width: 767px)")
addShrinkMenuOnMediaQuery(x) // Call listener function at run time
x.addListener(addShrinkMenuOnMediaQuery)  