require("./log-entry-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/log-entry/log-entry-list.component.html",
	styleUrls: ["wwwroot/log-entry/log-entry-list.component.css"],
    selector: "log-entry-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogEntryListComponent {
    constructor() { }     
}
