// Theme toggle logic
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('toggle-theme');
    const html = document.documentElement;

    // Check for saved theme preference or default to 'light'
    // Also check system preference as fallback
    const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Apply the theme immediately
    html.setAttribute('data-theme', savedTheme);

    // Set icon (simple filled circle)
    btn.innerHTML = '<span style="display:inline-block;width:1.2em;height:1.2em;border-radius:50%;background:currentColor;"></span>';

    // Toggle theme on button click
    btn.addEventListener('click', function () {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Listen for system theme changes (optional enhancement)
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
            // Only apply system theme if user hasn't set a preference
            if (!localStorage.getItem('theme')) {
                html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });
    }
});