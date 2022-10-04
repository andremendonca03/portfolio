export default function initTooltip() {
   const tooltips = Array.from(document.querySelectorAll('[data-tooltip]'));

   if (tooltips.length) {
      function onMouseOver(event) {
         const tooltip = createTooltip(this);

         onMouseMove.tooltip = tooltip;

         onMouseLeave.tooltip = tooltip;
         onMouseLeave.element = this;

         this.addEventListener('mousemove', onMouseMove);
         this.addEventListener('mouseleave', onMouseLeave);
      }
      function createTooltip(element) {
         const tooltip = document.createElement('div');
         const tooltipText = element.getAttribute('aria-label');

         tooltip.innerHTML = tooltipText;
         tooltip.classList.add('tooltip');
         document.body.appendChild(tooltip);
         return tooltip;
      }

      const onMouseMove = {
         handleEvent(event) {
            this.tooltip.style.top = event.pageY + 20 + 'px';
            this.tooltip.style.left = event.pageX + 20 + 'px';
         }
      }

      const onMouseLeave = {
         handleEvent() {
            this.tooltip.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
         }
      }
      
      tooltips.forEach((item) => {
         item.addEventListener('mouseover', onMouseOver);
      });
   }
}