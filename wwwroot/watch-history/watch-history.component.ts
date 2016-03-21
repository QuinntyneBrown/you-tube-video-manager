require("./watch-history.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { WatchHistoryActionCreator } from "./watch-history.actions";

@Component({
    templateUrl: "wwwroot/watch-history/watch-history.component.html",
	styleUrls: ["wwwroot/watch-history/watch-history.component.css"],
    selector: "watch-history",
    providers: ["watchHistoryActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchHistoryComponent {
    constructor(private watchHistoryActionCreator: WatchHistoryActionCreator) { }
  
}
