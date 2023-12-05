document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }, 4000); // Cambia la imagen cada 4 segundos

    function updateCarousel() {
      const newTransformValue = -currentIndex * 100 + '%';
      carouselInner.style.transform = 'translateX(' + newTransformValue + ')';
    }
  });