document.addEventListener('DOMContentLoaded', function() {
    // Handle image upload area
    const imageUpload = document.getElementById('image-upload');
    const imageInput = document.getElementById('product-images');
    
    setupFileUpload(imageUpload, imageInput, 'Images');

    // Handle file upload area
    const fileUpload = document.getElementById('file-upload');
    const fileInput = document.getElementById('product-files');
    
    setupFileUpload(fileUpload, fileInput, 'Files');

    // Handle form submission
    const form = document.getElementById('product-upload-form');
    form.addEventListener('submit', handleFormSubmit);
});

function setupFileUpload(uploadArea, input, type) {
    uploadArea.addEventListener('click', () => input.click());
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.background = '#f0f0f0';
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.background = 'transparent';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.background = 'transparent';
        input.files = e.dataTransfer.files;
        updateFileList(`${type} uploaded: `, e.dataTransfer.files);
    });

    input.addEventListener('change', (e) => {
        updateFileList(`${type} uploaded: `, e.target.files);
    });
}

function updateFileList(prefix, files) {
    const fileNames = Array.from(files).map(file => file.name).join(', ');
    alert(prefix + fileNames);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const productData = {
        name: document.getElementById('product-name').value,
        description: document.getElementById('product-description').value,
        price: document.getElementById('product-price').value,
        category: document.getElementById('product-category').value,
        images: document.getElementById('product-images').files,
        files: document.getElementById('product-files').files
    };

    // Here you would typically send the data to your server
    console.log('Product Data:', productData);
    
    // Show success message
    alert('Product listed successfully!');
    
    // Reset form
    e.target.reset();
}

// Add product management functionality
document.querySelectorAll('.remove-button').forEach(button => {
    button.addEventListener('click', function() {
        if (confirm('Are you sure you want to remove this product?')) {
            this.closest('.product-item').remove();
        }
    });
});

const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Toggle the active class
    });