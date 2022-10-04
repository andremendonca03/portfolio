export default function initModal() {
   const openModalBtn = document.querySelector('[data-modal="abrir"]');
   const closeModalBtn = document.querySelector('[data-modal="fechar"]');
   const containerModal = document.querySelector('[data-modal="container"]');

   if (openModalBtn && closeModalBtn && containerModal) {
      function toggleModal(event) {
         event.preventDefault();
         containerModal.classList.toggle('ativo');
      }
      function outsideCloseModal(event) {
         if (event.target === event.currentTarget) {
            toggleModal(event);
         }
      }
      
      openModalBtn.addEventListener('click', toggleModal);
      closeModalBtn.addEventListener('click', toggleModal);
      containerModal.addEventListener('click', outsideCloseModal);
   }
}