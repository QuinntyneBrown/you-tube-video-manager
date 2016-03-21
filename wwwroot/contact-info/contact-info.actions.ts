import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ContactInfoActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, contactInfoService, guid) {
        super($location,contactInfoService,dispatcher,guid,AddOrUpdateContactInfoAction,AllContactInfosAction,RemoveContactInfoAction,SetCurrentContactInfoAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateContactInfoSuccessAction(options.entity));

	currentContactInfoRemoved = () => this.dispatcher.dispatch(new CurrentContactInfoRemovedAction());
}


export class AddOrUpdateContactInfoAction { constructor(public id, public entity) { } }

export class AllContactInfosAction { constructor(public id, public entities) { } }

export class RemoveContactInfoAction { constructor(public id, public entity) { } }

export class ContactInfosFilterAction { constructor(public id, public term) { } }

export class SetCurrentContactInfoAction { constructor(public entity) { } }

export class AddOrUpdateContactInfoSuccessAction { constructor(public entity) { } }

export class CurrentContactInfoRemovedAction { constructor() { } }
