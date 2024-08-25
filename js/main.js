window.onload = function() {
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('course-link')) {
                const link = this.querySelector('.course-link');
                if (link) {
                    e.preventDefault();
                    link.click();
                }
            }
        });

        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const link = this.querySelector('.course-link');
                if (link) {
                    e.preventDefault();
                    link.click();
                }
            }
        });
    });

}
   