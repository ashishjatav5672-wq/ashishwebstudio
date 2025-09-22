document.addEventListener('DOMContentLoaded', function() {
    // Get Started Button
    document.getElementById('getStartedBtn').addEventListener('click', function() {
        alert('Welcome! Sign up to start ordering services.');
        // Tu yahan real signup form redirect add kar sakta hai
    });

    // Order Buttons
    document.querySelectorAll('.orderBtn').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Order placed! Proceed to payment.');
            // Tu yahan payment logic add kar sakta hai, jaise Razorpay integration
        });
    });

    // Tu yahan aur JS add kar sakta hai, jaise login form ya API calls for real SMM
});