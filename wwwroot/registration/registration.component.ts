import { CanActivate, Component } from "../core/component-decorators";
import { RegistrationActionCreator } from "./registration.actions";

@Component({
    templateUrl: "wwwroot/registration/registration.component.html",
    styleUrls: ["wwwroot/registration/registration.component.css"],
    selector: "registration",
    inputs: ["tryToRegister"]

})
export class RegistrationComponent { }
