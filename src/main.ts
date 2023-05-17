import { Footer } from './components/footer';
import { Header } from './components/header';
import { animalList } from './data/mascotList';

const petList = animalList;

new Header('#app');
new Footer('#app', `Marco's Friends and Company`);
