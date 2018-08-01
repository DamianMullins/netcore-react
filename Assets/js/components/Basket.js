import React from 'react';
import { FormattedMessage } from '../i18n';
import BasketItemContainer from '../containers/BasketItemContainer';
import BasketTotalsContainer from '../containers/BasketTotalsContainer';
import deliveryIcon from '../../img/icon--delivery.svg';

const Basket = ({ basket, basketItems }) => (
    <div>
        <h2 className="c-basket-heading">
            <FormattedMessage id="basket.title" />
        </h2>

        {basketItems.map(item => <BasketItemContainer item={item} key={item.id} />)}

        <hr className="c-basket-separator" />

        <BasketTotalsContainer />

        <hr className="c-basket-separator" />

        <p className="c-basket-restaurantAddress">
            {basket.address}
        </p>

        <hr className="c-basket-separator" />

        <p className="c-basket-deliveryOrCollectionDetails">
            <img src={deliveryIcon} className="icon-deliveryOrCollection" alt="" />
        </p>
    </div>
);

export default Basket;
