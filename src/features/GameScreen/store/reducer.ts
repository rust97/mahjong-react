import { Reducer } from 'redux';
import { randomSortCubes } from './helper';
import { State } from './types';
import {
  SET_NUMBER_OF_MOVES,
  SELECT_CUBE,
  SET_SELECTED_CUBE,
  REMOVE_SELECTED,
  RETURN_PREV_CUBES,
  SET_LUCKY_MOVE,
  CUBE_OPEN,
} from './constants';

const initialState: State = {
  cubes: randomSortCubes(),
  lucky_moves: 0,
  moves_left: Math.floor(randomSortCubes().length / 2),
  selected: null,
};

export const reducer: Reducer<State> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NUMBER_OF_MOVES:
      return { ...state, moves_left: payload };
    case SELECT_CUBE:
      return { ...state, cubes: state.cubes.map((item) => (item.id === payload.id ? payload : item)) };
    case SET_SELECTED_CUBE:
      return { ...state, selected: payload };
    case REMOVE_SELECTED:
      return { ...state, selected: null };
    case RETURN_PREV_CUBES:
      return { ...state, cubes: state.cubes.map((item) => (item.id === payload.id ? payload : item)) };
    case SET_LUCKY_MOVE:
      return { ...state, lucky_moves: state.lucky_moves + 1 };
    case CUBE_OPEN:
      return { ...state, cubes: state.cubes.map((item) => (item.id === payload.id ? payload : item)) };
    case 'START_NEW_GAME':
      return initialState;

    default:
      return state;
  }
};
