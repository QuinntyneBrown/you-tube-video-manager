import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class HomePageActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, homePageService, guid) {
        super($location,homePageService,dispatcher,guid,AddOrUpdateHomePageAction,AllHomePagesAction,RemoveHomePageAction,SetCurrentHomePageAction)
    }    
}


export class AddOrUpdateHomePageAction { constructor(public id, public entity) { } }

export class AllHomePagesAction { constructor(public id, public entities) { } }

export class RemoveHomePageAction { constructor(public id, public entity) { } }

export class HomePagesFilterAction { constructor(public id, public term) { } }

export class SetCurrentHomePageAction { constructor(public entity) { } }
