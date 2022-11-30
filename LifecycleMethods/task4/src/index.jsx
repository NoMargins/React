import React from 'react';
import ReactDOM from 'react-dom';
import User from './User.jsx';

const rootElem = document.querySelector('#root');

ReactDOM.render(<User userId='Facebook' />, rootElem);
