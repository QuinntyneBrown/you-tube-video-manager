import * as actions from "./modal.actions";
import { addOrUpdate, pluckOut } from "../core";


export const openModalReducer = (state, action) => {
    if (action instanceof actions.OpenModalAction) {
        state.modalHtml = action.html;
        state.isModalOpen = true;
    }
    return state;
}

export const closeModalReducer = (state, action) => {
    if (action instanceof actions.CloseModalAction) {
        state.modalHtml = '';
        state.isModalOpen = false;
    }
    return state;
}


