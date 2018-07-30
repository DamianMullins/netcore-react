import MenuContainer from './containers/MenuContainer';
import BasketContainer from './containers/BasketContainer';
import configureStore from './state/configureStore';

export const createApp = () => {
    return {
        MenuContainer,
        BasketContainer,
        configureStore
    };
}
