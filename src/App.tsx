import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import GameScreen from './features/GameScreen';
import Header from './features/Header';
import Footer from './features/Footer';
import './style/style.scss';

export const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <div className="main">
        <Header />
        <GameScreen />
        <Footer />
      </div>
    </Provider>
  );
};
