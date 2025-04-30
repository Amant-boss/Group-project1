document.addEventListener('DOMContentLoaded', function() {
    let cartCounter = document.getElementById('cart-counter');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCounter.textContent = cart.length;

    let stats = document.querySelectorAll('.stat-number');
    
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));

    function animateValue(element) {
        let value = parseInt(element.textContent);
        let current = 0;
        let increment = value / 50;
        let duration = 1500;
        let stepTime = duration / 50;

        let timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                element.textContent = value + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, stepTime);
    }
});

let hamburger = document.getElementById('hamburger');
    let navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });