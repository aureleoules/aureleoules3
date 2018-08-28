import React, {render} from 'preact';


import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './scss/index.scss';

render(<App />, document.getElementById('root'));
registerServiceWorker();
