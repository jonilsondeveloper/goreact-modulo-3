import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

// const createAppropriateStore = process.env.NODE_ENV === 'development'
// ? console.tron.createEnhancer : () => {};
// const store = createAppropriateStore(reducers, compose(applyMiddleware(...[])));
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

sagaMiddleware.run(sagas);

export default store;
