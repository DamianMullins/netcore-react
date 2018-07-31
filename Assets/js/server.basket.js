import { createApp } from './app';
import { componentToString } from './helpers/bundleHelper';

export const bundleRenderer = context => {
    const { BasketContainer, configureStore } = createApp();
    return componentToString (BasketContainer, configureStore, context);
};
