require("./profile-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/profile/profile-editor.component.html",
	styleUrls: ["wwwroot/profile/profile-editor.component.css"],
    selector: "profile-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditorComponent {}


