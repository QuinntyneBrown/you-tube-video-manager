import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import * as actions from "./login.actions";

require("./login-container.component.css");

@Component({
    templateUrl: "wwwroot/login/login-container.component.html",
    styleUrls: ["wwwroot/login/login-container.component.html"],
    selector: "login-container",
    providers: ["loginRedirect"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent {
    constructor(private loginRedirect) { }

    storeOnChange = state => {
        if (state.lastTriggeredByAction instanceof actions.LoginSuccessAction) {            
            this.loginRedirect.redirectPreLogin()
        }
    }
}
