import axios from 'axios';

export function fetchItems () {
    return dispatch => axios.get('/api/menuItems', {
        params: {
            restaurantName: state.menu.restaurantName
        }
    })
        .then(({ data }) => {
            dispatch(receiveItems(data.menu.items));
        });
};

export const MENU_GET_ALL_ITEMS = 'MENU_GET_ALL_ITEMS';
export const receiveItems = items => ({
    type: MENU_GET_ALL_ITEMS,
    items
});

export const BASKET_ADD_ITEM = 'BASKET_ADD_ITEM';
export const addItem = id => ({
    type: BASKET_ADD_ITEM,
    id
});

export const BASKET_REMOVE_ITEM = 'BASKET_REMOVE_ITEM';
export const removeItem = id => ({
    type: BASKET_REMOVE_ITEM,
    id
});

export const BASKET_INCREMENT_ITEM_QUANTITY = 'BASKET_INCREMENT_ITEM_QUANTITY';
export const incrementItemQuantity = id => ({
    type: BASKET_INCREMENT_ITEM_QUANTITY,
    id
});

export const BASKET_DECREMENT_ITEM_QUANTITY = 'BASKET_DECREMENT_ITEM_QUANTITY';
export const decrementItemQuantity = id => ({
    type: BASKET_DECREMENT_ITEM_QUANTITY,
    id
});

export function addOrIncrementItem (id) {
    return (dispatch, getState) => {
        if (!id) return;

        const item = getState().basket.items.find(i => i.id === id);

        return item
            ? dispatch(incrementItemQuantity(id))
            : dispatch(addItem(id));
    };
};

export function removeOrDecrementItem (id) {
    return (dispatch, getState) => {
        if (!id) return;

        const item = getState().basket.items.find(i => i.id === id);

        if (item.quantity > 1) {
            return dispatch(decrementItemQuantity(id));
        } else if (item.quantity <= 1) {
            return dispatch(removeItem(id));
        }
    };
};
