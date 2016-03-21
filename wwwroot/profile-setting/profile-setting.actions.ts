import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ProfileSettingActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, profileSettingService, guid) {
        super($location,profileSettingService,dispatcher,guid,AddOrUpdateProfileSettingAction,AllProfileSettingsAction,RemoveProfileSettingAction,SetCurrentProfileSettingAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateProfileSettingSuccessAction(options.entity));

	currentProfileSettingRemoved = () => this.dispatcher.dispatch(new CurrentProfileSettingRemovedAction());
}


export class AddOrUpdateProfileSettingAction { constructor(public id, public entity) { } }

export class AllProfileSettingsAction { constructor(public id, public entities) { } }

export class RemoveProfileSettingAction { constructor(public id, public entity) { } }

export class ProfileSettingsFilterAction { constructor(public id, public term) { } }

export class SetCurrentProfileSettingAction { constructor(public entity) { } }

export class AddOrUpdateProfileSettingSuccessAction { constructor(public entity) { } }

export class CurrentProfileSettingRemovedAction { constructor() { } }
