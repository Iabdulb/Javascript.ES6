const products = document.querySelectorAll('.product');
        let currentProductIndex = 0;
        
        function showNextProduct() {
            products[currentProductIndex].style.display = 'none';
            currentProductIndex = (currentProductIndex + 1) % products.length;
            products[currentProductIndex].style.display = 'block';
        }
        
        // Initially display the first product
        products[currentProductIndex].style.display = 'block';
        
        // Automatically transition to the next product every 3 seconds
        setInterval(showNextProduct, 3000);
