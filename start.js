document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageDiv = document.getElementById('message');

    // Simple validation
    if (name === '' || surname === '' || email === '' || password === '') {
        messageDiv.textContent = 'All fields are required!';
        return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        messageDiv.textContent = 'Please enter a valid email address!';
        return;
    }

    // Password validation
    const hasUpperCase = /[A-Z]/.test(password); // Check for at least one uppercase letter
    const isValidLength = password.length >= 8; // Check for minimum length of 8 characters

    if (!hasUpperCase) {
        messageDiv.textContent = 'Password must contain at least one uppercase letter.';
        return;
    }
    if (!isValidLength) {
        messageDiv.textContent = 'Password must be at least 8 characters long.';
        return;
    }

    // If validation passes
    messageDiv.textContent = 'Signed in successfully!';
    messageDiv.style.color = 'green';
    href = 'html.html';})

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Toggle the active class
    });