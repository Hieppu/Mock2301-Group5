import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './redux/reducers/userReducers';

const rootReduct = combineReducers({
  userInfo: userReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReduct, composeEnhancer(applyMiddleware(thunk)));

export default store;
