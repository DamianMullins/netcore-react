const prerendering = require('aspnet-prerendering');
require('./intlPolyfill');

module.exports = ({ bundleName, setGlobalState = false }) => {
    const { bundleRenderer } = require(`../../../wwwroot/js/${bundleName}`);

    return prerendering.createServerRenderer(({ data }) => {
        return new Promise((resolve, reject) => {
            const html = bundleRenderer(data);

            if (!html) {
                reject('HTML content was empty.');
            }

            resolve({
                html,
                ...setGlobalState ? {
                    globals: {
                        // window.__INITIAL_STATE__ will be the initial state of the Redux store
                        __INITIAL_STATE__: setGlobalState && data
                    }
                } : {}
            });
        });
    });
};
