import * as actions from "./search.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeSearchReducer = (state, action) => {
    if (action instanceof actions.RemoveSearchAction)
        pluckOut({ items: state.searchs, value: action.entity.id });
    return state;
}

export const addSearchReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateSearchAction) {
        addOrUpdate({ items: state.searchs, item: action.entity });
    }
    return state;
}

export const allSearchsReducer = (state, action) => {
    if (action instanceof actions.AllSearchsAction) {
        state.searchs = action.entities;
    }
    return state;
}

export const setCurrentSearchReducer = (state, action) => {
    if (action instanceof actions.SetCurrentSearchAction) {
        state.currentSearchId = action.id;
    }
    return state;
}
