import { CanActivate, Component } from "../core/component-decorators";
import { FeedbackActionCreator } from "./feedback.actions";

require("./feedback-modal.component.css");

@Component({
    templateUrl: "wwwroot/feedback/feedback-modal.component.html",
    styleUrls: ["wwwroot/feedback/feedback-modal.component.css"],
    selector: "feedback-modal",
    providers: []
})
export class FeedbackModalComponent { }
