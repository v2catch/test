import React from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from '@/containers/HomePage';
import './style.scss';

ReactDOM.render(<HomePage />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept();
}
