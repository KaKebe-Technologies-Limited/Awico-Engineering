document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar-link');
    const contents = document.querySelectorAll('.service-content');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');

            // Remove active class from all links and contents
            links.forEach(l => l.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active to current
            this.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Show the first one by default if not already
    if (!document.querySelector('.service-content.active')) {
        links[0].classList.add('active');
        contents[0].classList.add('active');
    }
});
