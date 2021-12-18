import './modules/slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModal from './modules/changeModalState';
import timer from './modules/timer';

document.addEventListener('DOMContentLoaded', () => {
  'use sctict';

  const modalState = {};

  changeModal(modalState);
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img  > img', 'do_image_more', 'inline-block');
  forms(modalState);
  timer('2021-12-28', '.timer1 #days', '.timer1 #hours', '.timer1 #minutes', '.timer1 #seconds');
});
