import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import * as actions from "../you-tube-video/you-tube-video.actions";
import { HomePageActionCreator } from "./home-page.actions";
import { PlaylistActionCreator } from "../playlist/playlist.actions";

@Component({
    route:"/",
    templateUrl: "wwwroot/home-page/home-page.component.html",
    selector: "home-page",
    viewProviders: ["homePageActionCreator","playlistActionCreator"]
})
@CanActivate(["invokeAsync", "youTubeVideoActionCreator", (invokeAsync, youTubeVideoActionCreator: actions.YouTubeVideoActionCreator) => {
    return invokeAsync(youTubeVideoActionCreator.all);
}])
export class HomePageComponent {
    constructor(private homePageActionCreator: HomePageActionCreator, playlistActionCreator: PlaylistActionCreator) { }
  
    storeOnChange = state => {
        this.videos = state.youTubeVideos;
        console.log(JSON.stringify(this.videos));
    };


    colors = 1;
    videos;
}
