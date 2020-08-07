import './styles.css';
import menuDataArr from './menu.json';
import menuTeplate from './templates/menuItem.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuList: document.querySelector('.js-menu'),
  themeSwich: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

function loadTheme(theme) {
  switch (theme) {
    case Theme.DARK:
      refs.themeSwich.checked = true;
      localStorage.setItem('themeSettings', theme);
      refs.body.classList.remove(Theme.LIGHT);
      refs.body.classList.add(theme);
      break;
    case Theme.LIGHT:
      refs.themeSwich.checked = false;
      localStorage.setItem('themeSettings', theme);
      refs.body.classList.remove(Theme.DARK);
      refs.body.classList.add(theme);
      break;
    default:
      refs.body.classList.add(Theme.LIGHT);
  }
}

refs.themeSwich.addEventListener('change', event => {
  if (event.target.checked) {
    loadTheme(Theme.DARK);
  } else {
    loadTheme(Theme.LIGHT);
  }
});

const markup = menuDataArr
  .map(item => {
    return menuTeplate(item);
  })
  .join('');

loadTheme(localStorage.getItem('themeSettings'));
refs.menuList.insertAdjacentHTML('afterbegin', markup);
