import { CanActivate, Component } from "../core/component-decorators";
import { FooterActionCreator } from "./footer.actions";

require("./footer.component.css");

@Component({
    templateUrl: "wwwroot/footer/footer.component.html",
    styleUrls: ["wwwroot/footer/footer.component.css"],
    selector: "footer",
    providers: ["footerActionCreator"]
})
export class FooterComponent {
    constructor(private footerActionCreator: FooterActionCreator) { }
  
}
