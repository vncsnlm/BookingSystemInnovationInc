document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('giftCertificateForm');
    document.getElementById('payAndSendEmail').addEventListener('click', function () {
        handlePayment().then(paymentSuccess => {
            if (paymentSuccess) {
                emailjs.sendForm('service_s04gwnl', 'template_hva27f6', form)
                    .then(function (response) {
                        console.log('SUCCESS! Email sent to client', response.status, response.text);
                        return emailjs.send('service_s04gwnl', 'template_sxuhr95', {
                            sender_name: form.sender_name.value,
                            sender_email: form.sender_email.value,
                            receiver_name: form.receiver_name.value,
                            receiver_email: form.receiver_email.value,
                            giftAmount: form.giftAmount.value
                        });
                    })
                    .then(function (response) {
                        alert('SUCCESS! Your email has been sent to both the client and admin.');
                    })
                    .catch(function (error) {
                        console.error('FAILED...', error);
                        alert('FAILED to send your email.');
                    });
            } else {
                alert('Payment failed, please try again.');
            }
        }).catch(error => {
            console.error('Payment handling failed', error);
            alert('Payment process encountered an error. Please try again.');
        });
    });
});

function handlePayment() {
    return new Promise((resolve, reject) => {
        const url = 'https://square.link/u/V1rFs6RM?src=embed';
        const win = window.open(url, '_blank');
        win.onclose = () => {
            // Simulate a payment check (you should replace this with actual payment validation logic)
            if (confirm("Did the payment succeed?")) {
                resolve(true);
            } else {
                reject(new Error("Payment was not successful."));
            }
        };
    });
}
