import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { RegistrationActionCreator } from "./registration.actions";
import { LoginActionCreator } from "../login/login.actions";
import * as actions from "./registration.actions";

@Component({
    templateUrl: "wwwroot/registration/registration-page.component.html",
    styleUrls: ["wwwroot/registration/registration-page.component.css"],
    selector: "registration-page",
    providers: [ "$location", "invokeAsync", "loginActionCreator", "loginRedirect", "registrationActionCreator" ]
})
export class RegistrationPageComponent {
    constructor(private $location: angular.ILocationService,
        private invokeAsync,
        private loginActionCreator: LoginActionCreator,
        private loginRedirect,
        private registrationActionCreator: RegistrationActionCreator) { }


    onRegistrationSuccess = (options) => {
        this.invokeAsync({
            action: this.loginActionCreator.tryToLogin,
            params: {
                username: options.emailAddress,
                password: options.password
            }
        }).then(() => {
            this.loginRedirect.redirectPreLogin();
        });
    }

    tryToRegister = options => {
        this.invokeAsync({
            action: this.registrationActionCreator.register,
            params: {
                data: options.entity
            }
        }).then(() => {
            this.onRegistrationSuccess({ entity: options.entity });
        });
    }

}
