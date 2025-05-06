// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Page transition animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add this to your CSS
body {
    opacity: 0;
    transition: opacity 0.5s ease;
}