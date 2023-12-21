import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const pages = {
  'auth': [ Pages.AuthPage, {test: '123'} ],
  'registration': [ Pages.RegistrationPage ],
  'list': [ Pages.ListPage , {chats: [{label: 'Киноклуб'}, {label: 'тет-а-теты'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}, {label: 'Дизайн'}]}],
  'profile': [ Pages.ProfilePage ],
  'profile-edit': [ Pages.ProfileEdit ],
  'password-edit': [ Pages.PasswordEdit ],
  '404': [ Pages.ErrorCode404 ],
  '500': [ Pages.ErrorCode500 ],
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;
  container.innerHTML = Handlebars.compile(source)(context);
}

// document.addEventListener('DOMContentLoaded', () => navigate(window.location.pathname.slice(1)));
document.addEventListener('DOMContentLoaded', () => navigate('auth'));


document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

