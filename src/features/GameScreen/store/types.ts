export interface State {
  cubes: Cube[];
  lucky_moves: number;
  moves_left: number;
  selected: null | Cube;
}

export interface Cube {
  id: number;
  color: '#ff8552' | '#297373';
  selected: boolean;
  open: boolean;
}
