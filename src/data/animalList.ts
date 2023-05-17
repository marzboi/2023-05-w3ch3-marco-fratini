import { Pet } from '../models/pet';

export const animalList = (): Pet[] => [
  new Pet('Fritza', 'Ragdoll'),
  new Pet('Bobo', 'Russian Gray'),
  new Pet('Micha', 'Brown'),
  new Pet('Vito', 'Orange'),
  new Pet('Tom', 'Siamese'),
  new Pet('Gatina', 'Brown'),
];
