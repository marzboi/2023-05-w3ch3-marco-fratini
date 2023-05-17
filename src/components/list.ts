import { Component } from './component';
import { animalList } from '../data/animalList';
import { Pet } from '../models/pet';
import './list.css';

export class MascotList extends Component {
  animals: Pet[];
  constructor(selector: string) {
    super(selector);
    this.animals = animalList();
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.cleanHtml(this.selector);
    this.template = this.createTemplate();
    const element = super.render();
    document
      .querySelectorAll('.fa-cat')
      .forEach((item) =>
        item.addEventListener('click', this.adoptPet.bind(this))
      );
    document
      .querySelectorAll('.fa-house')
      .forEach((item) =>
        item.addEventListener('click', this.sendHome.bind(this))
      );
    return element;
  }

  adoptPet(event: Event) {
    const element = event.target as HTMLSpanElement;
    const toAdopt = this.animals.find(
      (item) => item.name === element.dataset.id
    );
    if (!toAdopt?.isAdopted) {
      toAdopt!.isAdopted = true;
    }

    this.render();
  }

  sendHome(event: Event) {
    const element = event.target as HTMLSpanElement;
    const toGoHome: any = this.animals.find(
      (animal) => animal.name === element.dataset.set
    );
    if (toGoHome!.isAdopted) {
      this.animals.splice(toGoHome, 1);
    }

    this.render();
  }

  createTemplate() {
    const cats = this.animals
      .map(
        (animal) => `
      <li>
            <i class="fa-solid fa-house" data-set="${animal.name}"></i>
            <span>Name: ${animal.name}</span>
            <span>Breed: ${animal.race}</span>
            <span>Chip Number: ${animal.chip}</span>
            <span>Do I have an owner? ${
              animal.isAdopted ? 'Yes! going home soon' : 'Soon I will be'
            }</span>
            <i class="fa-solid fa-cat" data-id="${
              animal.name
            }" role="button"></i>
          </li>
      `
      )
      .join('');

    return `<ul>${cats}</ul>`;
  }
}
