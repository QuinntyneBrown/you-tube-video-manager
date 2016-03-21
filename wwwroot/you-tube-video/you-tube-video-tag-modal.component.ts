import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { YouTubeVideoActionCreator } from "./you-tube-video.actions";

require("./you-tube-video-tag-modal.component.css");

@Component({
    templateUrl: "wwwroot/you-tube-video/you-tube-video-tag-modal.component.html",
    styleUrls: ["wwwroot/you-tube-video/you-tube-video-tag-modal.component.css"],
    selector: "you-tube-video-tag-modal",
    providers: ["youTubeVideoActionCreator"]
})
export class YouTubeVideoTagModalComponent {
    constructor(private youTubeVideoActionCreator: YouTubeVideoActionCreator) { }

}
