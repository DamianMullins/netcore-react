import { connect } from 'react-redux';
import Menu from '../components/Menu';

const mapStateToProps = ({ menu }) => ({
    menu
});

export default connect(mapStateToProps)(Menu);
