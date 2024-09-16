document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        
        // Toggle the display of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }

        // Change the "+" to "-" when the answer is shown
        const toggle = this.querySelector('.faq-toggle');
        if (toggle.innerHTML === '+') {
            toggle.innerHTML = '-';
        } else {
            toggle.innerHTML = '+';
        }
    });
});
