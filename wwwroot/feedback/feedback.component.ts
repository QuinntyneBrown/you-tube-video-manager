import { CanActivate, Component } from "../core/component-decorators";
import { FeedbackActionCreator } from "./feedback.actions";

require("./feedback.component.css");

@Component({
    templateUrl: "wwwroot/feedback/feedback.component.html",
	styleUrls: ["wwwroot/feedback/feedback.component.css"],
    selector: "feedback",
    providers: ["feedbackActionCreator"]
})
export class FeedbackComponent {
    constructor(private feedbackActionCreator: FeedbackActionCreator) { }
  
}
