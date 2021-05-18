import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Allows webpack HMR (hot module reloading)
module.hot.accept();
