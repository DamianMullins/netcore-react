import React from 'react';
import { FormattedMessage } from 'react-intl';

const BasketTotals = ({ basket, basketItems }) => {
    const subtotal = basketItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const total = subtotal + basket.deliveryFee;

    return (
        <div className="c-basket-totals">
            <div className="c-basket-row c-basket-row--spaced">
                <p className="c-basket-item c-basket-subtotal u-uppercase">
                    <FormattedMessage id="basket.subtotal" />
                </p>
                <p
                    data-js-test="basket-subtotal"
                    className="c-basket-price c-basket-subtotal">
                    {subtotal}
                </p>
            </div>

            <div className="c-basket-group c-basket-group--spaced">
                <div className="c-basket-row">
                    <p className="c-basket-item">
                        <FormattedMessage id="basket.deliveryFee" />
                    </p>
                    <p
                        data-js-test="basket-deliveryFee"
                        className="c-basket-price">
                        {basket.deliveryFee}
                    </p>
                </div>
            </div>

            <div className="c-basket-row">
                <p className="c-basket-item c-basket-total gamma u-uppercase">
                    <FormattedMessage id="basket.total" />
                </p>
                <p
                    data-js-test="basket-total"
                    className="c-basket-price c-basket-total gamma">
                    {total}
                </p>
            </div>
        </div>
    )
};

export default BasketTotals;
