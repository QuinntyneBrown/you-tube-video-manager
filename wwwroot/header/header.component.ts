import { CanActivate, Component } from "../core/component-decorators";
import { HeaderActionCreator } from "./header.actions";

@Component({
    templateUrl: "wwwroot/header/header.component.html",
    selector: "header",
    providers: ["headerActionCreator"]
})
export class HeaderComponent {
    constructor(private headerActionCreator: HeaderActionCreator) { }
  
}
