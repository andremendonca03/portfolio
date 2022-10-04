export default function initTabNav() {
   const tabMenu = Array.from(document.querySelectorAll('[data-tab="menu"] li'));
   const tabContent = Array.from(document.querySelectorAll('[data-tab="content"] section'));

   if (tabContent.length && tabMenu.length) {
      tabContent[0].classList.add('ativo');

      function activeTab(index) {
         tabContent.forEach((item) => {
            item.classList.remove('ativo');
         });

         const direcao = tabContent[index].dataset.anime;
         tabContent[index].classList.add('ativo', direcao);
      }

      tabMenu.forEach((item, index) => {
         item.addEventListener('click', () => {
            activeTab(index);
         });
      });
   }
}