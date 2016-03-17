import { CanActivate, Component } from "../core/component-decorators";

@Component({
    templateUrl: "wwwroot/tag/tag-editor.component.html",
	styleUrls: ["wwwroot/tag/tag-editor.component.css"],
    selector: "tag-editor",
    inputs: ['entity','addOrUpdate','remove','create']
})
export class TagEditorComponent {}


