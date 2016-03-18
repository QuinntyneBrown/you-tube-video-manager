import * as actions from "./feedback.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeFeedbackReducer = (state, action) => {
    if (action instanceof actions.RemoveFeedbackAction)
        pluckOut({ items: state.feedbacks, value: action.entity.id });
    return state;
}

export const addFeedbackReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateFeedbackAction) {
        addOrUpdate({ items: state.feedbacks, item: action.entity });
    }
    return state;
}

export const allFeedbacksReducer = (state, action) => {
    if (action instanceof actions.AllFeedbacksAction) {
        state.feedbacks = action.entities;
    }
    return state;
}

export const setCurrentFeedbackReducer = (state, action) => {
    if (action instanceof actions.SetCurrentFeedbackAction) {
        state.currentFeedbackId = action.id;
    }
    return state;
}
