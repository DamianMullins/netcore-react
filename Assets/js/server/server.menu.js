import { createApp } from '../app';
import { componentToString } from '../helpers/bundleHelper';

export const bundleRenderer = context => {
    const { MenuContainer, configureStore } = createApp();
    return componentToString(MenuContainer, configureStore, context);
};
