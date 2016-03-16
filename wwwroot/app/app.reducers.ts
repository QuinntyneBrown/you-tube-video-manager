import * as actions from "./app.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeAppReducer = (state, action) => {
    if (action instanceof actions.RemoveAppAction)
        pluckOut({ items: state.apps, value: action.entity.id });
    return state;
}

export const addAppReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateAppAction) {
        addOrUpdate({ items: state.apps, item: action.entity });
    }
    return state;
}

export const allAppsReducer = (state, action) => {
    if (action instanceof actions.AllAppsAction) {
        state.apps = action.entities;
    }
    return state;
}
