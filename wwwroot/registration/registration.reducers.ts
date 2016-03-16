import * as actions from "./registration.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeRegistrationReducer = (state, action) => {
    if (action instanceof actions.RemoveRegistrationAction)
        pluckOut({ items: state.registrations, value: action.entity.id });
    return state;
}

export const addRegistrationReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateRegistrationAction) {
        addOrUpdate({ items: state.registrations, item: action.entity });
    }
    return state;
}

export const allRegistrationsReducer = (state, action) => {
    if (action instanceof actions.AllRegistrationsAction) {
        state.registrations = action.entities;
    }
    return state;
}

export const registrationSuccessReducer = (state, action) => {
    if (action instanceof actions.RegistrationSuccess) {
        state.lastTriggeredByAction = action;
    }
    return state;
}
