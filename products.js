document.addEventListener('DOMContentLoaded', function() {
    // Initialize the cart from localStorage or create empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart counter
    function updateCartCounter() {
        const counter = document.getElementById('cart-counter');
        if (counter) {
            counter.textContent = cart.length;
        }
    }

    // Add to cart functionality
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

            // Check if product already exists in cart
            const existingProductIndex = cart.findIndex(item => item.name === product.name);
            if (existingProductIndex > -1) {
                cart[existingProductIndex].quantity++;
            } else {
                cart.push(product);
            }

            // Save cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Calculate and save total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            localStorage.setItem('cartTotal', total);
            
            // Update counter and show alert
            updateCartCounter();
            alert(`${product.name} added to cart! Cart total: $${total.toFixed(2)}`);
        });
    });

    // Initialize cart counter
    updateCartCounter();
});