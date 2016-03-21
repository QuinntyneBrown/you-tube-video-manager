require("./talk-list.component.css");

import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    templateUrl: "wwwroot/talk/talk-list.component.html",
	styleUrls: ["wwwroot/talk/talk-list.component.css"],
    selector: "talk-list",
    inputs: ['entities','edit','remove']
})
export class TalkListComponent {
    constructor() { }     
}
