export default class Modal {
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