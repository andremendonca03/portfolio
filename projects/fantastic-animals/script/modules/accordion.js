export default function initAccordion() {
   const accordionList = Array.from(document.querySelectorAll('[data-anime="accordion"] dt'));
   if (accordionList.length) {
      const accordionFirstItem = document.querySelectorAll('.js-accordion dt:first-of-type, .js-accordion dd:first-of-type');
      accordionFirstItem.forEach((item) => {
         item.classList.add('ativo');
      });

      accordionList.forEach((item) => {
         item.addEventListener('click', callbackAccordion);
      });

      function callbackAccordion() {
         this.classList.toggle('ativo');
         this.nextElementSibling.classList.toggle('ativo');
      }
   }
}