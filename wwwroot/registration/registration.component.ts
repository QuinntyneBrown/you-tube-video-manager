import { CanActivate, Component } from "../core/component-decorators";
import { RegistrationActionCreator } from "./registration.actions";

@Component({
    templateUrl: "wwwroot/registration/registration.component.html",
    styleUrls: ["wwwroot/registration/registration.component.css"],
    selector: "registration",
    providers: ["invokeAsync","registrationActionCreator"]
  
})
export class RegistrationComponent {
    constructor(private invokeAsync, private registrationActionCreator: RegistrationActionCreator) { }
  
    tryToRegister = () => {  
        this.invokeAsync({
            action: this.registrationActionCreator.register,
            params: {
                data: this.entity
            }
        }).then(() => {
            this.registrationActionCreator.registrationSuccess({ entity: this.entity });
        });     
    }

    entity;
}
