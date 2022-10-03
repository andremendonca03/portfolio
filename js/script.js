const scrollElements = document.querySelectorAll("[data-scroll]");
console.log(window.innerHeight);

if (scrollElements) {
  function handleScroll() {
    scrollElements.forEach(item => {
      const window60 = window.innerHeight * 0.6;
      const sectionTop = item.getBoundingClientRect().top - window60;
    
      if (sectionTop < 0) {
        item.classList.add("active");
        console.log(item);
      }
    });
  }
  handleScroll();

  window.addEventListener("scroll", handleScroll);
}
