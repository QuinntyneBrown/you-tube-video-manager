import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ProfileActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, profileService, guid) {
        super($location,profileService,dispatcher,guid,AddOrUpdateProfileAction,AllProfilesAction,RemoveProfileAction,SetCurrentProfileAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateProfileSuccessAction(options.entity));

	currentProfileRemoved = () => this.dispatcher.dispatch(new CurrentProfileRemovedAction());
}


export class AddOrUpdateProfileAction { constructor(public id, public entity) { } }

export class AllProfilesAction { constructor(public id, public entities) { } }

export class RemoveProfileAction { constructor(public id, public entity) { } }

export class ProfilesFilterAction { constructor(public id, public term) { } }

export class SetCurrentProfileAction { constructor(public entity) { } }

export class AddOrUpdateProfileSuccessAction { constructor(public entity) { } }

export class CurrentProfileRemovedAction { constructor() { } }
