import { createApp } from './app';
import bundlehelper from './bundleHelper';

export const bundleRenderer = context => {
    const { MenuContainer, configureStore } = createApp();
    return bundlehelper(MenuContainer, configureStore, context);
};
