let current = 0;
const total = 3;

function updateCarousel() {
    document.getElementById('carousel-track').style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.style.opacity = i === current ? '1' : '0.3';
    });
}

function changeSlide(dir) {
    current = (current + dir + total) % total;
    updateCarousel();
}

function goToSlide(index) {
    current = index;
    updateCarousel();
}

// Auto-avance cada 5 segundos
setInterval(() => changeSlide(1), 5000);