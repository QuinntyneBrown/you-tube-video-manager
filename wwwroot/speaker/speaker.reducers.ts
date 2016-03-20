import * as actions from "./speaker.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeSpeakerReducer = (state, action) => {
    if (action instanceof actions.RemoveSpeakerAction)
        pluckOut({ items: state.speakers, value: action.entity.id });
    return state;
}

export const addSpeakerReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateSpeakerAction) {
        addOrUpdate({ items: state.speakers, item: action.entity });
    }
    return state;
}

export const allSpeakersReducer = (state, action) => {
    if (action instanceof actions.AllSpeakersAction) {
        state.speakers = action.entities;
    }
    return state;
}

export const setCurrentSpeakerReducer = (state, action) => {
    if (action instanceof actions.SetCurrentSpeakerAction) {
        state.currentSpeakerId = action.id;
    }
    return state;
}
