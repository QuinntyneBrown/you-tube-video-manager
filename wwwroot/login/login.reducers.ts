import * as actions from "./login.actions";
import { addOrUpdate, pluckOut } from "../core";

export const loggedInReducer = (state, action) => {
    if (action instanceof actions.UserLoggedInAction) {
        state.token = action.data.access_token;
    }
    return state;
}
