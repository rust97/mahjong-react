import * as React from 'react';
import './style.scss';

export function Footer<FC>() {
  return (
    <div className="footer">
      <p className="footer__text">Written by Tulaganov R.</p>
      <a className="footer__link" href="https://tulaganov.herokuapp.com/" target="_blank">
        Visit my web portfolio
      </a>
    </div>
  );
}
