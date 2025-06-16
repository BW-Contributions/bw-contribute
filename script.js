// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // --- ScrollReveal Animations ---
    // Initialize ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false // Animations will only happen once
    });

    // Animate Hero Section elements
    sr.reveal('.hero-title', { delay: 300 });
    sr.reveal('.hero-subtitle', { delay: 400 });
    sr.reveal('lottie-player', { delay: 200, origin: 'top' });

    // ===== JAVASCRIPT ANIMATION ORDER UPDATED =====
    // Animate Donation section first
    sr.reveal('.donation h2', { delay: 200 });
    sr.reveal('.donation > p', { delay: 300 });
    sr.reveal('.donation-button', { interval: 100, origin: 'bottom', distance: '40px' });

    // Animate Features section second
    sr.reveal('.features h2', { delay: 200 });
    sr.reveal('.features > p', { delay: 300 });
    sr.reveal('.feature-card', { interval: 100 });
});
