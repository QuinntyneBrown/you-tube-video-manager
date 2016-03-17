import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./you-tube-video.actions";
import { YouTubeVideo } from "./you-tube-video.model";

@Component({
    route: "/you-tube-video/edit/:id",
    templateUrl: "wwwroot/you-tube-video/you-tube-video-editor.component.html",
	styleUrls: ["wwwroot/you-tube-video/you-tube-video-editor.component.css"],
    selector: "you-tube-video-editor",
    providers: ["$location", "$routeParams", "youTubeVideoActionCreator", "invokeAsync"],
    inputs: ['entity']
})
export class YouTubeVideoEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private youTubeVideoActionCreator: actions.YouTubeVideoActionCreator, private invokeAsync) { }    
    addOrUpdate = () => this.youTubeVideoActionCreator.addOrUpdate({ data: this.entity });         
    create = () => { this.youTubeVideoActionCreator.create(); }
    remove = () => this.youTubeVideoActionCreator.remove({ id: this.entity.id });         
	entity: YouTubeVideo;
}
