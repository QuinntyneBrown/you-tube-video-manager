import { CanActivate, Component } from "../core/component-decorators";
import { FeedbackActionCreator } from "./feedback.actions";
import * as store from "../core/store";
import * as modal from "../modal/modal.actions";

require("./feedback-modal.component.css");

@Component({
    templateUrl: "wwwroot/feedback/feedback-modal.component.html",
    styleUrls: ["wwwroot/feedback/feedback-modal.component.css"],
    selector: "feedback-modal",
    providers: ["dispatcher"]
})
export class FeedbackModalComponent {
    constructor(private dispatcher: store.IDispatcher) {

    }

    closeModal = () => this.dispatcher.dispatch(new modal.CloseModalAction());
}
