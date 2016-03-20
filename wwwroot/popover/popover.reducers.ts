import * as actions from "./popover.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removePopoverReducer = (state, action) => {
    if (action instanceof actions.RemovePopoverAction)
        pluckOut({ items: state.popovers, value: action.entity.id });
    return state;
}

export const addPopoverReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdatePopoverAction) {
        addOrUpdate({ items: state.popovers, item: action.entity });
    }
    return state;
}

export const allPopoversReducer = (state, action) => {
    if (action instanceof actions.AllPopoversAction) {
        state.popovers = action.entities;
    }
    return state;
}

export const setCurrentPopoverReducer = (state, action) => {
    if (action instanceof actions.SetCurrentPopoverAction) {
        state.currentPopoverId = action.id;
    }
    return state;
}
