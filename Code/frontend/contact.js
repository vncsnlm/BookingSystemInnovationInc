document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("Y7b4FXQna6pfsED7c");
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_s04gwnl', 'template_765qj6p', this)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent!');
            }, function (error) {
                console.log('FAILED...', error);
                alert('Failed to send the message. Please try again.');
            });
    });
});
