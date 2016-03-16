import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ButtonActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, buttonService, guid) {
        super($location,buttonService,dispatcher,guid,AddOrUpdateButtonAction,AllButtonsAction,RemoveButtonAction,SetCurrentButtonAction)
    }    
}


export class AddOrUpdateButtonAction { constructor(public id, public entity) { } }

export class AllButtonsAction { constructor(public id, public entities) { } }

export class RemoveButtonAction { constructor(public id, public entity) { } }

export class ButtonsFilterAction { constructor(public id, public term) { } }

export class SetCurrentButtonAction { constructor(public entity) { } }
