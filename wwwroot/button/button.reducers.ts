import * as actions from "./button.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeButtonReducer = (state, action) => {
    if (action instanceof actions.RemoveButtonAction)
        pluckOut({ items: state.buttons, value: action.entity.id });
    return state;
}

export const addButtonReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateButtonAction) {
        addOrUpdate({ items: state.buttons, item: action.entity });
    }
    return state;
}

export const allButtonsReducer = (state, action) => {
    if (action instanceof actions.AllButtonsAction) {
        state.buttons = action.entities;
    }
    return state;
}
