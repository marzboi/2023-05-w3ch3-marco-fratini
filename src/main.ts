import { Footer } from './components/footer';
import { Header } from './components/header';
import { mascotList } from './components/list';
import { animalList } from './data/animalList';

const petList = animalList();

new Header('#app');
new mascotList('#app', petList);
new Footer('#app', `Marco's Friends and Company`);
