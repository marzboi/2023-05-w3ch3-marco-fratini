/* eslint-disable no-unused-vars */
export type mascotStructure = {
  chip: string;
  name: string;
  race: string;
  isAdopted: boolean;
  owner: string;
};

export class Mascot implements mascotStructure {
  static generateChip() {
    return Math.trunc(Math.random() * 1_000_000).toString();
  }

  chip: string;
  isAdopted: boolean;
  constructor(public name: string, public race: string, public owner: string) {
    this.chip = Mascot.generateChip();
    this.isAdopted = false;
  }
}
