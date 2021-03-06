function createMenu() {
  const menu = document.createElement('aside');
  menu.classList.add('mobile_menu');
  menu.insertAdjacentHTML(`afterbegin`, `
    <div class="mobile_overlay">
      <div class="mobile_menu__window">
        <div class="mobile_menu__header">
          <div class="close">
            &times
          </div>
          <h1 class="header-logo">SINGOLO<span class="active">*</span></h1>
        </div>
        <nav class="mobile_menu__navigation">
          <a href="#home" class="menu_item menu_item__active">Home</a>
          <a href="#services" class="menu_item">Services</a>
          <a href="#portfolio" class="menu_item">Portfolio</a>
          <a href="#about" class="menu_item">About</a>
          <a href="#contact" class="menu_item">Contact</a>
        </nav>
      </div>
    </div>
    `)
  document.body.appendChild(menu);
  return menu;
}

export default class MobileMenu {
  constructor() {
    this.menu = createMenu();
  }
  open() {
    document.body.style.overflowY = 'hidden';
    this.menu.classList.add('open');
    return
  }
  close() {
    document.body.style.overflowY = 'scroll';
    this.menu.classList.remove('open');
    return
  }
  destroy() {
    document.body.removeChild(this.menu);
    return
  }
}