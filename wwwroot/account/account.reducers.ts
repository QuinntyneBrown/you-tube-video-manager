import * as actions from "./account.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeAccountReducer = (state, action) => {
    if (action instanceof actions.RemoveAccountAction)
        pluckOut({ items: state.accounts, value: action.entity.id });
    return state;
}

export const addAccountReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateAccountAction) {
        addOrUpdate({ items: state.accounts, item: action.entity });
    }
    return state;
}

export const allAccountsReducer = (state, action) => {
    if (action instanceof actions.AllAccountsAction) {
        state.accounts = action.entities;
    }
    return state;
}

export const setCurrentAccountReducer = (state, action) => {
    if (action instanceof actions.SetCurrentAccountAction) {
        state.currentAccountId = action.id;
    }
    return state;
}
