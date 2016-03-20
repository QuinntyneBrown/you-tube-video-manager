import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class PopoverActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, popoverService, guid) {
        super($location,popoverService,dispatcher,guid,AddOrUpdatePopoverAction,AllPopoversAction,RemovePopoverAction,SetCurrentPopoverAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdatePopoverSuccessAction(options.entity));

	currentPopoverRemoved = () => this.dispatcher.dispatch(new CurrentPopoverRemovedAction());
}


export class AddOrUpdatePopoverAction { constructor(public id, public entity) { } }

export class AllPopoversAction { constructor(public id, public entities) { } }

export class RemovePopoverAction { constructor(public id, public entity) { } }

export class PopoversFilterAction { constructor(public id, public term) { } }

export class SetCurrentPopoverAction { constructor(public entity) { } }

export class AddOrUpdatePopoverSuccessAction { constructor(public entity) { } }

export class CurrentPopoverRemovedAction { constructor() { } }
