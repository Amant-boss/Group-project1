document.addEventListener('DOMContentLoaded', function() {
    // Update cart counter from localStorage
    const cartCounter = document.getElementById('cart-counter');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCounter.textContent = cart.length;

    // Animate stats when they come into view
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));

    function animateValue(element) {
        const value = parseInt(element.textContent);
        let current = 0;
        const increment = value / 50;
        const duration = 1500;
        const stepTime = duration / 50;

        const timer = setInterval(() => {
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

const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Toggle the active class
    });