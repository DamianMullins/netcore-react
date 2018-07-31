import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import { messages } from '../i18n';
import { Provider } from 'react-redux';

export const createComponent = (Container, store) => {
    addLocaleData([...en]);
    const locale = 'en-GB';

    const component = <Provider store={store}>
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Container />
        </IntlProvider>
    </Provider>;

    return component;
};
