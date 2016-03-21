import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import * as actions from "../you-tube-video/you-tube-video.actions";
import { HomePageActionCreator } from "./home-page.actions";
import { PlaylistActionCreator } from "../playlist/playlist.actions";

@Component({
    route:"/",
    templateUrl: "wwwroot/home-page/home-page.component.html",
    selector: "home-page",
    providers: ["homePageActionCreator","playlistActionCreator"]
})
@CanActivate(["invokeAsync", "youTubeVideoActionCreator", (invokeAsync, youTubeVideoActionCreator: actions.YouTubeVideoActionCreator) => {
    return invokeAsync(youTubeVideoActionCreator.all);
}])
export class HomePageComponent {
    constructor(private homePageActionCreator: HomePageActionCreator, playlistActionCreator: PlaylistActionCreator) { }
  
    storeOnChange = state => this.videos = state.youTubeVideos;

    //colors = [{ front: '#DCC6E0', back: '#C5EFF7' }];
    colors = 1;
    videos;
}
