import { createStore, applyMiddleware, combineReducers } from "redux";
import todoListReducer from './reducer/reducer'
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    todo_list: todoListReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk,logger));