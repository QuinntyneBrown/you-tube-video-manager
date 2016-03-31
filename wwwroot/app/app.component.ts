import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { AppActionCreator } from "./app.actions";

require("./app.component.css");

@Component({
    templateUrl: "wwwroot/app/app.component.html",
    styleUrls: ["wwwroot/app/app.component.css"],
    selector: "app",
    viewProviders: ["appActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    constructor(private appActionCreator: AppActionCreator) { }
  
}
