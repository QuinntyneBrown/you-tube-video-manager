import { CanActivate, Component } from "../core/component-decorators";
import { AppActionCreator } from "./app.actions";

@Component({
    templateUrl: "wwwroot/app/app.component.html",
    selector: "app",
    providers: ["appActionCreator"]
})
export class AppComponent {
    constructor(private appActionCreator: AppActionCreator) { }
  
}
