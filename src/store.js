import { combineReducers, createStore } from ''
import smartComponent from './state/smartComponent'

const reducer = combineReducers(
    smartComponent
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose


const store = createStore(
    reducer,
    composeEnhancers()
)
