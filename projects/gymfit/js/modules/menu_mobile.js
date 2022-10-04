export default function menuMobile() {
   const menuBtn = document.querySelector('[data-menu-mobile="btn"]');
   const menu = document.querySelector('[data-menu-mobile="menu"]');

   if (menuBtn) {
      function checkClickOutside(event) {
         const path = event.composedPath().map(item => {
            if (item === menu) {
               return true;
            } else {
               return false;
            }
         });
         if (!path.includes(true)) {
            menu.classList.remove(`active`);
         }
      }
   
      function isActive() {
         if (menu.classList.contains(`active`)) {
            window.addEventListener(`click`, checkClickOutside);
         } else {
            window.removeEventListener(`click`, checkClickOutside)
         }
      }

      function toggleMenu(event) {
         event.preventDefault();
         event.stopPropagation();
         menu.classList.toggle('active');

         isActive();
      }

      menuBtn.addEventListener('click', toggleMenu);
   }
}