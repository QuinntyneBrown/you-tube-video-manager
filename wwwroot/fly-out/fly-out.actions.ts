import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class FlyOutActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, flyOutService, guid) {
        super($location,flyOutService,dispatcher,guid,AddOrUpdateFlyOutAction,AllFlyOutsAction,RemoveFlyOutAction,SetCurrentFlyOutAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateFlyOutSuccessAction(options.entity));

	currentFlyOutRemoved = () => this.dispatcher.dispatch(new CurrentFlyOutRemovedAction());
}


export class AddOrUpdateFlyOutAction { constructor(public id, public entity) { } }

export class AllFlyOutsAction { constructor(public id, public entities) { } }

export class RemoveFlyOutAction { constructor(public id, public entity) { } }

export class FlyOutsFilterAction { constructor(public id, public term) { } }

export class SetCurrentFlyOutAction { constructor(public entity) { } }

export class AddOrUpdateFlyOutSuccessAction { constructor(public entity) { } }

export class CurrentFlyOutRemovedAction { constructor() { } }
