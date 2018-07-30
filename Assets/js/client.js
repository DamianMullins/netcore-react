import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createApp } from './app';

const { MenuContainer, BasketContainer, configureStore } = createApp();
let store = {};

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
  store = configureStore(window.__INITIAL_STATE__);
}

ReactDOM.hydrate(
  <Provider store={store}>
    <MenuContainer />
  </Provider>,
  document.querySelector('[data-menu]')
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BasketContainer />
    </Provider>,
    document.querySelector('[data-basket]')
);
