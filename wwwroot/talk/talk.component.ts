require("./talk.component.css");

import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { TalkActionCreator } from "./talk.actions";

@Component({
    templateUrl: "wwwroot/talk/talk.component.html",
	styleUrls: ["wwwroot/talk/talk.component.css"],
    selector: "talk",
    viewProviders: ["talkActionCreator"]
})
export class TalkComponent {
    constructor(private talkActionCreator: TalkActionCreator) { }
  
}
