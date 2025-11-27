// Simple JavaScript for interactive elements

// Flashcard flip functionality
document.addEventListener('DOMContentLoaded', function() {
    const flashcard = document.querySelector('.flashcard');
    
    if (flashcard) {
        flashcard.addEventListener('click', function() {
            this.classList.toggle('flipped');
            this.style.transform = this.classList.contains('flipped') 
                ? 'rotateY(180deg)' 
                : 'rotateY(0deg)';
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Login/Signup button handlers (placeholder)
    document.querySelector('.btn-login')?.addEventListener('click', function() {
        alert('Login functionality would go here!');
    });

    document.querySelector('.btn-signup')?.addEventListener('click', function() {
        alert('Signup functionality would go here!');
    });

    // Add hover effects to study set cards
    const setCards = document.querySelectorAll('.set-card');
    setCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});

// Add some dynamic content loading (simulated)
function loadFeaturedSets() {
    // This would typically fetch from an API
    console.log('Loading featured study sets...');
}

// Initialize when page loads
window.addEventListener('load', loadFeaturedSets);
