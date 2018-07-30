import { produce } from 'immer';
import { MENU_GET_ALL_ITEMS } from '../actions';

const initialState = { restaurantname: '', items: [] };

const menu = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) { // eslint-disable-line default-case
            case MENU_GET_ALL_ITEMS: {
                draft.menu.items = [...draft.menu.items, ...action.items];
                return;
            }
        }
    });

export default menu;
