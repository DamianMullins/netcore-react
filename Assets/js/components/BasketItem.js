import React from 'react';

const BasketItem = ({ item, itemTotal, onRemoveItemClick }) => (
    <div className="c-basket-row">
        <button className="o-btn o-btn--small" onClick={onRemoveItemClick}>-
            <span
                className="is-visuallyHidden"
                dangerouslySetInnerHTML={{ __html: `Remove ${item.name} from basket` }}></span>
        </button>

        <p className="c-basket-item" dangerouslySetInnerHTML={{ __html: `${item.quantity} x ${item.name}` }}></p>
        <p className="c-basket-price">{itemTotal}</p>
    </div>
)

export default BasketItem;
