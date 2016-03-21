import * as actions from "./profile.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeProfileReducer = (state, action) => {
    if (action instanceof actions.RemoveProfileAction)
        pluckOut({ items: state.profiles, value: action.entity.id });
    return state;
}

export const addProfileReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateProfileAction) {
        addOrUpdate({ items: state.profiles, item: action.entity });
    }
    return state;
}

export const allProfilesReducer = (state, action) => {
    if (action instanceof actions.AllProfilesAction) {
        state.profiles = action.entities;
    }
    return state;
}

export const setCurrentProfileReducer = (state, action) => {
    if (action instanceof actions.SetCurrentProfileAction) {
        state.currentProfileId = action.id;
    }
    return state;
}
