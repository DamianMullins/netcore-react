import { connect } from 'react-redux';
import { addOrIncrementItem } from '../state/actions';
import MenuItem from '../components/MenuItem';

const mapDispatchToProps = (dispatch, { item }) => ({
    onAddItemClick: () => dispatch(addOrIncrementItem(item.id))
});

export default connect(
    null,
    mapDispatchToProps
)(MenuItem);
