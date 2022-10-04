export default function initScroll() {
   const linksInternos = Array.from(document.querySelectorAll('[data-scroll="smooth"] a[href^="#"]'));

   if (linksInternos.length) {
      function scrollToSection(event) {
         event.preventDefault();
         const href = this.getAttribute('href');
         const section = document.querySelector(href);
         
         //método Element.scrollIntoView()
         section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
         });
         
         //método window.scrollTo()   
         /*
         const topo = section.getBoundingClientRect().top;
         window.scrollTo({
            top: topo,
            left: 0,
            behavior: 'smooth',
         });
         */
      }

      linksInternos.forEach((item) => {
         item.addEventListener('click', scrollToSection);
      });
   }
}