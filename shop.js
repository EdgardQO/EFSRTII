document.addEventListener('DOMContentLoaded', function() {
    // Cambio de color de fondo cada 4 segundos
    const colors = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0']; // Colores disponibles
    let currentColorIndex = 0;

    function changeBackgroundColor() {
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    setInterval(changeBackgroundColor, 4000); // Cambia el color de fondo cada 4 segundos

    // Carrusel de imágenes con descripciones
    const slides = document.querySelectorAll('.slide');
    const descriptions = ['Rosa Elegante', 'Tulipán Brillante', 'Girasol Radiante']; // Descripciones de las imágenes
    let currentSlideIndex = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[n].classList.add('active');
        document.getElementById('product-description').textContent = descriptions[n];
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    setInterval(nextSlide, 3000); // Cambia la imagen y descripción cada 3 segundos

    // Iniciar con la primera imagen y descripción
    showSlide(0);
});
