require("./speaker-editor.component.css");

import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    templateUrl: "wwwroot/speaker/speaker-editor.component.html",
	styleUrls: ["wwwroot/speaker/speaker-editor.component.css"],
    selector: "speaker-editor",
    inputs: ['entity','addOrUpdate','remove','create']
})
export class SpeakerEditorComponent {}


