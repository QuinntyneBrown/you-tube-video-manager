import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { IDispatcher } from "../core/store";
import * as actions from "../modal/modal.actions";

import { HeaderActionCreator } from "./header.actions";
require('./header.component.css');

@Component({
    templateUrl: "wwwroot/header/header.component.html",
    styleUrls: ["wwwroot/header/header.component.css"],
    selector: "header",
    providers: ["dispatcher","headerActionCreator"]
})
export class HeaderComponent {
    constructor(private dispatcher: IDispatcher, private headerActionCreator: HeaderActionCreator) { }  
    storeOnChange = state => this.currentUser = state.currentUser;
    openFeedbackModal = () => {        
        this.dispatcher.dispatch(new actions.OpenModalAction({
            html: "<feedback-modal></feedback-modal>"
        }));
    }
    currentUser;
}
