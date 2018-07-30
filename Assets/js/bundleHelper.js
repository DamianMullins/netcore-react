import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

export default (Container, configureStore, context) => {
    const store = configureStore(context);

    const content = renderToString(
        <Provider store={store}>
            <Container />
        </Provider>
    );

    return content;
};
