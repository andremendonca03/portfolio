export default function submenu() {
   const locationsBtn = document.querySelector('[data-local="btn"]');

   function checkClickOutside(event) {
      const path = event.composedPath().map(item => {
         if (item === locationsBtn) {
            return true;
         } else {
            return false;
         }
      });
      if (!path.includes(true)) {
         locationsBtn.classList.remove(`active`);
      }
   }

   function isActive() {
      if (locationsBtn.classList.contains(`active`)) {
         window.addEventListener(`click`, checkClickOutside);
      } else {
         window.removeEventListener(`click`, checkClickOutside)
      }
   }

   locationsBtn.addEventListener(`click`, (event) => {
      event.preventDefault();
      event.stopPropagation();

      locationsBtn.classList.toggle(`active`);
      isActive();
   });
}