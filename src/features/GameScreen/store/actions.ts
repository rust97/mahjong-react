/* eslint-disable @typescript-eslint/camelcase */
import {
  SET_NUMBER_OF_MOVES,
  SELECT_CUBE,
  CUBE_OPEN,
  SET_SELECTED_CUBE,
  SET_LUCKY_MOVE,
  REMOVE_SELECTED,
  RETURN_PREV_CUBES,
} from './constants';
import { Cube, State } from './types';
import { Action, Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const numberOfMoves = (cubes_length: number, lucky_moves: number) => ({
  type: SET_NUMBER_OF_MOVES,
  payload: Math.floor(cubes_length / 2) - lucky_moves,
});

export const selectCube = (cube: Cube) => ({ type: SELECT_CUBE, payload: { ...cube, selected: true } });

export const setSelectedCube = (cube: Cube) => ({ type: SET_SELECTED_CUBE, payload: { ...cube, selected: true } });

export const setLuckyMove = () => ({ type: SET_LUCKY_MOVE });

export const removeSelected = () => ({ type: REMOVE_SELECTED });

export const returnPrevCubes = (cube: Cube) => ({ type: RETURN_PREV_CUBES, payload: { ...cube, selected: false } });
export const cubeOpen = (cube: Cube) => ({ type: CUBE_OPEN, payload: { ...cube, open: true, selected: true } });

export const handlerSelect = (cube: Cube, selected: null | Cube): ThunkAction<void, State, unknown, Action<string>> => async (
  dispatch: ThunkDispatch<State, unknown, Action>,
) => {
  if (selected) {
    if (selected.color === cube.color) {
      dispatch(selectCube(cube));
      dispatch(cubeOpen(selected));
      dispatch(cubeOpen(cube));
      dispatch(setLuckyMove());
      dispatch(removeSelected());
    } else {
      dispatch(removeSelected());
      dispatch(returnPrevCubes(selected));
    }
  } else {
    dispatch(selectCube(cube));
    dispatch(setSelectedCube(cube));
  }
};

export const handlerMove = (cubes_length: number, lucky_moves: number): ThunkAction<void, State, unknown, Action<string>> => async (
  dispatch: ThunkDispatch<State, unknown, Action>,
) => {
  if (lucky_moves === 8) {
    dispatch({ type: 'START_NEW_GAME' });
  } else dispatch(numberOfMoves(cubes_length, lucky_moves));
};
