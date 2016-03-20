import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class TechnologyActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, technologyService, guid) {
        super($location,technologyService,dispatcher,guid,AddOrUpdateTechnologyAction,AllTechnologysAction,RemoveTechnologyAction,SetCurrentTechnologyAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateTechnologySuccessAction(options.entity));

	currentTechnologyRemoved = () => this.dispatcher.dispatch(new CurrentTechnologyRemovedAction());
}


export class AddOrUpdateTechnologyAction { constructor(public id, public entity) { } }

export class AllTechnologysAction { constructor(public id, public entities) { } }

export class RemoveTechnologyAction { constructor(public id, public entity) { } }

export class TechnologysFilterAction { constructor(public id, public term) { } }

export class SetCurrentTechnologyAction { constructor(public entity) { } }

export class AddOrUpdateTechnologySuccessAction { constructor(public entity) { } }

export class CurrentTechnologyRemovedAction { constructor() { } }
