import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import reducers, { State } from './reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state: State) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.error(e);
  }
};

const persistedState = loadState();

const store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000),
);

export default store;
