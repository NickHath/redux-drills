import { createStore } from 'redux';
import guestListReducer from './ducks/guestList';

export default createStore(guestListReducer);