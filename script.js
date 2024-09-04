document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

         messageDiv.textContent = '';

        if (password !== confirmPassword)
 {
            messageDiv.textContent = 'Passwords do not match!';
            return;
        }  
            messageDiv.textContent = 'Registration successful!';
            form.reset();
    });
});
