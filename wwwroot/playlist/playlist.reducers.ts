import * as actions from "./playlist.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removePlaylistReducer = (state, action) => {
    if (action instanceof actions.RemovePlaylistAction)
        pluckOut({ items: state.playlists, value: action.entity.id });
    return state;
}

export const addPlaylistReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdatePlaylistAction) {
        addOrUpdate({ items: state.playlists, item: action.entity });
    }
    return state;
}

export const allPlaylistsReducer = (state, action) => {
    if (action instanceof actions.AllPlaylistsAction) {
        state.playlists = action.entities;
    }
    return state;
}

export const setCurrentPlaylistReducer = (state, action) => {
    if (action instanceof actions.SetCurrentPlaylistAction) {
        state.currentPlaylistId = action.id;
    }
    return state;
}
