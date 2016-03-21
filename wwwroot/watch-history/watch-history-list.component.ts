require("./watch-history-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/watch-history/watch-history-list.component.html",
	styleUrls: ["wwwroot/watch-history/watch-history-list.component.css"],
    selector: "watch-history-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchHistoryListComponent {
    constructor() { }     
}
