import * as actions from "./log-entry.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeLogEntryReducer = (state, action) => {
    if (action instanceof actions.RemoveLogEntryAction)
        pluckOut({ items: state.logEntrys, value: action.entity.id });
    return state;
}

export const addLogEntryReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateLogEntryAction) {
        addOrUpdate({ items: state.logEntrys, item: action.entity });
    }
    return state;
}

export const allLogEntrysReducer = (state, action) => {
    if (action instanceof actions.AllLogEntrysAction) {
        state.logEntrys = action.entities;
    }
    return state;
}

export const setCurrentLogEntryReducer = (state, action) => {
    if (action instanceof actions.SetCurrentLogEntryAction) {
        state.currentLogEntryId = action.id;
    }
    return state;
}
