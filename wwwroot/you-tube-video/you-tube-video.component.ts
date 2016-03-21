import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { YouTubeVideoActionCreator } from "./you-tube-video.actions";

@Component({
    templateUrl: "wwwroot/you-tube-video/you-tube-video.component.html",
	styleUrls: ["wwwroot/you-tube-video/you-tube-video.component.css"],
    selector: "you-tube-video",
    providers: ["youTubeVideoActionCreator"]
})
export class YouTubeVideoComponent {
    constructor(private youTubeVideoActionCreator: YouTubeVideoActionCreator) { }
  
}
