import { combineReducers, createStore } from "redux";
import { arrowsReducer } from "./arrowsReducer";
import { cellsReducer } from "./cellsReducer";

export const rootReducer = combineReducers({
    cells: cellsReducer,
    arrows: arrowsReducer
})

export const store = createStore(rootReducer);

export type RootReducerType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store