import React from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';
import App from './App';
import './index.scss';

// If you want to Pre-render with react-snap
// Step 1: install $ yarn add --dev react-snap
// Step 2: add to package.json run script: "postbuild": "react-snap"
// Step 3: Add to package.json: "reactSnap":{"inlineCss":true}
// Step 3: replace to the script below.

import * as serviceWorker from './serviceWorker';

// You need bootstrap? $ yarn add bootstrap
// See: https://create-react-app.dev/docs/adding-bootstrap
// import 'bootstrap/dist/css/bootstrap.css';

// Single-page application (SPA)
ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById('root');
if (rootElement && rootElement!.hasChildNodes()) {
  hydrate(<App />, rootElement);

  // Precache - set to 'register' once you Pre-render
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.register();
} else {
  render(<App />, rootElement);
}

