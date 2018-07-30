import React from 'react';

const BasketTotals = ({ basket, subtotal, total }) => (
    <div className="c-basket-totals">
        <div className="c-basket-row c-basket-row--spaced">
            <p className="c-basket-item c-basket-subtotal u-uppercase">subtotal</p>
            <p
                data-js-test="basket-subtotal"
                className="c-basket-price c-basket-subtotal">
                {subtotal}
            </p>
        </div>

        <div className="c-basket-group c-basket-group--spaced">
            <div className="c-basket-row">
                <p className="c-basket-item">Delivery Fee</p>
                <p
                    data-js-test="basket-deliveryFee"
                    className="c-basket-price">{basket.deliveryFee}
            </p>
            </div>
        </div>

        <div class="c-basket-row">
            <p class="c-basket-item c-basket-total gamma u-uppercase">total</p>
            <p
                data-js-test="basket-total"
                class="c-basket-price c-basket-total gamma">
                {total}
            </p>
        </div>
    </div>
);

export default BasketTotals;
