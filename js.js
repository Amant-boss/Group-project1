document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    function updateCartCounter() {
        const counter = document.getElementById('cart-counter');
        if (counter) {
            counter.textContent = cart.length;
        }
    }

    const addToCartButtons = document.querySelectorAll('.product-card .cta-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = button.closest('.product-card');
            const product = {
                name: productCard.querySelector('h3').textContent,
                price: parseFloat(productCard.querySelector('.price').textContent.replace('$', '')),
                description: productCard.querySelector('p:not(.price)').textContent,
                image: productCard.querySelector('img').src,
                quantity: 1
            };

            const existingProductIndex = cart.findIndex(item => item.name === product.name);
            if (existingProductIndex > -1) {
                cart[existingProductIndex].quantity++;
            } else {
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            localStorage.setItem('cartTotal', total);
            
            updateCartCounter();
            alert(`${product.name} added to cart! Cart total: $${total.toFixed(2)}`);
        });
    });


    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active'); 
    });
});
    updateCartCounter();
