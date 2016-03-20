import * as actions from "./modal.actions";
import { addOrUpdate, pluckOut } from "../core";


export const openModalReducer = (state, action) => {
    if (action instanceof actions.OpenModalAction) {
        state.modalHtml = action.options.html;
        state.modalEntity = action.options.entity;
        state.isModalOpen = true;
    }
    return state;
}

export const closeModalReducer = (state, action) => {
    if (action instanceof actions.CloseModalAction) {
        delete state.modalHtml;
        delete state.modalEntity;
        state.isModalOpen = false;
    }
    return state;
}


