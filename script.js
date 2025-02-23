// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
const newsletterForm = document.querySelector('.newsletter-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});

// Scroll to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        document.body.classList.add('scroll-up');
    } else {
        document.body.classList.remove('scroll-up');
    }
});

// Add Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.course-card, .feature-item, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Testimonial Slider Auto-scroll
let currentSlide = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

const showSlide = (index) => {
    testimonialCards.forEach((card, i) => {
        card.style.opacity = i === index ? '1' : '0.5';
        card.style.transform = i === index ? 'scale(1.05)' : 'scale(1)';
    });
};

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    showSlide(currentSlide);
};

// Auto-scroll every 5 seconds
setInterval(nextSlide, 5000);
showSlide(currentSlide); // Show initial slide 