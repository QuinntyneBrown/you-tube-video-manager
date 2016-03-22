require("./photo-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/photo/photo-editor.component.html",
	styleUrls: ["wwwroot/photo/photo-editor.component.css"],
    selector: "photo-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoEditorComponent {}


