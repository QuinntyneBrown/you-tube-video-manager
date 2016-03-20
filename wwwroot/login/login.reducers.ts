import * as actions from "./login.actions";
import { addOrUpdate, pluckOut } from "../core";

export const loggedInReducer = (state, action) => {
    if (action instanceof actions.UserLoggedInAction) {
        state.token = action.data.access_token;
    }
    return state;
}

export const currentUserReducer = (state, action) => {
    if (action instanceof actions.CurrentUserAction) {
        state.currentUser = action.user;
    }
    return state;
}

export const loggedOutReducer = (state, action) => {
    if (action instanceof actions.UserLoggedOutAction) {
        state.currentUser = null;
        state.access_token = null;
    }
    return state;
}

