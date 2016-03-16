import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class FooterActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, footerService, guid) {
        super($location,footerService,dispatcher,guid,AddOrUpdateFooterAction,AllFootersAction,RemoveFooterAction,SetCurrentFooterAction)
    }    
}


export class AddOrUpdateFooterAction { constructor(public id, public entity) { } }

export class AllFootersAction { constructor(public id, public entities) { } }

export class RemoveFooterAction { constructor(public id, public entity) { } }

export class FootersFilterAction { constructor(public id, public term) { } }

export class SetCurrentFooterAction { constructor(public entity) { } }
