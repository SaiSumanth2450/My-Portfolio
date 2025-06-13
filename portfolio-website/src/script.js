// This file contains JavaScript code for interactivity on the portfolio website.

// Function to handle the smooth scrolling effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to toggle the mobile menu
const sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-250px";
}

// Function to handle form submission
document.querySelector('.submit-btn button').addEventListener('click', function() {
    const name = document.querySelector('.input-box input[type="text"]').value;
    const email = document.querySelectorAll('.input-box input[type="text"]')[1].value;
    const project = document.querySelectorAll('.input-box input[type="text"]')[2].value;
    const message = document.querySelector('.input-box textarea').value;

    if (name && email && project && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Here you can add code to send the form data to a server or an email service
    } else {
        alert('Please fill in all fields.');
    }
});