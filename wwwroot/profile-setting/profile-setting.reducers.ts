import * as actions from "./profile-setting.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeProfileSettingReducer = (state, action) => {
    if (action instanceof actions.RemoveProfileSettingAction)
        pluckOut({ items: state.profileSettings, value: action.entity.id });
    return state;
}

export const addProfileSettingReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateProfileSettingAction) {
        addOrUpdate({ items: state.profileSettings, item: action.entity });
    }
    return state;
}

export const allProfileSettingsReducer = (state, action) => {
    if (action instanceof actions.AllProfileSettingsAction) {
        state.profileSettings = action.entities;
    }
    return state;
}

export const setCurrentProfileSettingReducer = (state, action) => {
    if (action instanceof actions.SetCurrentProfileSettingAction) {
        state.currentProfileSettingId = action.id;
    }
    return state;
}
