import { renderToString } from 'react-dom/server';
import { createComponent } from './componentHelper';

export const componentToString = (Container, configureStore, context) => {
    const store = configureStore(context);
    const Component = createComponent(Container, store);
    const content = renderToString(Component);

    return content;
};
