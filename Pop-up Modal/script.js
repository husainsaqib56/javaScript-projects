'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const addModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', closeModal);
  btnCloseModal.addEventListener('click', addModal);
  overlay.addEventListener('click', addModal);
}
