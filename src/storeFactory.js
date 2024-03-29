import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './Reducers';


const storeFactory = () => {
	return createStore(reducer, applyMiddleware(thunk));
}

export default storeFactory;