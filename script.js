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

    // Animate section titles and paragraphs
    sr.reveal('.features h2, .donation h2', { delay: 200 });
    sr.reveal('.features > p, .donation > p', { delay: 300 });

    // Animate Feature Cards with a staggering effect
    sr.reveal('.feature-card', { interval: 100 });
    
    // Animate Donation Buttons with a staggering effect
    sr.reveal('.donation-button', { interval: 100, origin: 'bottom', distance: '40px' });

});
