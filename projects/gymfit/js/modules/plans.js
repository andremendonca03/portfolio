export default function plans() {
   const plansBtns = document.querySelectorAll('[data-plans="btns"] > div');
   const plansCards = document.querySelectorAll('[data-plans="subscriptions"], [data-plans="gymfitplus"]')

   function activeItem(event, item) {
      event.preventDefault();

      const itemCards = document.querySelectorAll(`[data-plans="${item.dataset.plans}"]`)[1];

      plansCards.forEach(i => i.classList.remove('active'));
      itemCards.classList.add('active');

      plansBtns.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
   }

   plansCards[2].classList.add('active');
   plansBtns[0].classList.add('active');
   plansBtns.forEach(item => {
      item.addEventListener(`click`, (event) => {
         activeItem(event, item);
      });
   });
}