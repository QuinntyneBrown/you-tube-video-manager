import * as actions from "./you-tube-video.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeYouTubeVideoReducer = (state, action) => {
    if (action instanceof actions.RemoveYouTubeVideoAction)
        pluckOut({ items: state.youTubeVideos, value: action.entity.id });
    return state;
}

export const addYouTubeVideoReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateYouTubeVideoAction) {
        addOrUpdate({ items: state.youTubeVideos, item: action.entity });
    }
    return state;
}

export const allYouTubeVideosReducer = (state, action) => {
    if (action instanceof actions.AllYouTubeVideosAction) {
        state.youTubeVideos = action.entities;
    }
    return state;
}

export const setCurrentYouTubeVideoReducer = (state, action) => {
    if (action instanceof actions.SetCurrentYouTubeVideoAction) {
        state.currentYouTubeVideoId = action.id;
    }
    return state;
}
