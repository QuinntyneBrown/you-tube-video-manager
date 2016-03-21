import * as actions from "./contact-info.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeContactInfoReducer = (state, action) => {
    if (action instanceof actions.RemoveContactInfoAction)
        pluckOut({ items: state.contactInfos, value: action.entity.id });
    return state;
}

export const addContactInfoReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateContactInfoAction) {
        addOrUpdate({ items: state.contactInfos, item: action.entity });
    }
    return state;
}

export const allContactInfosReducer = (state, action) => {
    if (action instanceof actions.AllContactInfosAction) {
        state.contactInfos = action.entities;
    }
    return state;
}

export const setCurrentContactInfoReducer = (state, action) => {
    if (action instanceof actions.SetCurrentContactInfoAction) {
        state.currentContactInfoId = action.id;
    }
    return state;
}
