export default function initAnimateScroll() {
   const sections = Array.from(document.querySelectorAll('[data-anime="scroll"]'));
   if (sections.length) {
      const windowAnimateHeight = window.innerHeight * 0.72;

      function callbackAnimateScroll() {
         sections.forEach((item) => {
            const sectionTop = item.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowAnimateHeight) < 0;
            if (isSectionVisible && !item.classList.contains('ativo')) {
               item.classList.add('ativo');
            }
         });
      }

      callbackAnimateScroll();
      window.addEventListener('scroll', callbackAnimateScroll);
   }
}