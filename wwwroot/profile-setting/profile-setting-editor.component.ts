require("./profile-setting-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/profile-setting/profile-setting-editor.component.html",
	styleUrls: ["wwwroot/profile-setting/profile-setting-editor.component.css"],
    selector: "profile-setting-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSettingEditorComponent {}


