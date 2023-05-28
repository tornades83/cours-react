// rootReducer.js

import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';

const rootReducer = combineReducers({
  // ...vos autres réducteurs
  darkMode: darkModeReducer
});

export default rootReducer;
