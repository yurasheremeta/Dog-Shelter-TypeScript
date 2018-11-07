import { createStore, applyMiddleware} from 'redux';
import reducer from '../domains/reducer';
import promise from 'redux-promise-middleware'
import { createLogger } from 'redux-logger';

const middleware = [promise(), createLogger()];
const store = createStore(reducer, applyMiddleware(...middleware));
 
export default store;