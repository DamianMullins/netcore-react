import React from 'react';
import { FormattedMessage } from 'react-intl';
import { decode } from 'he';

const BasketItem = ({ item, itemTotal, onRemoveItemClick }) => (
    <div className="c-basket-row">
        <button className="o-btn o-btn--small" onClick={onRemoveItemClick}>-
            <span className="is-visuallyHidden">
                <FormattedMessage id="basket.removeItem" values={{ item: decode(item.name) }} />
            </span>
        </button>

        <p className="c-basket-item">{item.quantity} x {decode(item.name)}</p>
        <p className="c-basket-price">{itemTotal}</p>
    </div>
)

export default BasketItem;
