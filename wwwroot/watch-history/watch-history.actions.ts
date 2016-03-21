import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class WatchHistoryActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, watchHistoryService, guid) {
        super($location,watchHistoryService,dispatcher,guid,AddOrUpdateWatchHistoryAction,AllWatchHistorysAction,RemoveWatchHistoryAction,SetCurrentWatchHistoryAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateWatchHistorySuccessAction(options.entity));

	currentWatchHistoryRemoved = () => this.dispatcher.dispatch(new CurrentWatchHistoryRemovedAction());
}


export class AddOrUpdateWatchHistoryAction { constructor(public id, public entity) { } }

export class AllWatchHistorysAction { constructor(public id, public entities) { } }

export class RemoveWatchHistoryAction { constructor(public id, public entity) { } }

export class WatchHistorysFilterAction { constructor(public id, public term) { } }

export class SetCurrentWatchHistoryAction { constructor(public entity) { } }

export class AddOrUpdateWatchHistorySuccessAction { constructor(public entity) { } }

export class CurrentWatchHistoryRemovedAction { constructor() { } }
