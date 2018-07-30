import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { hot } from 'react-hot-loader';

const mapStateToProps = ({ menu }) => ({
    menu
});

export default hot(module)(connect(mapStateToProps)(Menu));
