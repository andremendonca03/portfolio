export default function initMobileMenu() {
   const menuBtn = document.querySelector('[data-menu="button"]');
   const menuList = document.querySelector('[data-menu="list"]');
   const html = document.documentElement;

   if (menuBtn && menuList) {
      function openMenu(event) {
         event.stopPropagation();
         menuList.classList.toggle('ativo');
         html.addEventListener('click', clickOutside);
      }
      function clickOutside(event) {
         if (event.target !== menuBtn && event.target !== menuList) {
            menuList.classList.remove('ativo');
            html.removeEventListener('click', clickOutside);
         }
      }

      menuBtn.addEventListener('click', openMenu);
   }
}