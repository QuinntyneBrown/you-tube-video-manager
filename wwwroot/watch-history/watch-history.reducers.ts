import * as actions from "./watch-history.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeWatchHistoryReducer = (state, action) => {
    if (action instanceof actions.RemoveWatchHistoryAction)
        pluckOut({ items: state.watchHistorys, value: action.entity.id });
    return state;
}

export const addWatchHistoryReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateWatchHistoryAction) {
        addOrUpdate({ items: state.watchHistorys, item: action.entity });
    }
    return state;
}

export const allWatchHistorysReducer = (state, action) => {
    if (action instanceof actions.AllWatchHistorysAction) {
        state.watchHistorys = action.entities;
    }
    return state;
}

export const setCurrentWatchHistoryReducer = (state, action) => {
    if (action instanceof actions.SetCurrentWatchHistoryAction) {
        state.currentWatchHistoryId = action.id;
    }
    return state;
}
