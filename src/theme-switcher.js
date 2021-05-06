const themeSwitcherEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// LOCAL STORAGE CURRENT THEME

if (!localStorage.getItem('Theme')) {
    bodyEl.classList.add('light-theme');
    localStorage.setItem('Theme', Theme.LIGHT);
};

if (localStorage.getItem('Theme') === Theme.DARK) {
    bodyEl.classList.add('dark-theme');
    bodyEl.classList.remove('light-theme');
    themeSwitcherEl.checked = true;
};

if (localStorage.getItem('Theme') === Theme.LIGHT) {
    bodyEl.classList.add('light-theme');
    bodyEl.classList.remove('dark-theme');
    themeSwitcherEl.checked = false;
};

// THEME SWITCHER

themeSwitcherEl.addEventListener('change', themeSwitcher);

function themeSwitcher() {
    if (themeSwitcherEl.checked) {
        bodyEl.classList.add('dark-theme');
        bodyEl.classList.remove('light-theme');
        localStorage.setItem('Theme', Theme.DARK);
        return
    };

    if (!themeSwitcherEl.checked) {
        bodyEl.classList.add('light-theme');
        bodyEl.classList.remove('dark-theme');
        localStorage.setItem('Theme', Theme.LIGHT);
    };
};

