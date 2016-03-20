import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class SearchActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, searchService, guid) {
        super($location,searchService,dispatcher,guid,AddOrUpdateSearchAction,AllSearchsAction,RemoveSearchAction,SetCurrentSearchAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateSearchSuccessAction(options.entity));

	currentSearchRemoved = () => this.dispatcher.dispatch(new CurrentSearchRemovedAction());
}


export class AddOrUpdateSearchAction { constructor(public id, public entity) { } }

export class AllSearchsAction { constructor(public id, public entities) { } }

export class RemoveSearchAction { constructor(public id, public entity) { } }

export class SearchsFilterAction { constructor(public id, public term) { } }

export class SetCurrentSearchAction { constructor(public entity) { } }

export class AddOrUpdateSearchSuccessAction { constructor(public entity) { } }

export class CurrentSearchRemovedAction { constructor() { } }
