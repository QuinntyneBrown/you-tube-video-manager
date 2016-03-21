import * as actions from "./fly-out.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeFlyOutReducer = (state, action) => {
    if (action instanceof actions.RemoveFlyOutAction)
        pluckOut({ items: state.flyOuts, value: action.entity.id });
    return state;
}

export const addFlyOutReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateFlyOutAction) {
        addOrUpdate({ items: state.flyOuts, item: action.entity });
    }
    return state;
}

export const allFlyOutsReducer = (state, action) => {
    if (action instanceof actions.AllFlyOutsAction) {
        state.flyOuts = action.entities;
    }
    return state;
}

export const setCurrentFlyOutReducer = (state, action) => {
    if (action instanceof actions.SetCurrentFlyOutAction) {
        state.currentFlyOutId = action.id;
    }
    return state;
}
