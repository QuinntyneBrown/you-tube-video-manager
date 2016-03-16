import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class HeaderActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, headerService, guid) {
        super($location,headerService,dispatcher,guid,AddOrUpdateHeaderAction,AllHeadersAction,RemoveHeaderAction,SetCurrentHeaderAction)
    }    
}


export class AddOrUpdateHeaderAction { constructor(public id, public entity) { } }

export class AllHeadersAction { constructor(public id, public entities) { } }

export class RemoveHeaderAction { constructor(public id, public entity) { } }

export class HeadersFilterAction { constructor(public id, public term) { } }

export class SetCurrentHeaderAction { constructor(public entity) { } }
