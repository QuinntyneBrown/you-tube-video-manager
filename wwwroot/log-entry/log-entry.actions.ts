import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class LogEntryActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, logEntryService, guid) {
        super($location,logEntryService,dispatcher,guid,AddOrUpdateLogEntryAction,AllLogEntrysAction,RemoveLogEntryAction,SetCurrentLogEntryAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateLogEntrySuccessAction(options.entity));

	currentLogEntryRemoved = () => this.dispatcher.dispatch(new CurrentLogEntryRemovedAction());
}


export class AddOrUpdateLogEntryAction { constructor(public id, public entity) { } }

export class AllLogEntrysAction { constructor(public id, public entities) { } }

export class RemoveLogEntryAction { constructor(public id, public entity) { } }

export class LogEntrysFilterAction { constructor(public id, public term) { } }

export class SetCurrentLogEntryAction { constructor(public entity) { } }

export class AddOrUpdateLogEntrySuccessAction { constructor(public entity) { } }

export class CurrentLogEntryRemovedAction { constructor() { } }
