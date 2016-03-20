import * as actions from "./technology.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeTechnologyReducer = (state, action) => {
    if (action instanceof actions.RemoveTechnologyAction)
        pluckOut({ items: state.technologys, value: action.entity.id });
    return state;
}

export const addTechnologyReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateTechnologyAction) {
        addOrUpdate({ items: state.technologys, item: action.entity });
    }
    return state;
}

export const allTechnologysReducer = (state, action) => {
    if (action instanceof actions.AllTechnologysAction) {
        state.technologys = action.entities;
    }
    return state;
}

export const setCurrentTechnologyReducer = (state, action) => {
    if (action instanceof actions.SetCurrentTechnologyAction) {
        state.currentTechnologyId = action.id;
    }
    return state;
}
