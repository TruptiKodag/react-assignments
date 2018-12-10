import { createStore } from 'redux';
import reducers from './reducers/colorReducer';
const store = createStore(reducers);

export default store;