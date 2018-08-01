import { connect } from 'react-redux';
import { removeOrDecrementItem } from '../state/actions';
import BasketItem from '../components/BasketItem';
import { numberFormats } from '../i18n';

const mapStateToProps = ({ locale }, { item }) => ({
    currency: numberFormats[locale].currency,
    itemTotal: item.price * item.quantity
});

const mapDispatchToProps = (dispatch, { item }) => ({
    onRemoveItemClick: () => dispatch(removeOrDecrementItem(item.id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketItem);
