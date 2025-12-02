// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            const isDisplayed = navLinks.style.display === 'flex';
            navLinks.style.display = isDisplayed ? 'none' : 'flex';
            
            if (!isDisplayed) {
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'white';
                navLinks.style.flexDirection = 'column';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                navLinks.style.gap = '20px';
                navLinks.style.zIndex = '999';
            }
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
                
                // Close mobile menu after clicking (if open)
                if (window.innerWidth <= 768 && navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('Your Name');
            const email = formData.get('Your Email');
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert(`Thank you for your message, ${name || 'there'}! I will get back to you at ${email || 'your email'} soon.`);
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });

    // Tech Stack Table Hover Effects
    const tableRows = document.querySelectorAll('.tech-stack-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            
            const icon = this.querySelector('.tech-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
            
            const icon = this.querySelector('.tech-icon i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
            }
        });
    });

    // Tool Tags Animation
    const toolTags = document.querySelectorAll('.tool-tag');
    toolTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Specialization Cards Animation
    const specCards = document.querySelectorAll('.spec-card');
    specCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.spec-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.spec-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
            }
        });
    });

    // Certification Cards Animation
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary-dark');
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
                icon.style.color = '';
            }
        });
    });

    // Contact Items Animation
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });

    // Add sequential delay to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.classList.add(`delay-${index % 4 + 1}`);
    });

    // Add sequential delay to certification cards
    const certItems = document.querySelectorAll('.cert-card');
    certItems.forEach((item, index) => {
        item.classList.add(`delay-${index % 4 + 1}`);
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in';
        
        // Remove any existing preloader if present
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.display = 'none';
        }
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Year update in footer
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Add copy email functionality
    const emailElement = document.querySelector('[href^="mailto:"]');
    if (emailElement) {
        emailElement.addEventListener('click', function(e) {
            if (e.ctrlKey || e.metaKey) {
                return; // Allow default behavior for Ctrl+Click
            }
            
            const email = this.getAttribute('href').replace('mailto:', '');
            navigator.clipboard.writeText(email).then(() => {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            });
            
            e.preventDefault();
        });
    }

    // Skill level animation
    function animateSkillLevels() {
        const skillLevels = document.querySelectorAll('.skill-level');
        skillLevels.forEach(level => {
            const dot = level.querySelector('.level-dot');
            if (dot) {
                dot.style.animation = 'pulse 2s infinite';
            }
        });
    }

    // Add CSS for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    // Initialize animations
    animateSkillLevels();
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (navLinks && mobileMenu && 
        !navLinks.contains(event.target) && 
        !mobileMenu.contains(event.target) &&
        navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 768) {
        navLinks.style.display = '';
        navLinks.style.position = '';
        navLinks.style.top = '';
        navLinks.style.left = '';
        navLinks.style.right = '';
        navLinks.style.background = '';
        navLinks.style.flexDirection = '';
        navLinks.style.padding = '';
        navLinks.style.boxShadow = '';
        navLinks.style.gap = '';
    }
});
