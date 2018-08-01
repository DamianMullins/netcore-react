import { produce } from 'immer';
import {
    BASKET_ADD_ITEM,
    BASKET_REMOVE_ITEM,
    BASKET_INCREMENT_ITEM_QUANTITY,
    BASKET_DECREMENT_ITEM_QUANTITY
} from '../actions';

const initialState = { address: '', deliveryFee: 0, items: [] };

const basket = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) { // eslint-disable-line default-case
            case BASKET_ADD_ITEM: {
                draft.items.push({ id: action.id, quantity: 1 });
                return;
            }

            case BASKET_REMOVE_ITEM: {
                draft.items = draft.items.filter(item => item.id !== action.id);
                return;
            }

            case BASKET_INCREMENT_ITEM_QUANTITY: {
                const exisingItem = draft.items.find(item => item.id === action.id);

                if (exisingItem) {
                    exisingItem.quantity++;
                }

                return;
            }

            case BASKET_DECREMENT_ITEM_QUANTITY: {
                const exisingItem = draft.items.find(item => item.id === action.id);

                if (exisingItem && exisingItem.quantity > 1) {
                    exisingItem.quantity--;
                }

                return;
            }
        }
    });

export default basket;
