import { CanActivate, Component } from "../core/component-decorators";
import { HeaderActionCreator } from "./header.actions";
require('./header.component.css');

@Component({
    templateUrl: "wwwroot/header/header.component.html",
    selector: "header",
    providers: ["headerActionCreator"]
})
export class HeaderComponent {
    constructor(private headerActionCreator: HeaderActionCreator) { }  
    storeOnChange = state => this.currentUser = state.currentUser;
    openFeedbackModal = this.headerActionCreator.openFeedbackModal;
    currentUser;
}
