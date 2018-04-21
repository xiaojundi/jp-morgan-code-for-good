import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/journal/bootstrap.css";
import { HashRouter, Route, Link} from 'react-router-dom';
import { Profile } from './components/profile/Profile';

ReactDOM.render(
	<HashRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/profile" component={Profile} />
      </div>
   </HashRouter >, document.getElementById('root'));
registerServiceWorker();