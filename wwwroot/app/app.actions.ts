import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class AppActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, appService, guid) {
        super($location,appService,dispatcher,guid,AddOrUpdateAppAction,AllAppsAction,RemoveAppAction,SetCurrentAppAction)
    }    
}


export class AddOrUpdateAppAction { constructor(public id, public entity) { } }

export class AllAppsAction { constructor(public id, public entities) { } }

export class RemoveAppAction { constructor(public id, public entity) { } }

export class AppsFilterAction { constructor(public id, public term) { } }

export class SetCurrentAppAction { constructor(public entity) { } }
