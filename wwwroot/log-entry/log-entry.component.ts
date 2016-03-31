require("./log-entry.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { LogEntryActionCreator } from "./log-entry.actions";

@Component({
    templateUrl: "wwwroot/log-entry/log-entry.component.html",
	styleUrls: ["wwwroot/log-entry/log-entry.component.css"],
    selector: "log-entry",
    viewProviders: ["logEntryActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogEntryComponent {
    constructor(private logEntryActionCreator: LogEntryActionCreator) { }
  
}
