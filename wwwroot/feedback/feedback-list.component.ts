import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    templateUrl: "wwwroot/feedback/feedback-list.component.html",
	styleUrls: ["wwwroot/feedback/feedback-list.component.css"],
    selector: "feedback-list",
    inputs: ['entities','edit','remove']
})
export class FeedbackListComponent {
    constructor() { }     
}
