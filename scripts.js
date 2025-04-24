document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');

  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    toggle.checked = true;
  }

  // Toggle event
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });
});
