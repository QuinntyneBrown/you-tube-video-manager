import { SetCurrentTabAction, TabChildLoadedAction } from "./tabs.actions";
import { addOrUpdate, pluckOut } from "../core";

export const setCurrentTabReducer = (state, action) => {
    if (action instanceof SetCurrentTabAction) {        
        state.tabIndex[action.tabName] = action.index;
        state.lastTriggeredByAction = SetCurrentTabAction;
    }
    return state;
}

export const tabChildLoadedReducer = (state, action) => {
    if (action instanceof TabChildLoadedAction) {
        state.lastTriggeredByAction = TabChildLoadedAction;
    }
    return state;
}
