document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentSlide = 0;
    const slideCount = slides.length;

    // Update cart counter from localStorage
    const cartCounter = document.getElementById('cart-counter');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCounter.textContent = cart.length;

    function goToSlide(index) {
        if (index < 0) {
            currentSlide = slideCount - 1;
        } else if (index >= slideCount) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Auto slide every 5 seconds
    let slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);

    // Reset interval when manually changing slides
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    }

    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        resetInterval();
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        resetInterval();
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // You would typically send this data to a server
        // For now, we'll just show an alert
        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
        contactForm.reset();
    });
});

const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Toggle the active class
    });