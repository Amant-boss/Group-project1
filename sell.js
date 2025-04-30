document.addEventListener('DOMContentLoaded', function() {
    let imageUpload = document.getElementById('image-upload');
    let imageInput = document.getElementById('product-images');
    
    setupFileUpload(imageUpload, imageInput, 'Images');

    let fileUpload = document.getElementById('file-upload');
    let fileInput = document.getElementById('product-files');
    
    setupFileUpload(fileUpload, fileInput, 'Files');

    let form = document.getElementById('product-upload-form');
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
    let fileNames = Array.from(files).map(file => file.name).join(', ');
    alert(prefix + fileNames);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    let productData = {
        name: document.getElementById('product-name').value,
        description: document.getElementById('product-description').value,
        price: document.getElementById('product-price').value,
        category: document.getElementById('product-category').value,
        images: document.getElementById('product-images').files,
        files: document.getElementById('product-files').files
    };

    console.log('Product Data:', productData);
    
    alert('Product listed successfully!');
    
    e.target.reset();
}

document.querySelectorAll('.remove-button').forEach(button => {
    button.addEventListener('click', function() {
        if (confirm('Are you sure you want to remove this product?')) {
            this.closest('.product-item').remove();
        }
    });
});

let hamburger = document.getElementById('hamburger');
    let navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active'); 
    });