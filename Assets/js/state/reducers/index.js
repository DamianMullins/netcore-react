import { combineReducers } from 'redux';
import locale from './locale';
import menu from './menu';
import basket from './basket';

export default combineReducers({
    locale,
    menu,
    basket
});
