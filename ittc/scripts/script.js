document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.login');
    const dropdown = document.querySelector('.dropdown');

    loginButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        dropdown.classList.toggle('show'); // Toggle dropdown visibility
    });

    // Optional: Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target) && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
});
