/* eslint-disable no-unused-vars */
export type petStructure = {
  chip: string;
  name: string;
  race: string;
  isAdopted: boolean;
  owner: string;
};

export class Pet implements petStructure {
  static generateChip() {
    return Math.trunc(Math.random() * 1_000_000).toString();
  }

  chip: string;
  isAdopted: boolean;
  owner: string;

  constructor(public name: string, public race: string) {
    this.chip = Pet.generateChip();
    this.isAdopted = false;
    this.owner = '';
  }
}
