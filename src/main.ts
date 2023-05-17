/* eslint-disable no-new */
import { Main } from './components/app-container';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { MascotList } from './components/list';

new Header('#app');
new Main('#app');
new MascotList('main');
new Footer('#app', `Marco's Friends and Company`);
