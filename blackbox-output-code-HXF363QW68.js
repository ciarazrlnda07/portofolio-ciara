// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Cursor interaction effects (subtle glow on hover)
document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('.project-card, .social-icon, .nav-link');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.filter = 'drop-shadow(0 0 10px rgba(255, 182, 193, 0.5))';
        });
        el.addEventListener('mouseleave', () => {
            el.style.filter = 'none';
        });
    });
});