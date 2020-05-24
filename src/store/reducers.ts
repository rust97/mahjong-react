import { combineReducers } from 'redux';
import { reducer } from '../features/GameScreen/store/reducer';

export const rootReducer = combineReducers({
  gameState: reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
