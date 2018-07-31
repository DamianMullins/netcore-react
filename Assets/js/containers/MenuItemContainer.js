import { connect } from 'react-redux';
import { addOrIncrementItem } from '../state/actions';
import MenuItem from '../components/MenuItem';
import { numberFormats } from '../i18n';

const mapStateToProps = ({ locale }) => {
    const { currency } = numberFormats[locale];

    return {
        currency
    };
};

const mapDispatchToProps = (dispatch, { item }) => ({
    onAddItemClick: () => dispatch(addOrIncrementItem(item.id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuItem);
