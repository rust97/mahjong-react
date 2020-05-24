import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { handlerSelect } from './store/actions';
import { Cube } from './store/types';
import './style.scss';

export function GameScreen<FC>() {
  const { cubes, lucky_moves, moves_left, selected } = useSelector((state: RootState) => state.gameState);
  const dispatch = useDispatch();

  function onHandlerClick(cube: Cube) {
    if (cube.selected || cube.open) {
      alert('вы нажали на уже  выбранный круг');
    } else dispatch(handlerSelect(cube, selected));
  }

  return (
    <div className="game__container">
      {cubes.map((item) => {
        return (
          <div
            className="game__cube"
            key={item.id}
            style={item.selected || item.open ? { background: `${item.color}` } : { background: '#39393a' }}
            onClick={() => onHandlerClick(item)}
          ></div>
        );
      })}
    </div>
  );
}
