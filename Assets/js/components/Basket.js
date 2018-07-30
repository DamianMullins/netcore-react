import React from 'react';
import deliveryIcon from '../../img/icon--delivery.svg';
import BasketItemContainer from '../containers/BasketItemContainer';
import BasketTotals from './BasketTotals';

const Basket = ({ basket, basketItems }) => (
    <div>
        {basketItems.map(item => <BasketItemContainer item={item} key={item.id} />)}

        <hr className="c-basket-separator" />

        <BasketTotals basket={basket} basketItems={basketItems} />

        <hr className="c-basket-separator" />

        <p className="c-basket-restaurantAddress">
            {basket.address}
        </p>

        <hr className="c-basket-separator" />

        <p className="c-basket-deliveryOrCollectionDetails">
            <img src={deliveryIcon} className="icon-deliveryOrCollection" alt="" />
            {basket.deliveryTime}
        </p>
    </div>
);

export default Basket;
