import * as actions from "./home-page.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeHomePageReducer = (state, action) => {
    if (action instanceof actions.RemoveHomePageAction)
        pluckOut({ items: state.homePages, value: action.entity.id });
    return state;
}

export const addHomePageReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateHomePageAction) {
        addOrUpdate({ items: state.homePages, item: action.entity });
    }
    return state;
}

export const allHomePagesReducer = (state, action) => {
    if (action instanceof actions.AllHomePagesAction) {
        state.homePages = action.entities;
    }
    return state;
}
