document.addEventListener('DOMContentLoaded', function() {
    let slider = document.querySelector('.slider');
    let slides = document.querySelectorAll('.slide');
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next');
    
    let currentSlide = 0;
    let slideCount = slides.length;

    let cartCounter = document.getElementById('cart-counter');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
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

    let slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);

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

    let contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let subject = document.getElementById('subject').value;
        let message = document.getElementById('message').value;

        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
        contactForm.reset();
    });
});

let hamburger = document.getElementById('hamburger');
    let navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active'); 
    });