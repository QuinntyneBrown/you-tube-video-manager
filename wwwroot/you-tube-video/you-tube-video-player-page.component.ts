import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./you-tube-video.actions";

@Component({
    templateUrl: "wwwroot/you-tube-video/you-tube-video-player-page.component.html",
    styleUrls: ["wwwroot/you-tube-video/you-tube-video-player-page.component.css"],
    selector: "you-tube-video-player-page",
    providers: ["$routeParams","youTubeVideoActionCreator"]
})
export class YouTubeVideoPlayerPageComponent {
    constructor(private $routeParams: any, youTubeVideoActionCreator: actions.YouTubeVideoActionCreator) { }
    youTubeVideoId = this.$routeParams.youTubeVideoId;
}