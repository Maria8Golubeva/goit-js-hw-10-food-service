const template = require("./template/template.hbs");
import menu from './menu.json';

const menuListEl = document.querySelector('.js-menu');
const render = template(menu);

menuListEl.insertAdjacentHTML('beforeend', render);







