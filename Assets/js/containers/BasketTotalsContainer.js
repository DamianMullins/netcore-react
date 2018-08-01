import { connect } from 'react-redux';
import BasketTotals from '../components/BasketTotals';
import { numberFormats } from '../i18n';

const mapStateToProps = ({ locale, basket, menu }) => {
    const { currency } = numberFormats[locale];
    const basketItems = basket.items.map(({ id, quantity }) => ({
        ...menu.items.find(item => item.id === id),
        quantity
    }));
    const subtotal = basketItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const total = subtotal + basket.deliveryFee;

    return {
        currency,
        basket,
        subtotal,
        total
    };
};

export default connect(mapStateToProps)(BasketTotals);
