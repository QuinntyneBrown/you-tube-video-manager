import { CanActivate, Component } from "../core/component-decorators";
import { FooterActionCreator } from "./footer.actions";

@Component({
    templateUrl: "wwwroot/footer/footer.component.html",
    selector: "footer",
    providers: ["footerActionCreator"]
})
export class FooterComponent {
    constructor(private footerActionCreator: FooterActionCreator) { }
  
}
