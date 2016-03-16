import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./login.actions";

@Component({
    templateUrl: "wwwroot/login/login-page.component.html",
    selector: "login-page",
    providers: ["loginRedirect"]
})
export class LoginPageComponent {
    constructor(private loginRedirect) { }

    storeOnChange = state => {
        if (state.lastTriggeredByAction instanceof actions.LoginSuccessAction) {            
            this.loginRedirect.redirectPreLogin()
        }
    }
}
