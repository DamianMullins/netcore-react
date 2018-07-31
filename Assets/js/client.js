import ReactDOM from 'react-dom';
import { createApp } from './app';
import { createComponent } from './helpers/componentHelper';

const { MenuContainer, BasketContainer, configureStore } = createApp();
let store = {};

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
  store = configureStore(window.__INITIAL_STATE__);
}

ReactDOM.hydrate(
  createComponent(MenuContainer, store),
  document.querySelector('[data-menu]')
);

ReactDOM.hydrate(
  createComponent(BasketContainer, store),
  document.querySelector('[data-basket]')
);
