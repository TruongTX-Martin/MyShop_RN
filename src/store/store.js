import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import app from '../reducers';
import fetchUserEpic from '../epic';

const epicMiddleware = createEpicMiddleware(fetchUserEpic);

export default function configureStore() {
  const store = createStore(app, applyMiddleware(epicMiddleware));
  return store;
}
