export default function initDropdownMenu() {
   const html = document.documentElement;
   const dropdownBtn = document.querySelector('[data-dropdown="btn"]');

   function handleClick(event) {
      event.stopPropagation();   
      event.preventDefault();
      this.classList.toggle('ativo');
   
      outsideClick.element = this;
      html.addEventListener('click', outsideClick);
   }
   const outsideClick = {
      handleEvent(event) {
         if (event.target !== this.element) {
            this.element.classList.remove('ativo');
            html.removeEventListener('click', outsideClick);
         }
      },
   };
   
   dropdownBtn.addEventListener('click', handleClick);
}