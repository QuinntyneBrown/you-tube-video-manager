import * as actions from "./talk.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeTalkReducer = (state, action) => {
    if (action instanceof actions.RemoveTalkAction)
        pluckOut({ items: state.talks, value: action.entity.id });
    return state;
}

export const addTalkReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateTalkAction) {
        addOrUpdate({ items: state.talks, item: action.entity });
    }
    return state;
}

export const allTalksReducer = (state, action) => {
    if (action instanceof actions.AllTalksAction) {
        state.talks = action.entities;
    }
    return state;
}

export const setCurrentTalkReducer = (state, action) => {
    if (action instanceof actions.SetCurrentTalkAction) {
        state.currentTalkId = action.id;
    }
    return state;
}
