require("./account-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/account/account-editor.component.html",
	styleUrls: ["wwwroot/account/account-editor.component.css"],
    selector: "account-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountEditorComponent {}


