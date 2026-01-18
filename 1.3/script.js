// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateToggleText(savedTheme);
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', '');
            updateToggleText('');
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            updateToggleText('dark-theme');
        }
    });

    function updateToggleText(theme) {
        themeToggle.textContent = theme === 'dark-theme' ? '🌙 Dark Mode' : '🌞 Light Mode';
    }
});