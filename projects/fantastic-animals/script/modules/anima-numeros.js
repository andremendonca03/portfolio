export default function initAnimaNumeros() {
   const observerTarget = document.querySelector('.numeros');
   const observer = new MutationObserver(() => {
      const numeros = Array.from(document.querySelectorAll('[data-numero]'));
   
      numeros.forEach((item) => {
         const total = +item.innerHTML;
         const increase = Number.parseInt(total / 100);
   
         item.innerHTML = 0;
         const numCount = setInterval(() => {
            item.innerHTML = +item.innerHTML + increase;
            if (item.innerHTML > total) {
               clearInterval(numCount);
               item.innerHTML = total;
            }
         }, 20);
      });
   });
   observer.observe(observerTarget, {
      attributes: true,
   });
}

