import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./you-tube-video.actions";

@Component({
    templateUrl: "wwwroot/you-tube-video/you-tube-video-player.component.html",
    styleUrls: ["wwwroot/you-tube-video/you-tube-video-player.component.css"],
    selector: "you-tube-video-player",
    providers: ["$routeParams", "youTubeVideoActionCreator"]
})
export class YouTubeVideoPlayerComponent {
    constructor() {
    }
}