
import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));



// when we write the component out - just the name e.g. App - this is just a class
// wrap it in JSX tag to instantiate
// ReactDOM.render(<App />)

//will give error in console - target container not a DOM component

// So we need to make the target component
// ReactDOM.render(<App />, the html created to be rendered to this)
// ReactDOM.render(<App />, document.querySelector('.container'))
