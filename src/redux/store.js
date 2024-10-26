import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import {thunk} from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {reducerLogin} from './reducer/reducerLogin';
import {favoriteReducer} from './reducer/reducerFavEvent';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const appReducer = combineReducers({
  reducerLogin: reducerLogin,
  favoriteReducer: favoriteReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

let persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
export const persistor = persistStore(store);
