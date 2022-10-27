import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {persistStore,persistReducer} from "redux-persist"
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import storage from 'redux-persist/lib/storage'
import { createWhitelistFilter } from 'redux-persist-transform-filter'

const persistConfig = {
    key:"root",
    storage,
    whitelist:"general",
    transforms: [createWhitelistFilter("general", ["user_data"])]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(persistedReducer, composedEnhancer)

const persistor = persistStore(store);

export {persistor,store}