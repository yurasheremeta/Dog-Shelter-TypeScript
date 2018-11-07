import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store/middleware/index';

ReactDOM.render(
  <Provider store = {store}>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/breeds" component={BreedsOverview} />
  </Switch>
  <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
