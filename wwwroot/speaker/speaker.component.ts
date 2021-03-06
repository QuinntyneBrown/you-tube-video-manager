require("./speaker.component.css");

import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { SpeakerActionCreator } from "./speaker.actions";

@Component({
    templateUrl: "wwwroot/speaker/speaker.component.html",
	styleUrls: ["wwwroot/speaker/speaker.component.css"],
    selector: "speaker",
    viewProviders: ["speakerActionCreator"]
})
export class SpeakerComponent {
    constructor(private speakerActionCreator: SpeakerActionCreator) { }
  
}
