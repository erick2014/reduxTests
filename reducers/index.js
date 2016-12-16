import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/ItemList';

const store=configureStore()//you can also pass in an initialState here

render(
  <Provider store={store}>
    <ItemList/>
  </Provider>
  document.getElementById("app")
)
// import {combineReducers} from 'redux';
// import {items,itemsHasErrored,itemsIsLoading} from './items';
//
// export default combineReducers({items,itemsHasErrored,itemsIsLoading})
