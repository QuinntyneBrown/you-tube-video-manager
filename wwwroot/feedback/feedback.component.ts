import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { FeedbackActionCreator } from "./feedback.actions";

require("./feedback.component.css");

@Component({
    templateUrl: "wwwroot/feedback/feedback.component.html",
	styleUrls: ["wwwroot/feedback/feedback.component.css"],
    selector: "feedback",
    viewProviders: ["feedbackActionCreator"]
})
export class FeedbackComponent {
    constructor(private feedbackActionCreator: FeedbackActionCreator) { }
  
}
