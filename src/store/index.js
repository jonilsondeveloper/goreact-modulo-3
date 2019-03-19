import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

// const createAppropriateStore = process.env.NODE_ENV === 'development'
// ? console.tron.createEnhancer : () => {};
// const store = createAppropriateStore(reducers, compose(applyMiddleware(...[])));

const middlewares = [];

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

// const store = createStore(reducers, compose(
//   createEnhancer(), // Reactotron,
//   applyMiddleware(sagaMiddleware)
// ))

export default store;
