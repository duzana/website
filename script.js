// Dark Mode Toggle with Icons
const toggleButton = document.getElementById('theme-toggle');
let isDarkMode = false; // Track the current mode

toggleButton.innerHTML = '🌙'; // Default to the moon icon

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('section').forEach(section => {
        section.classList.toggle('dark-mode');
    });
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    
    // Toggle between moon and sun icons
    isDarkMode = !isDarkMode;
    toggleButton.innerHTML = isDarkMode ? '☀️' : '🌙';
});

// Floating Action Button Scroll to Contact Section
function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Sticky Header (for smoother scroll experience)
window.onscroll = function() {
    smoothStickyNav();
};

function smoothStickyNav() {
    const scrollPos = window.scrollY;
    const header = document.querySelector('header');

    if (scrollPos > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Loading Spinner
window.addEventListener('load', function() {
    document.getElementById('spinner').style.display = 'none';
});
document.getElementById('spinner').style.display = 'block';
