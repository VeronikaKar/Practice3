import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from "./localStorage-API.js";

import { updateDisplay } from "./updateDisplay.js";
import { LS_KEY } from "./LS_KEY.js";
import refs from "./refs.js";

refs.form.addEventListener("submit", onSubmit);
document.addEventListener("DOMContentLoaded", renderPage);
refs.clearBtn.addEventListener("click", clearStorage);

function onSubmit(event) {
  event.preventDefault();
  const { userName, userAge } = event.currentTarget.elements;

  if (!userName.value.trim() && !userAge.value.trim()) return;

  const userData = {
    name: userName.value.trim(),
    age: userAge.value.trim(),
  };

  const data = userName.value.trim() || userAge.value.trim();

  userName.value.trim() && userAge.value.trim()
    ? addDataToLocalStorage(LS_KEY, userData)
    : addDataToLocalStorage(LS_KEY, data);
  event.currentTarget.reset();

  renderPage();
}

function renderPage() {
  const lsData = getDataFromLocalStorage(LS_KEY);

  if (!lsData) {
    return updateDisplay("Local storage is empty!");
  }

  typeof lsData === "object"
    ? updateDisplay(`{name: ${lsData.name}, age: ${lsData.age}}`)
    : updateDisplay(lsData);
}

function clearStorage() {
  removeDataFromLocalStorage(LS_KEY);
  renderPage();
}


//   const form = document.querySelector('.feedback-form');
//  form.addEventListener('input', function (event) {
//    const { email, message } = event.currentTarget.elements;
//    saveFormData(email, message);
//   });


//   function saveFormData(a, b) {
//     const formData = {
//       email: a.value.trim(),
//       message: b.value.trim()
//     };

//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//   }

//   const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
//   if (savedFormData) {
//     form.elements.email.value = savedFormData.email;
//     form.elements.message.value = savedFormData.message;
//   }

 
//   form.addEventListener('submit', function (event) {
//     event.preventDefault();
//    const { email, message } = event.currentTarget.elements;
//     const formData = {
//       email: email.value.trim(),
//       message: message.value.trim()
//     };

//     if (!email.value.trim () || !message.value.trim ()) {
//       alert('"Local storage is empty!".');
//       return;
//     }

//  console.log('Submitted form data:', formData);

//     localStorage.removeItem('feedback-form-state');
//     event.currentTarget.reset();
//   });