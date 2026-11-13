(() => {
  const body = document.body;
  const toggle = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-icon');
  const label = document.querySelector('.theme-label');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const stored = localStorage.getItem('abubakr-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function setTheme(dark) {
    body.classList.toggle('dark', dark);
    icon.textContent = dark ? '☀' : '☾';
    label.textContent = dark ? 'Light mode' : 'Dark mode';
    toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    themeColor.setAttribute('content', dark ? '#0c1220' : '#f5f8ff');
  }

  setTheme(stored ? stored === 'dark' : prefersDark);
  toggle.addEventListener('click', () => {
    const dark = !body.classList.contains('dark');
    setTheme(dark);
    localStorage.setItem('abubakr-theme', dark ? 'dark' : 'light');
  });

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
