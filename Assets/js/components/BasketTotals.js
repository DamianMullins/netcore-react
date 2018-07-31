import React from 'react';
import { FormattedMessage, FormattedNumber, } from '../i18n';

const BasketTotals = ({ currency, basket, subtotal, total }) => (
    <div className="c-basket-totals">
        <div className="c-basket-row c-basket-row--spaced">
            <p className="c-basket-item c-basket-subtotal u-uppercase">
                <FormattedMessage id="basket.subtotal" />
            </p>
            <p
                data-js-test="basket-subtotal"
                className="c-basket-price c-basket-subtotal">
                <FormattedNumber
                    value={subtotal}
                    {...currency} />
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
                    <FormattedNumber
                        value={basket.deliveryFee}
                        {...currency} />
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
                <FormattedNumber
                    value={total}
                    {...currency} />
            </p>
        </div>
    </div>
);

export default BasketTotals;
