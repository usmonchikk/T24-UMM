const elModal = document.querySelector('.modal');
const elModalClose = elModal.querySelector('.js-modal-close');

elModalClose.addEventListener('click', function (){
  elModal.classList.remove('modal-open');
});

setTimeout(function(){
elModal.classList.add('modal-open');
},4000);