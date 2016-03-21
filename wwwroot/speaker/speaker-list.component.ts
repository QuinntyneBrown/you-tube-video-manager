require("./speaker-list.component.css");

import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    templateUrl: "wwwroot/speaker/speaker-list.component.html",
	styleUrls: ["wwwroot/speaker/speaker-list.component.css"],
    selector: "speaker-list",
    inputs: ['entities','edit','remove']
})
export class SpeakerListComponent {
    constructor() { }     
}
