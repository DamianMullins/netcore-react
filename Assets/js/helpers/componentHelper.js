import React from 'react';
import { IntlProvider, messages } from '../i18n';
import { Provider } from 'react-redux';

export const createComponent = (Container, store) => {
    const { locale } = store.getState();

    const component = <Provider store={store}>
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Container />
        </IntlProvider>
    </Provider>;

    return component;
};
