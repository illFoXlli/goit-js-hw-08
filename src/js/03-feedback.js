import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector("[name='email']"),
  message: document.querySelector("[name='message']"),
};

const FEEDBACK_FORM_STATE = 'feedback-form-state';
let obj = {};
let obj2 = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  obj = {
    email: refs.inputEmail.value,
    message: refs.message.value,
  };
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(obj));
}

function onFormSubmit(event) {
    event.preventDefault();
    obj = obj2;
  if (refs.inputEmail.value.trim() !== '' && refs.message.value.trim() !== '') {
      console.log(obj);
      
    localStorage.removeItem(FEEDBACK_FORM_STATE);
    event.target.reset();
  }
}

function reset() {
  if (JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE))) {
    obj2 = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));

    refs.inputEmail.value = obj2.email;
    refs.message.value = obj2.message;
  }
}

reset();
