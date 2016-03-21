import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    templateUrl: "wwwroot/collection/collection-editor.component.html",
	styleUrls: ["wwwroot/collection/collection-editor.component.css"],
    selector: "collection-editor",
    inputs: ['entity','addOrUpdate','remove','create']
})
export class CollectionEditorComponent {}


