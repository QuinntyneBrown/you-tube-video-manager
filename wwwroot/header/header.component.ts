import { CanActivate, Component } from "../core/component-decorators";
import { IDispatcher } from "../core/store";
import * as actions from "../modal/modal.actions";

import { HeaderActionCreator } from "./header.actions";
require('./header.component.css');

@Component({
    templateUrl: "wwwroot/header/header.component.html",
    selector: "header",
    providers: ["dispatcher","headerActionCreator"]
})
export class HeaderComponent {
    constructor(private dispatcher: IDispatcher, private headerActionCreator: HeaderActionCreator) { }  
    storeOnChange = state => this.currentUser = state.currentUser;
    openFeedbackModal = () => {        
        this.dispatcher.dispatch(new actions.OpenModalAction("<feedback-modal></feedback-modal>"));
    }
    currentUser;
}
