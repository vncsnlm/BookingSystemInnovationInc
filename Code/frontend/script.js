document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('giftCertificateForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Assuming giftAmount is a select element and we want to send the selected option's text.
        var selectedAmount = form.querySelector("#giftAmount option:checked").text;
        
        // Send an email to the client using the form data directly
        emailjs.sendForm('service_s04gwnl', 'template_hva27f6', this)
            .then((response) => {
                console.log('SUCCESS! Email sent to client', response.status, response.text);
                
                // Construct data for admin email, including the selected gift amount
                var adminData = {
                    sender_name: form.sender_name.value,
                    sender_email: form.sender_email.value,
                    receiver_name: form.receiver_name.value,
                    receiver_email: form.receiver_email.value,
                    giftAmount: selectedAmount // Sending the selected gift amount as text
                };

                // Send a separate email to the admin with the custom data object
                return emailjs.send('service_s04gwnl', 'template_sxuhr95', adminData);
            })
            .then((response) => {
                console.log('SUCCESS! Email sent to admin', response.status, response.text);
                alert('SUCCESS! Your email has been sent to both the client and admin.');
            }, (error) => {
                console.error('FAILED...', error);
                alert('FAILED to send your email.');
            });
    });
});
