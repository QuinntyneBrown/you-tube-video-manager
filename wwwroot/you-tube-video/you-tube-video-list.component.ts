import { CanActivate, Component } from "../core/component-decorators";
import { YouTubeVideoActionCreator } from "./you-tube-video.actions";

@Component({
    route: "/youTubeVideo/list",
    templateUrl: "wwwroot/you-tube-video/you-tube-video-list.component.html",
	styleUrls: ["wwwroot/you-tube-video/you-tube-video-list.component.css"],
    selector: "you-tube-video-list",
    providers: ["$location", "youTubeVideoActionCreator"],
    inputs: ['entities']
})
export class YouTubeVideoListComponent {
    constructor(private $location: angular.ILocationService,private youTubeVideoActionCreator: YouTubeVideoActionCreator) { }     
    entities;
    remove = entity => this.youTubeVideoActionCreator.remove({ entity: entity });
    edit = entity => this.youTubeVideoActionCreator.edit({ entity: entity });    
}
