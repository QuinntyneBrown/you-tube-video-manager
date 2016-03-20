require("./talk.component.css");

import { CanActivate, Component } from "../core/component-decorators";
import { TalkActionCreator } from "./talk.actions";

@Component({
    templateUrl: "wwwroot/talk/talk.component.html",
	styleUrls: ["wwwroot/talk/talk.component.css"],
    selector: "talk",
    providers: ["talkActionCreator"]
})
export class TalkComponent {
    constructor(private talkActionCreator: TalkActionCreator) { }
  
}
