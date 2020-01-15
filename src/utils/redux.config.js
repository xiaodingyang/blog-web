import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../redux/reducer/index';
import { createLogger } from 'redux-logger';
import reduxPromise from 'redux-promise';
// redux调试log中间件
let loggerMiddleware = createLogger();

export default function configStore(initialState) {
    const create = window.devToolsExtension
        ? window.devToolsExtension()(createStore)
        : createStore;

    const createStoreWithMiddleware = applyMiddleware(
        thunkMiddleware,
        // loggerMiddleware,
        reduxPromise
    )(create);

    return createStoreWithMiddleware(rootReducer, initialState);
}
