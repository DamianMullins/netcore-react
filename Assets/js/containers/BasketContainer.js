import { connect } from 'react-redux';
import Basket from '../components/Basket';

const mapStateToProps = ({ menu, basket }) => ({
    basket,

    basketItems: basket.items.map(({ id, quantity }) => ({
        ...menu.items.find(item => item.id === id),
        quantity
    }))
});

export default connect(mapStateToProps)(Basket);
