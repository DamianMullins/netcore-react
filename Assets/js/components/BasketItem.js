import React from 'react';
import { decode } from 'he';
import { FormattedMessage, FormattedNumber } from '../i18n';

const BasketItem = ({ currency, item, itemTotal, onRemoveItemClick }) => (
    <div className="c-basket-row">
        <button className="o-btn o-btn--small" onClick={onRemoveItemClick}>-
            <span className="is-visuallyHidden">
                <FormattedMessage id="basket.removeItem" values={{ item: decode(item.name) }} />
            </span>
        </button>

        <p className="c-basket-item">{item.quantity} x {decode(item.name)}</p>
        <p className="c-basket-price">
            <FormattedNumber
                value={itemTotal}
                {...currency} />
        </p>
    </div>
);

export default BasketItem;
