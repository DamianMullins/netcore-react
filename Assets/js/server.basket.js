import { createApp } from './app';
import bundlehelper from './bundleHelper';

export const bundleRenderer = context => {
    const { BasketContainer, configureStore } = createApp();
    return bundlehelper(BasketContainer, configureStore, context);
};
