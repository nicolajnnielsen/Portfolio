import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'
import './styles/bgImage.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import './fonts/exo-2-v7-latin-regular.woff2';
import './fonts/exo-2-v7-latin-regular.woff';
import './fonts/exo-2-v7-latin-italic.woff2';
import './fonts/exo-2-v7-latin-italic.woff2';
import './fonts/exo-2-v7-latin-700.woff2';
import './fonts/exo-2-v7-latin-700.woff';
import './fonts/exo-2-v7-latin-900.woff2';
import './fonts/exo-2-v7-latin-700.woff';
import './fonts/nasalization-rg.ttf';
import './fonts/nasalization-rg.woff2';
import './fonts/nasalization-rg.woff';
import './fonts/nasalization-bd.woff2';
import './fonts/nasalization-rg-webfont.woff2';


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
