document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        this.classList.toggle('fa-times');
        this.classList.toggle('fa-bars');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('fa-times');
            menuToggle.classList.add('fa-bars');
        }
    });

    // Sticky Header
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 50);
    });

    // Smooth Scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.classList.contains('btn')) return; // Skip booking buttons

            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('fa-times');
                    menuToggle.classList.add('fa-bars');
                }
            }
        });
    });

    // Room Details Toggle
    const acButton = document.getElementById('AC');
    const nacButton = document.getElementById('NAC');
    const hiddenAc = document.querySelector('.hiddenac');
    const hiddenNac = document.querySelector('.hiddenNac');

    acButton.addEventListener('click', function (e) {
        e.preventDefault();
        hiddenAc.style.display = hiddenAc.style.display === 'block' ? 'none' : 'block';
    });

    nacButton.addEventListener('click', function (e) {
        e.preventDefault();
        hiddenNac.style.display = hiddenNac.style.display === 'block' ? 'none' : 'block';
    });

    // Testimonial Carousel
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
    }

    function rotateTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // Start carousel if testimonials exist
    if (testimonials.length > 0) {
        showTestimonial(0);
        setInterval(rotateTestimonial, 4000);
    }

    // Gallery Lightbox
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    galleryImages.forEach(img => {
        img.addEventListener('click', function () {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Set minimum dates for booking form
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    document.getElementById('check-in').min = today.toISOString().split('T')[0];
    document.getElementById('check-out').min = tomorrow.toISOString().split('T')[0];

    // Form submission
    const bookingForm = document.getElementById('booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Here you would normally send the form data to your server
            alert('Thank you for your booking request! We will contact you shortly.');
            this.reset();
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            alert(`Thank you for subscribing with ${emailInput.value}!`);
            emailInput.value = '';
        });
    }

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 20px rgba(210, 158, 95, 0.3)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Room card hover effects
    const roomCards = document.querySelectorAll('.room-card');

    roomCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});
