import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import * as actions from "./you-tube-video.actions";
import { YouTubeVideo } from "./you-tube-video.model";
import { pluck } from "../core/pluck";

@Component({
    route: "/youtubevideo/play/:youTubeVideoId",
    templateUrl: "wwwroot/you-tube-video/you-tube-video-player-page.component.html",
    styleUrls: ["wwwroot/you-tube-video/you-tube-video-player-page.component.css"],
    selector: "you-tube-video-player-page",
    providers: ["$routeParams","youTubeVideoActionCreator"]
})
@CanActivate(["$q", "$route", "invokeAsync", "youTubeVideoActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, youTubeVideoActionCreator: actions.YouTubeVideoActionCreator) => {
    var youTubeVideoId = $route.current.params.youTubeVideoId;
    return invokeAsync({ action: youTubeVideoActionCreator.getByVideoId, params: { id: youTubeVideoId } });
    
}])
export class YouTubeVideoPlayerPageComponent {
    constructor(private $routeParams: any, youTubeVideoActionCreator: actions.YouTubeVideoActionCreator) { }
    youTubeVideoId = this.$routeParams.youTubeVideoId;
    storeOnChange = state => {
        this.entity = pluck({ value: this.$routeParams["youTubeVideoId"], items: state.youTubeVideos, key: "youTubeVideoId" }) as YouTubeVideo;
    }
    entity: YouTubeVideo;
    playerHeight:number = 400;
    playerWidth: number = 600;
}