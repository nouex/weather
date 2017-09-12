import React from 'react';
import ReactDOM from 'react-dom';
import _App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<_App />, document.getElementById('root'));
registerServiceWorker();
