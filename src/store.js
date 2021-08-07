import { createStore } from 'redux';

import slist_reducer from './reducer.js';

var store = createStore(slist_reducer);

export default store;