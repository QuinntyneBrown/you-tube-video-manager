import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "../you-tube-video/you-tube-video.actions";
import { HomePageActionCreator } from "./home-page.actions";

@Component({
    route:"/",
    templateUrl: "wwwroot/home-page/home-page.component.html",
    selector: "home-page",
    providers: ["homePageActionCreator"]
})
@CanActivate(["invokeAsync", "youTubeVideoActionCreator", (invokeAsync, youTubeVideoActionCreator: actions.YouTubeVideoActionCreator) => {
    return invokeAsync(youTubeVideoActionCreator.all);
}])
export class HomePageComponent {
    constructor(private homePageActionCreator: HomePageActionCreator) { }
  
    storeOnChange = state => this.videos = state.youTubeVideos;

    videos;
}
