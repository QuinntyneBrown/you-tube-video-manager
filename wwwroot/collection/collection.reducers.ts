import * as actions from "./collection.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeCollectionReducer = (state, action) => {
    if (action instanceof actions.RemoveCollectionAction)
        pluckOut({ items: state.collections, value: action.entity.id });
    return state;
}

export const addCollectionReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateCollectionAction) {
        addOrUpdate({ items: state.collections, item: action.entity });
    }
    return state;
}

export const allCollectionsReducer = (state, action) => {
    if (action instanceof actions.AllCollectionsAction) {
        state.collections = action.entities;
    }
    return state;
}

export const setCurrentCollectionReducer = (state, action) => {
    if (action instanceof actions.SetCurrentCollectionAction) {
        state.currentCollectionId = action.id;
    }
    return state;
}
