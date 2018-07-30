import { combineReducers } from 'redux';
import menu from './menu';
import basket from './basket';

export default combineReducers({
    menu,
    basket
});
