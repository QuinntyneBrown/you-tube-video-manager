﻿import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
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
    ngOnit = () => { }    
    playerHeight:number = 400;
    playerWidth: number = 600;
}