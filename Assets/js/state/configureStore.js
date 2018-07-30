import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const loggerMiddleware = createLogger()

export default function configureStore (preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware, // lets us dispatch() functions
                loggerMiddleware // neat middleware that logs actions
            )
        )
    )
}
