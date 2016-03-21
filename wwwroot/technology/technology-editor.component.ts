require("./technology-editor.component.css");

import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    templateUrl: "wwwroot/technology/technology-editor.component.html",
	styleUrls: ["wwwroot/technology/technology-editor.component.css"],
    selector: "technology-editor",
    inputs: ['entity','addOrUpdate','remove','create']
})
export class TechnologyEditorComponent {}


