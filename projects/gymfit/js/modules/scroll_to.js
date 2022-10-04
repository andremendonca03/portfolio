export default function scrollTo() {
   const links = document.querySelectorAll(`[data-scroll-to="header-menu"] > a:not(:last-of-type)`);

   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
   });

   if (links) {
      function smoothScroll(event, elementTop) {
         event.preventDefault();

         window.scrollTo({
            top: elementTop - 20,
            left: 0,
            behavior: 'smooth',
         });
      }

      links.forEach(item => {
         const itemID = item.getAttribute(`href`);
         const section = document.querySelector(itemID);
         const sectionTop = section.getBoundingClientRect().top;

         item.addEventListener(`click`, (event) => {
            smoothScroll(event, sectionTop);
         });
      });

      //Locations Smooth Scroll
      const locationsMenu = document.querySelectorAll('[data-scroll-to="menu-locations"] a');
      const locationsArray = document.querySelectorAll(`strong[data-local]`);

      locationsMenu.forEach(item => {
         item.addEventListener(`click`, (event) => {
            const sectionTop = document.querySelector(`[data-local="locations"]`).getBoundingClientRect().top;

            smoothScroll(event, sectionTop);

            const place = item.dataset.local;
            const locationItem = document.querySelector(`strong[data-local="${place}"]`);

            locationsArray.forEach(loc => {
               loc.classList.remove(`active`);
            });
            locationItem.classList.add(`active`);
         });
      });
   }
}