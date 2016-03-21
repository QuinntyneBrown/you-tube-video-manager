import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { TagActionCreator } from "./tag.actions";

@Component({
    templateUrl: "wwwroot/tag/tag.component.html",
	styleUrls: ["wwwroot/tag/tag.component.css"],
    selector: "tag",
    providers: ["tagActionCreator"]
})
export class TagComponent {
    constructor(private tagActionCreator: TagActionCreator) { }
  
}
