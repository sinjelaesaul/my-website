// Dynamic welcome message based on time
function showWelcomeMessage() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";
    
    alert(`${greeting} Welcome to my website!`);
}

// Function for home page button
function showMessage() {
    alert("Thanks for visiting my website! 🎉");
}

// Function for about page fun fact
function showFact() {
    const facts = [
        "I love learning new programming languages!",
        "I can solve a Rubik's cube in under 2 minutes!",
        "My favorite color is purple!",
        "I want to become a full-stack developer!",
        "I've built one websites this year!"
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert(`Fun Fact: ${randomFact}`);
}

// Contact form submission (dynamic)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon! 📧`);
            form.reset();
        });
    }
    
    // Show welcome message on home page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
        showWelcomeMessage();
    }
});