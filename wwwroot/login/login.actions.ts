import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";
import { LoginService } from "./login.service";

export class LoginActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, loginService: LoginService, guid) {
        super($location,loginService,dispatcher,guid,AddOrUpdateLoginAction,AllLoginsAction,RemoveLoginAction,SetCurrentLoginAction)
    }    

    tryToLogin = options => {
        var newId = this.guid();
        this.service.tryToLogin({
            data: {
                username: options.username,
                password: options.password
            }
        }).then(results => {
            this.dispatcher.dispatch(new UserLoggedInAction(newId, results));
        });
        return newId;
    }

    loginSuccess = () => this.dispatcher.dispatch(new LoginSuccessAction()); 

    service: LoginService;
}

export class LoginSuccessAction { constructor() { } }

export class UserLoggedInAction { constructor(public id, public data) { } }

export class AddOrUpdateLoginAction { constructor(public id, public entity) { } }

export class AllLoginsAction { constructor(public id, public entities) { } }

export class RemoveLoginAction { constructor(public id, public entity) { } }

export class LoginsFilterAction { constructor(public id, public term) { } }

export class SetCurrentLoginAction { constructor(public entity) { } }
