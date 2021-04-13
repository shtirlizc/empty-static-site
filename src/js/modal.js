const [body] = document.getElementsByTagName("body");

export const Modal = {
  init() {
    // open modal
    const openModalButtons = document.getElementsByClassName("js-open-modal");
    Array.from(openModalButtons).forEach((button) => {
      button.addEventListener("click", (evt) => {
        const targetModalName = evt.currentTarget.dataset.target;
        Modal.findModal(targetModalName);
      });
    });

    // close modal
    const modalBackgrounds = document.getElementsByClassName("_modal__bg");
    Array.from(modalBackgrounds).forEach((modal) => {
      modal.addEventListener("click", (evt) => {
        Modal.close(evt.currentTarget.parentElement);
      });
    });

    // close all modals
    const closeAllModals = document.getElementById("close-all-modals");
    if (closeAllModals) {
      closeAllModals.addEventListener("click", Modal.closeAll);
    }
  },

  findModal(targetModalName) {
    const allModals = document.getElementsByClassName("js-modal");

    Array.from(allModals).forEach((currentModal) => {
      if (currentModal.dataset.modal === targetModalName) {
        Modal.open(currentModal);
      }
    });
  },

  open(currentModal) {
    currentModal.style.display = "flex";
    setTimeout(() => {
      currentModal.classList.add("open");
    }, 100);
    body.classList.add("modal");
  },

  close(currentModal) {
    currentModal.classList.remove("open");
    body.classList.remove("modal");
    setTimeout(() => {
      currentModal.style.display = "none";
    }, 500);
  },

  closeAll() {
    const allModals = document.getElementsByClassName("js-modal");
    Array.from(allModals).forEach((modal) => {
      modal.classList.remove("open");
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    });
    body.classList.remove("modal");
  },

  onSubmit() {
    const inputs = document.getElementsByClassName("_input");
    Array.from(inputs).forEach((input) => {
      const [inputTag] = input.getElementsByTagName("input");
      const [textareaTag] = input.getElementsByTagName("textarea");
      const currentTag = inputTag || textareaTag;
      currentTag.classList.remove("valid");
    });

    Modal.findModal("modal-success");
  },
};
