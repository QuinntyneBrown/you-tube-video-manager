require("./talk-editor.component.css");

import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    templateUrl: "wwwroot/talk/talk-editor.component.html",
	styleUrls: ["wwwroot/talk/talk-editor.component.css"],
    selector: "talk-editor",
    inputs: ['entity','addOrUpdate','remove','create']
})
export class TalkEditorComponent {}


