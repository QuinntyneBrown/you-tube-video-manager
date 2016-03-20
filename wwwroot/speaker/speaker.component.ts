require("./speaker.component.css");

import { CanActivate, Component } from "../core/component-decorators";
import { SpeakerActionCreator } from "./speaker.actions";

@Component({
    templateUrl: "wwwroot/speaker/speaker.component.html",
	styleUrls: ["wwwroot/speaker/speaker.component.css"],
    selector: "speaker",
    providers: ["speakerActionCreator"]
})
export class SpeakerComponent {
    constructor(private speakerActionCreator: SpeakerActionCreator) { }
  
}
