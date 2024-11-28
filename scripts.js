// Particles.js Configuration
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 }},
        "color": { "value": "#3b82f6" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#3b82f6", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        }
    },
    "retina_detect": true
});

// Theme toggle function
function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector('.theme-toggle i');

    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        icon.className = 'bx bx-moon';
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.className = 'bx bx-sun';
    }
}

// Set initial icon for dark theme default
document.addEventListener('DOMContentLoaded', () => {
    const icon = document.querySelector('.theme-toggle i');
    icon.className = 'bx bx-sun';
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    alert('Message sent successfully!');
    event.target.reset();
    return false;
}

// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

function handleSubmit(event) {
    event.preventDefault();

    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    console.log("Template Parameters:", templateParams);

    emailjs.send('service_e3g7lu6', 'template_f91ye04', templateParams)
        .then((response) => {
            console.log('Email sent successfully:', response.status, response.text);
            document.getElementById('response').innerText = 'Message sent successfully!';
            document.getElementById('contact-form').reset();
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
            document.getElementById('response').innerText = 'Failed to send message. Please try again.';
        });
}
