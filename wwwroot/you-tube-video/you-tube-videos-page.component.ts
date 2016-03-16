import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./you-tube-video.actions";

@Component({
    route:"/youTubeVideos",
    templateUrl: "wwwroot/you-tube-video/you-tube-videos-page.component.html",
    selector: "you-tube-videos-page",
    providers: ["$location","youTubeVideoActionCreator"]
})
@CanActivate([
    "youTubeVideoActionCreator", "invokeAsync",
    (youTubeVideoActionCreator: YouTubeVideoActionCreator, invokeAsync) => invokeAsync(youTubeVideoActionCreator.all)
])
export class YouTubeVideosPageComponent { 
    constructor(private $location: angular.ILocationService, youTubeVideoActionCreator: actions.YouTubeVideoActionCreator) { }
    storeOnChange = state => {        
        if (state.lastTriggeredByAction instanceof actions.SetCurrentYouTubeVideoAction) {
            this.$location.path("/youTubeVideo/edit/" + state.lastTriggeredByAction.entity.id);
        }
    }
}
