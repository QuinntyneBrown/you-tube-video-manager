import * as actions from "./tag.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeTagReducer = (state, action) => {
    if (action instanceof actions.RemoveTagAction)
        pluckOut({ items: state.tags, value: action.entity.id });
    return state;
}

export const addTagReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateTagAction) {
        addOrUpdate({ items: state.tags, item: action.entity });
    }
    return state;
}

export const allTagsReducer = (state, action) => {
    if (action instanceof actions.AllTagsAction) {
        state.tags = action.entities;
    }
    return state;
}

export const setCurrentTagReducer = (state, action) => {
    if (action instanceof actions.SetCurrentTagAction) {
        state.currentTagId = action.id;
    }
    return state;
}
