const modals = () => {
  function defaultStylesModal(selectorModal, modalState, bodyState) {
    selectorModal.style.display = modalState;
    document.body.style.overflow = bodyState;
  }

  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');

    trigger.forEach((item) => {
      item.addEventListener('click', (event) => {
        if (event.target) {
          event.preventDefault();
        }

        windows.forEach((windowModal) => {
          windowModal.style.display = 'none';
        });

        defaultStylesModal(modal, 'block', 'hidden');
      });
    });

    close.addEventListener('click', () => {
      windows.forEach((item) => {
        item.style.display = 'none';
      });

      defaultStylesModal(modal, 'none', '');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((item) => {
          item.style.display = 'none';
        });

        defaultStylesModal(modal, 'none', '');
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      defaultStylesModal(document.querySelector(selector), 'block', 'hidden');
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  showModalByTime('.popup', 60000);
};

export default modals;
