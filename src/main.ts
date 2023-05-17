/* eslint-disable no-new */
import { Footer } from './components/footer';
import { Header } from './components/header';
import { MascotList } from './components/list';

new Header('#app');
new MascotList('#app');
new Footer('#app', `Marco's Friends and Company`);
