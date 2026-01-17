document.addEventListener('DOMContentLoaded', () => {
    // Scroll Fade-in Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle (Simple implementation)
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('header nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            // In a real implementation we would toggle a class to show/hide the menu
            // For now, let's just alert or Toggle a visible class if CSS supported it
            // Making it simple for now as CSS didn't fully implement the mobile drawer
            console.log('Mobile menu clicked');
        });
    }
});
