require("./log-entry-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/log-entry/log-entry-editor.component.html",
	styleUrls: ["wwwroot/log-entry/log-entry-editor.component.css"],
    selector: "log-entry-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogEntryEditorComponent {}


