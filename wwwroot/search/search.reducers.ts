import * as actions from "./search.actions";

export const queryReducer = (state, action) => {
    if (action instanceof actions.SearchQueryAction) {
        state.searchResults = action.results.results;
        state.searchTerm = action.term;
        state.lastTriggeredByAction = actions.SearchQueryAction;
    }
    return state;
}