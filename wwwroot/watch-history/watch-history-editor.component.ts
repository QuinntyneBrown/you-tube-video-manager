require("./watch-history-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/watch-history/watch-history-editor.component.html",
	styleUrls: ["wwwroot/watch-history/watch-history-editor.component.css"],
    selector: "watch-history-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchHistoryEditorComponent {}


