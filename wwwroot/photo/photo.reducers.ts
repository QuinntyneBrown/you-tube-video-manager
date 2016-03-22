import * as actions from "./photo.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removePhotoReducer = (state, action) => {
    if (action instanceof actions.RemovePhotoAction)
        pluckOut({ items: state.photos, value: action.entity.id });
    return state;
}

export const addPhotoReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdatePhotoAction) {
        addOrUpdate({ items: state.photos, item: action.entity });
    }
    return state;
}

export const allPhotosReducer = (state, action) => {
    if (action instanceof actions.AllPhotosAction) {
        state.photos = action.entities;
    }
    return state;
}

export const setCurrentPhotoReducer = (state, action) => {
    if (action instanceof actions.SetCurrentPhotoAction) {
        state.currentPhotoId = action.id;
    }
    return state;
}
