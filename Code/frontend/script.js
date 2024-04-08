document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('giftCertificateForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Submit event triggered');
        
        // Call EmailJS sendForm method 
        emailjs.sendForm('service_s04gwnl', 'template_hva27f6', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('SUCCESS! Your email has been sent.');
            }, function(error) {
                console.error('FAILED...', error);
                alert('FAILED to send your email.');
            });
    });
});

