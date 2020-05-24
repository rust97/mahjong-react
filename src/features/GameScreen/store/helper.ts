import { Cube } from './types';

function createCubes() {
  let cubes: Cube[] = [];
  for (let i: number = 0; i < 16; i++) {
    if (i < 8) {
      cubes = [
        ...cubes,
        {
          id: i,
          color: '#ff8552',
          selected: false,
          open: false,
        },
      ];
    } else {
      cubes = [
        ...cubes,
        {
          id: i,
          color: '#297373',
          selected: false,
          open: false,
        },
      ];
    }
  }
  return cubes;
}

export function randomSortCubes() {
  const cubes: Cube[] = createCubes().sort(() => Math.random() - 0.5);

  return cubes;
}
