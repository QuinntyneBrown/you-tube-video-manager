import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { LoginActionCreator } from "./login.actions";

@Component({
    templateUrl: "wwwroot/login/login.component.html",
    selector: "login",
    providers: ["invokeAsync", "loginActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
    constructor(private invokeAsync, private loginActionCreator: LoginActionCreator) {
        loginActionCreator.logOut();
    }
    
    tryToLogin = () => {
        this.invokeAsync({
            action: this.loginActionCreator.tryToLogin,
            params: { username: this.username, password: this.password }
        }).then(results => {
            this.loginActionCreator.loginSuccess();
        });
    }

    username;
    password;
}
