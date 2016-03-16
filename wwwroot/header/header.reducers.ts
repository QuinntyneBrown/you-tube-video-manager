import * as actions from "./header.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeHeaderReducer = (state, action) => {
    if (action instanceof actions.RemoveHeaderAction)
        pluckOut({ items: state.headers, value: action.entity.id });
    return state;
}

export const addHeaderReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateHeaderAction) {
        addOrUpdate({ items: state.headers, item: action.entity });
    }
    return state;
}

export const allHeadersReducer = (state, action) => {
    if (action instanceof actions.AllHeadersAction) {
        state.headers = action.entities;
    }
    return state;
}
