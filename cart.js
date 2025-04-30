document.addEventListener('DOMContentLoaded', function() {
    // Get cart from localStorage or initialize empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartDisplay();

    function updateCartDisplay() {
        const cartContainer = document.getElementById('cart-items');
        const cartCounter = document.getElementById('cart-counter');
        
        // Update cart counter
        cartCounter.textContent = cart.length;

        if (cart.length === 0) {
            cartContainer.innerHTML = '<div class="empty-cart"><h3>Your cart is empty</h3><p>Add some products to your cart!</p></div>';
            updateSummary(0);
            return;
        }

        cartContainer.innerHTML = '';
        let subtotal = 0;

        cart.forEach((item, index) => {
            subtotal += item.price * item.quantity;
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <p class="price">$${(item.price * item.quantity).toFixed(2)}</p>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });

        // Save total to localStorage
        localStorage.setItem('cartTotal', subtotal);
        updateSummary(subtotal);
    }

    function updateSummary(subtotal) {
        const shipping = subtotal > 0 ? 5.00 : 0;
        const total = subtotal + shipping;

        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }

    // Make these functions global so they can be accessed by inline onclick handlers
    window.removeItem = function(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    };

    window.updateQuantity = function(index, change) {
        cart[index].quantity = Math.max(1, cart[index].quantity + change);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    };

    // Checkout button functionality
    document.querySelector('.checkout-btn').addEventListener('click', function() {
        if (cart.length > 0) {
            alert('Thank you for your purchase!');
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('cartTotal', '0');
            updateCartDisplay();
        } else {
            alert('Your cart is empty!');
        }
    });
});

const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Toggle the active class
    });