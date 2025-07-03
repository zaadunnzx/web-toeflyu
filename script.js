// ===========================================
// KONFIGURASI WHATSAPP ADMIN
// ===========================================
// Ganti nomor di bawah dengan nomor WhatsApp admin yang sebenarnya
// Format: 62 (kode negara) + nomor tanpa 0 di depan
// Contoh: 081234567890 menjadi 6281234567890
const ADMIN_WHATSAPP = '6285126355727';

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

// FAQ Toggle functionality
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animated counter for testimonials
const counter = document.querySelector('.counter');
let hasAnimated = false;

function animateCounter() {
    if (hasAnimated) return;
    
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
        if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
            hasAnimated = true;
        }
    };
    
    updateCounter();
}

// Intersection Observer for counter animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter();
        }
    });
});

if (counter) {
    observer.observe(counter);
}

// Form validation and submission
const form = document.querySelector('.form-container');
const deadline = document.getElementById('deadline');
const targetScore = document.getElementById('target-score');
const continueBtn = document.querySelector('.continue-btn');

if (continueBtn) {
    continueBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!deadline.value || !targetScore.value) {
            alert('Silakan isi semua field yang diperlukan!');
            return;
        }
        
        // Here you would typically send the data to your server
        // For now, we'll just show a success message
        alert('Terima kasih! Kami akan segera menghubungi Anda.');
    });
}

// Navigation active state
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// WhatsApp floating button
const floatingWA = document.getElementById('floating-wa');
if (floatingWA) {
    floatingWA.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with your actual WhatsApp number
        const phoneNumber = '6281234567890'; // Change this to your WhatsApp number
        const message = 'Halo, saya tertarik dengan jasa joki TOEFL. Bisa minta informasi lebih lanjut?';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
}

// CTA Button functionality
const ctaButtons = document.querySelectorAll('.cta-button, .order-btn');
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Scroll to form section
        const formSection = document.querySelector('.project-form');
        if (formSection) {
            formSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Mobile menu toggle (if you want to add mobile menu later)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Parallax effect for hero shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
});

// Add smooth reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe elements for reveal animation
document.querySelectorAll('.testimonial-card, .feature-item, .form-container').forEach(el => {
    revealObserver.observe(el);
});

// ===========================================
// ERROR HANDLING & STABILITY FIXES
// ===========================================

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Error caught:', e.error);
    // Don't let errors break the page
    return true;
});

// Prevent DOMContentLoaded conflicts
let domLoadedFired = false;
document.addEventListener('DOMContentLoaded', function() {
    if (domLoadedFired) return;
    domLoadedFired = true;
    
    // Safe initialization
    try {
        // Initialize only essential features
        initEssentialFeatures();
    } catch (e) {
        console.error('Initialization error:', e);
    }
});

function initEssentialFeatures() {
    // Floating WhatsApp - Safe initialization
    const floatingWa = document.getElementById('floating-wa');
    if (floatingWa) {
        floatingWa.addEventListener('click', function(e) {
            e.preventDefault();
            try {
                const message = `Halo Admin JokiToeflYu! 👋

Saya ingin konsultasi mengenai layanan joki TOEFL. Mohon informasi lebih lanjut ya! 🙏`;
                
                const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            } catch (e) {
                console.error('WhatsApp error:', e);
            }
        });
    }
    
    // Scroll to top - Safe initialization
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            try {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.classList.add('visible');
                } else {
                    scrollTopBtn.classList.remove('visible');
                }
            } catch (e) {
                console.error('Scroll error:', e);
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            try {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } catch (e) {
                console.error('Scroll to top error:', e);
            }
        });
    }
}
