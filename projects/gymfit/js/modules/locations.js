export default function locations() {
   const locations = document.querySelectorAll('strong[data-local]');
   const texts = Array.from(document.querySelectorAll(`[data-locations^="text-"]`));
   const imgs = Array.from(document.querySelectorAll(`[data-locations^="img-"]`));

   locations[0].classList.add('active');
   texts[0].classList.add('active');
   imgs[0].classList.add('active');

   locations.forEach(item => {
      item.addEventListener(`click`, () => {
         locations.forEach(loc => {
            loc.classList.remove(`active`);
         });
         item.classList.add(`active`);
      });

      //Mutation Observer
      const itemObserver = new MutationObserver(activateItem);

      function activateItem() {
         if (item.classList.contains(`active`)) {
            const active = item.dataset.local;
            
            texts.forEach(t => {
               t.classList.remove('active');
            });
            imgs.forEach(i => {
               i.classList.remove('active');
            });

            const text = document.querySelector(`[data-locations="text-${active}"]`);
            const img = document.querySelector(`[data-locations="img-${active}"]`);

            text.classList.add('active');
            img.classList.add('active');
         }
      }

      itemObserver.observe(item, {
         attributes: true,
      });
   });
}