import { CanActivate, Component } from "../core/component-decorators";

@Component({
    templateUrl: "wwwroot/feedback/feedback-editor.component.html",
	styleUrls: ["wwwroot/feedback/feedback-editor.component.css"],
    selector: "feedback-editor",
    inputs: ['entity','addOrUpdate','remove','create']
})
export class FeedbackEditorComponent {}


