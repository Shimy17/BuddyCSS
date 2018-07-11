document.addEventListener('DOMContentLoaded', function() {

  /********** Modals **********/
  if(document.getElementById('pageModals')) {
    const pageModals          = document.getElementById('pageModals'),
    boxModal            = pageModals.getElementsByClassName('box-modal'),
    triggerOpenModal    = document.getElementsByClassName('triggerOpenModal'),
    triggerCloseModal   = document.getElementsByClassName('triggerCloseModal'),
    body                = document.getElementsByTagName('body')[0],
    pageModalsOverlayer = document.getElementById('pageModalsOverlayer');

    const openModal = event => {
      const dataModal = event.currentTarget.getAttribute('data-modal');
      pageModals.classList.add('show');
      pageModals.removeAttribute('aria-hidden');
      body.classList.add('modal-open');

      for (let i=0, x=boxModal.length; i < x; i++) {
        if(boxModal[i].getAttribute('data-modal') == dataModal) {
          boxModal[i].classList.add('show');
        }
      }
    };

    const closeModal = () => {
      pageModals.classList.remove('show');
      body.classList.remove('modal-open');
      pageModals.setAttribute('aria-hidden', true);
      for (let i=0, x=boxModal.length; i < x; i++) {
        boxModal[i].classList.remove('show');
      }
    };

    for(let i=0, x=triggerOpenModal.length; i < x; i++) {
      triggerOpenModal[i].addEventListener('click', openModal);
    }

    for(let i=0, x=triggerCloseModal.length; i < x; i++) {
      triggerCloseModal[i].addEventListener('click', closeModal);
    }

    document.onkeydown = event => {
      if(pageModals.classList.contains('show')) {
        event = event || window.event;
        if (event.keyCode == 27) closeModal();
      }
    };

    pageModalsOverlayer.addEventListener('click', closeModal);
  }
  /********** Modals **********/



  /********** Inputs underline animation **********/
  let inputs = document.querySelectorAll('.input-animation input, .input-animation textarea');

  const focusInAnimation = event => {
    event.currentTarget.parentNode.classList.add('active');
  };

  const focusOutAnimation = event => {
    if(event.currentTarget.value == "")
    event.currentTarget.parentNode.classList.remove('active');
  };

  for (let i=0, x=inputs.length; i<x; i++) {
    inputs[i].addEventListener('focusin', focusInAnimation);
    inputs[i].addEventListener('change', focusInAnimation);
    inputs[i].addEventListener('keyup', focusInAnimation);
    inputs[i].addEventListener('blur', focusInAnimation);
    inputs[i].addEventListener('input', focusInAnimation);
    inputs[i].addEventListener('focusout', focusOutAnimation);
  }
  /********** Inputs underline animation **********/



  /********** CUSTOM CHECKBOX **********/
  let customCheckbox = document.querySelectorAll('.custom-input-checkbox');

  const toggleActiveClass = event => {
    event.currentTarget.classList.toggle('active');
  };

  for (let i=0, x=customCheckbox.length; i<x; i++) {
    customCheckbox[i].addEventListener('change', toggleActiveClass);

    if(customCheckbox[i].childNodes[0].checked == true) {
      customCheckbox[i].classList.add('active');
    }
  }
  /********** CUSTOM CHECKBOX **********/



  /********** CUSTOM RADIO **********/
  let customRadio = document.querySelectorAll('.custom-input-radio');

  const addActiveClass = event => {
    event.currentTarget.classList.toggle('active');
  };

  for (let i=0, x=customRadio.length; i<x; i++) {
    customRadio[i].addEventListener('change', addActiveClass);

    if(customRadio[i].childNodes[0].checked == true) {
      customRadio[i].classList.add('active');
    }
  }
  /********** CUSTOM RADIO **********/


  /********** checkbox outline when tab but not click **********/
  const checkbox = document.querySelectorAll('.input-checkbox input'),
        radio = document.querySelectorAll('.input-radio input'),
        customCheckboxInputs = document.querySelectorAll('.custom-input-checkbox input'),
        customRadioInputs = document.querySelectorAll('.custom-input-radio input');

  const addFocusClass = event => {
    event.currentTarget.parentNode.classList.add('focus');
  };

  const removeFocusClass = event => {
    event.currentTarget.parentNode.classList.remove('focus');
  };

  for (let i=0, x=checkbox.length; i<x; i++) {
    checkbox[i].addEventListener('focusin', addFocusClass);
    checkbox[i].addEventListener('focusout', removeFocusClass);
    checkbox[i].addEventListener('click', removeFocusClass);
  }

  for (let i=0, x=radio.length; i<x; i++) {
    radio[i].addEventListener('focusin', addFocusClass);
    radio[i].addEventListener('focusout', removeFocusClass);
    radio[i].addEventListener('click', removeFocusClass);
  }

  for (let i=0, x=customCheckboxInputs.length; i<x; i++) {
    customCheckboxInputs[i].addEventListener('focusin', addFocusClass);
    customCheckboxInputs[i].addEventListener('focusout', removeFocusClass);
    customCheckboxInputs[i].addEventListener('click', removeFocusClass);
  }

  for (let i=0, x=customRadioInputs.length; i<x; i++) {
    customRadioInputs[i].addEventListener('focusin', addFocusClass);
    customRadioInputs[i].addEventListener('focusout', removeFocusClass);
    customRadioInputs[i].addEventListener('click', removeFocusClass);
  }
  /********** checkbox outline when tab but not click **********/





}, false);
