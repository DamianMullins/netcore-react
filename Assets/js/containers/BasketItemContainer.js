import { connect } from 'react-redux';
import { removeOrDecrementItem } from '../state/actions';
import BasketItem from '../components/BasketItem';

const mapStateToProps = (state, { item }) => ({
    itemTotal: item.price * item.quantity
});

const mapDispatchToProps = (dispatch, { item }) => ({
    onRemoveItemClick: () => dispatch(removeOrDecrementItem(item.id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketItem);
