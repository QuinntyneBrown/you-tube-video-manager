require("./technology-editor.component.css");

import { CanActivate, Component } from "../core/component-decorators";

@Component({
    templateUrl: "wwwroot/technology/technology-editor.component.html",
	styleUrls: ["wwwroot/technology/technology-editor.component.css"],
    selector: "technology-editor",
    inputs: ['entity','addOrUpdate','remove','create']
})
export class TechnologyEditorComponent {}


