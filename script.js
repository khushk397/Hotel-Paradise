// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Sticky header on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
// Get the buttons and hidden elements
const acButton = document.getElementById('AC');
const nacButton = document.getElementById('NAC');
const hiddenAc = document.querySelector('.hiddenac');
const hiddenNac = document.querySelector('.hiddenNac');

// Add click event listeners
acButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    hiddenAc.style.display = hiddenAc.style.display === 'block' ? 'none' : 'block';
});

nacButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    hiddenNac.style.display = hiddenNac.style.display === 'block' ? 'none' : 'block';
});

// Smooth scrolling for navigation links (excluding our Book Now buttons)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (!anchor.classList.contains('btn')) { // Skip buttons with btn class
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Sticky header on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
