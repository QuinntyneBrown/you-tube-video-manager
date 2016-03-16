import { CanActivate, Component } from "../core/component-decorators";
import { RegistrationActionCreator } from "./registration.actions";
import { LoginActionCreator } from "../login/login.actions";
import * as actions from "./registration.actions";

@Component({
    templateUrl: "wwwroot/registration/registration-page.component.html",
    styleUrls: ["wwwroot/registration/registration-page.component.css"],
    selector: "registration-page",
    providers: [ "$location", "invokeAsync", "loginActionCreator", "registrationActionCreator" ]
})
export class RegistrationPageComponent {
    constructor(private $location: angular.ILocationService,
        private invokeAsync,
        private loginActionCreator: LoginActionCreator,
        private registrationActionCreator: RegistrationActionCreator) { }

    storeOnChange = state => {
        if (state.lastTriggeredByAction instanceof actions.RegistrationSuccess) { this.onRegistrationSuccess(state.lastTriggeredByAction.entity) }
    }

    onRegistrationSuccess = (options) => {
        this.invokeAsync({
            action: this.loginActionCreator.tryToLogin,
            params: {
                username: options.emailAddress,
                password: options.password
            }
        }).then(() => {
            this.$location.path("/websites");
        });
    }

}
