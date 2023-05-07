
import clas  from '../modules/class';
import form   from'../modules/form';
import loader  from '../modules/loader';
import modal, { openModal }   from'../modules/modal';
import slider  from '../modules/slider';
import tab   from '../modules/tab';
import timer   from'../modules/timer';


window.addEventListener('DOMContentLoaded', () => {

  const modalTimerId = setTimeout(() => { openModal('.modal',modalTimerId)},5000);

  clas();
  form();
  loader();
  modal('[data-modal]','.modal',modalTimerId);
  slider();
  tab();
  timer();

  

})
