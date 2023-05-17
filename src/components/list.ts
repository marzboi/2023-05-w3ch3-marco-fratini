/* eslint-disable no-unused-expressions */
import { Component } from './component';
import { animalList } from '../data/animalList';
import { Pet } from '../models/pet';

export class MascotList extends Component {
  animals: Pet[];
  constructor(selector: string) {
    super(selector);
    this.animals = animalList();
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const cats = this.animals
      .map(
        (animal) => `
      <li>
            <span>Name: ${animal.name}</span>
            <span>Breed: ${animal.race}</span>
            <span>Chip Number: ${animal.chip}</span>
            <span>Do I have an ownder? ${
              animal.isAdopted ? 'Yes! going home soon' : 'Soon I will be'
            }</span>
            <i class="fa-solid fa-cat" data-id="${animal.name}"></i>
          </li>
      `
      )
      .join('');

    return `<ul>${cats}</ul>`;
  }
}
