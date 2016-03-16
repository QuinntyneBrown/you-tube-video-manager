import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";
import { RegistrationService } from "./registration.service";

export class RegistrationActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, registrationService: RegistrationService, guid) {
        super($location,registrationService,dispatcher,guid,AddOrUpdateRegistrationAction,AllRegistrationsAction,RemoveRegistrationAction,SetCurrentRegistrationAction)
    }    

    public register = options => {
        var newId = this.guid();
        this.service.register({ data: options.data }).then(results => {
            var action = new RegisteredAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId
    }

    public registrationSuccess = options => this.dispatcher.dispatch(new RegistrationSuccess(options.entity));
    
    service: RegistrationService;
}

export class RegisteredAction { constructor(public id, public entity) { } }

export class AddOrUpdateRegistrationAction { constructor(public id, public entity) { } }

export class AllRegistrationsAction { constructor(public id, public entities) { } }

export class RemoveRegistrationAction { constructor(public id, public entity) { } }

export class RegistrationsFilterAction { constructor(public id, public term) { } }

export class SetCurrentRegistrationAction { constructor(public entity) { } }

export class RegistrationSuccess { constructor(public entity) { } }
