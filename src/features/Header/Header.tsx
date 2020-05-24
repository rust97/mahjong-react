import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { handlerMove } from '../GameScreen/store/actions';
import './style.scss';
export function Header<FC>() {
  const { cubes, lucky_moves, moves_left } = useSelector((state: RootState) => state.gameState);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(handlerMove(cubes.length, lucky_moves));
  }, [lucky_moves]);

  return (
    <div className="header">
      <p className="lucky_moves">Вы угадали {lucky_moves} раз</p>
      <p className="moves_left">Вам осталось угадать {moves_left} раз</p>
    </div>
  );
}
