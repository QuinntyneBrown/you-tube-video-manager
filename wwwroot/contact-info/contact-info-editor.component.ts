require("./contact-info-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/contact-info/contact-info-editor.component.html",
	styleUrls: ["wwwroot/contact-info/contact-info-editor.component.css"],
    selector: "contact-info-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInfoEditorComponent {}


