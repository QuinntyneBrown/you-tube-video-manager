import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class BackdropActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, backdropService, guid) {
        super($location,backdropService,dispatcher,guid,AddOrUpdateBackdropAction,AllBackdropsAction,RemoveBackdropAction,SetCurrentBackdropAction)
    }    
}


export class AddOrUpdateBackdropAction { constructor(public id, public entity) { } }

export class AllBackdropsAction { constructor(public id, public entities) { } }

export class RemoveBackdropAction { constructor(public id, public entity) { } }

export class BackdropsFilterAction { constructor(public id, public term) { } }

export class SetCurrentBackdropAction { constructor(public entity) { } }
