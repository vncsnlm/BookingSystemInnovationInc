document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Display a loading message or a spinner
        alert('Sending...');

        emailjs.sendForm('service_s04gwnl', 'template_765qj6p', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent successfully!');
                contactForm.reset(); // Reset the form after successful submission
            }, function(error) {
                console.error('FAILED...', error);
                alert('Failed to send the message. Please try again.');
            });
    });
});
